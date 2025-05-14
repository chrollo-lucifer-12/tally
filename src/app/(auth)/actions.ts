"use server"

import {SignupSchemaEmail, CompleteInfoSchema} from "@/lib/definitions";
import {prisma} from "@/lib/db"

export const SignupAction = async (state : any, formData : FormData) => {

    const validatedFields = SignupSchemaEmail.safeParse({
        email : formData.get("email")
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const {email}  = validatedFields.data

    try {
        const userExists = await prisma.user.findFirst({where : {email}});

        if (userExists) {
            if (!userExists.verified) {
                return {
                    redirect : `/verify?email=${email}`
                }
            }
           return {
               redirect : "/login"
           }
        }

        await prisma.user.create({
            data : {
                email
            }
        })

        return {
            redirect : `/complete-profile?email=${email}`
        }

    } catch (e) {
        console.log(e);
    }
}

export const CompleteInfoAction = async (state :any, formData : FormData) => {
    const validatedFields = CompleteInfoSchema.safeParse({
        firstname : formData.get("firstname"),
        lastname : formData.get("lastname"),
        password : formData.get("password")
    })


    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const {firstname,lastname,password,email} = validatedFields.data

    try {
        await prisma.user.update({
            where : {email},
            data : {
                firstname,
                lastname,
                password
            }
        })
    } catch (e) {
        console.log(e);
    }
}