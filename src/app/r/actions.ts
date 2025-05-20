"use server"

import {getCurrentSession} from "@/lib/cookie";
import {prisma} from "@/lib/db";
import {revalidatePath} from "next/cache";

export const SubmitResponse = async (state : any,formData : FormData) => {
    try {

        const {user} = await getCurrentSession();

        if (!user) return {success : false, message : "Please login to submit a response"};

        const formId = formData.get("formid");

        let review = []

        for (const [key, value] of formData.entries()) {
            if (key.startsWith("$ACTION") || key.startsWith("formid")) continue;
            //data[key] = value.toString();
            review.push({userId : user.id, questionId : key, formId : formId?.toString()!, response : JSON.stringify(value)});
        }


        console.log(review);
        await prisma.review.createMany({
            data : review
        })

        return {
            success : true,
            message : ""
        }
    } catch (e) {
        console.log(e);
    }
}