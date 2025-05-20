"use server"

import {getCurrentSession} from "@/lib/cookie";
import {prisma} from "@/lib/db";

export const SubmitResponse = async (formData : FormData) => {
    try {

        const {user} = await getCurrentSession();

        if (!user) return;

        const formId = formData.get("formid");

        let review = []

        for (const [key, value] of formData.entries()) {
            if (key.startsWith("$ACTION_ID_") || key.startsWith("formid")) continue;
            //data[key] = value.toString();
            review.push({userId : user.id, questionId : key, formId : formId?.toString()!, response : JSON.stringify(value)});
        }


        console.log(review);
        await prisma.review.createMany({
            data : review
        })

    } catch (e) {
        console.log(e);
    }
}