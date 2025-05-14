"use server"

import {SignupSchemaEmail, CompleteInfoSchema, VerifyEmailSchema} from "@/lib/definitions";
import {prisma} from "@/lib/db"
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_KEY);

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
            redirect : `/verify?email=${email}`
        }

    } catch (e) {
        console.log(e);
    }
}

export const CompleteInfoAction = async (state :any, formData : FormData) => {
    const validatedFields = CompleteInfoSchema.safeParse({
        firstname : formData.get("firstname"),
        lastname : formData.get("lastname"),
        password : formData.get("password"),
        email : formData.get("email")
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

export const VerifyEmailAction = async (state : any, formData : FormData) => {

    const validatedFields = VerifyEmailSchema.safeParse({
        otp :  formData.get("otp"),
        email : formData.get("email")
    })

    if (!validatedFields.success) {

        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }
    const {otp, email} = validatedFields.data


    try {
        const findOtp = await prisma.otp.findFirst({where : {user : {
            email
                }}});

        if (!findOtp || findOtp.otp!==parseInt(otp)) {
            console.log("invalid")
            return {
                errors: {
                    otp: 'Invalid or expired OTP',
                },
            };
        }

        await prisma.user.update({where : {email}, data : {verified : true}})

        await prisma.otp.deleteMany({where : {user : {email}}});

        return {
            redirect : `/complete-profile?email=${email}`
        }
    } catch (e) {
        console.log(e);
    }
}

export const GenerateOtp = async (email : string) => {
    try {
        const findOtp = await prisma.otp.findFirst({where : {user : {email}}});
        if (findOtp) {
            const now = new Date();
            const diffInMs = now.getTime() - findOtp.createdAt.getTime();
            const diffInMinutes = diffInMs / (1000 * 60);

            if (diffInMinutes < 15) {
                return;
            }
        }

        await prisma.otp.deleteMany({where : {user: {email}}});

        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        await prisma.otp.create({
            data: {
                otp : parseInt(otp),
                user : {
                    connect : {
                        email
                    }
                }
            },
        });

        await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: [email],
            subject: 'Account Verification',
            html: `<p>Otp for Verification <strong>${otp}</strong></p>`
        });
    } catch (e) {
        console.log(e);
    }
}