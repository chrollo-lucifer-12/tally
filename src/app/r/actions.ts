"use server"

import {getCurrentSession} from "@/lib/cookie";
import {prisma} from "@/lib/db";
import axios from "axios";


export const UpdateWebhook = async (formId : string, review : {userId : string, questionId : string, formId : string, response : string}[] ) => {
    try {

        const form = await prisma.form.findUnique({where : {id : formId as string}});
        if (!form!.webhookUrl) return;

     //   console.log("hitting api");

        const formName = form!.title;

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

        console.log(data);

        await axios.post(form!.webhookUrl, {
            formName,
            formId,
            data
        })

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

        return {
            success : true,
            message : ""
        }
    } catch (e) {
        console.log(e);
    }
}