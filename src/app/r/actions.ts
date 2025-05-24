"use server"

import {getCurrentSession} from "@/lib/cookie";
import {prisma} from "@/lib/db";
import axios from "axios";

export const getQuestion = async (review : {userId : string, questionId : string, formId : string, response : string}[]) => {
    const data = await Promise.all(
        review.map(async (r) => {
            const question = await prisma.question.findUnique({
                where: { id: r.questionId },
                select: { title: true },
            });

            return {
                question: question?.title || "Unknown Question",
                response: r.response,
            };
        })
    );

    return data;
}

export const UpdateWebhook = async (formId : string, review : {userId : string, questionId : string, formId : string, response : string}[] ) => {
    try {

        const form = await prisma.form.findUnique({where : {id : formId as string}});
        if (!form!.webhookUrl) return;

     //   console.log("hitting api");

        const formName = form!.title;

       const data = await getQuestion(review);

        await axios.post(form!.webhookUrl, {
            formName,
            formId,
            data
        })

    } catch (e) {
        console.log(e);
    }
}

export const UpdateNotion = async (formId : string,review : {userId : string, questionId : string, formId : string, response : string}[]) => {
    try {
         const form = await prisma.form.findUnique({where : {id : formId as string}});
         if (!form!.notionToken || !form!.notionDatabaseId) return;

        const notionToken = form!.notionToken;
        const databaseId = form!.notionDatabaseId;

        const data = await getQuestion(review);

        for (const entry of data) {
            const res = await fetch("https://api.notion.com/v1/pages", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${notionToken}`,
                    "Content-Type": "application/json",
                    "Notion-Version": "2022-06-28",
                },
                body: JSON.stringify({
                    parent: {
                        database_id: databaseId,
                    },
                    properties: {
                        // Map your columns here; these keys must exactly match your Notion DB columns
                        Question: {
                            title: [
                                {
                                    text: {
                                        content: entry.question,
                                    },
                                },
                            ],
                        },
                        Response: {
                            rich_text: [
                                {
                                    text: {
                                        content: entry.response,
                                    },
                                },
                            ],
                        },
                    },
                }),
            });

            if (!res.ok) {
                const errorText = await res.text();
                console.error("Failed to create Notion page:", errorText);
            }
        }

    } catch (e) {
        console.log(e);
    }
}

export const SubmitResponse = async (state : any,formData : FormData) => {
    try {

        const {user} = await getCurrentSession();

        if (!user) return {success : false, message : "Please login to submit a response"};

        const formId = formData.get("formid");

        let review: {userId : string, questionId : string, formId : string, response : string}[] = []

        for (const [key, value] of formData.entries()) {
            if (key.startsWith("$ACTION") || key.startsWith("formid")) continue;
            //data[key] = value.toString();
            review.push({userId : user.id, questionId : key, formId : formId?.toString()!, response : JSON.stringify(value)});
        }



        await prisma.review.createMany({
            data : review
        })

        await UpdateWebhook(formId as string, review);
        await UpdateNotion(formId as string, review);

        return {
            success : true,
            message : ""
        }
    } catch (e) {
        console.log(e);
    }
}