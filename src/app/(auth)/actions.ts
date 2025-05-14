"use server"

import {SignupSchemaEmail} from "@/lib/definitions";

export const SignupAction = async (state : any, formData : FormData) => {

    const validatedFields = SignupSchemaEmail.safeParse({
        email : formData.get("email")
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    try {

    } catch (e) {
        console.log(e);
    }
}