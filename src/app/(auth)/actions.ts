"use server"

import {SignupSchemaEmail, CompleteInfoSchema, VerifyEmailSchema, FormState, LoginSchema} from "@/lib/definitions";
import {prisma} from "@/lib/db"
import emailjs from '@emailjs/browser';
import {Session} from "@prisma/client";
import {createSession, generateSessionToken} from "@/lib/session";
import {setSessionTokenCookie} from "@/lib/cookie";
import {hash, compare} from "bcrypt"

emailjs.init(process.env.PUBLIC_KEY!);

export const SignupAction = async (state : FormState, formData : FormData) => {

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

export const LoginAction = async (state : FormState, formData : FormData) => {
    const validatedFields = LoginSchema.safeParse({
        email : formData.get("email"),
        password : formData.get("password")
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const {password, email} = validatedFields.data

    try {
        const userExists = await prisma.user.findUnique({where : {email}})

        if (!userExists) {
            return {
                errors : {
                    email : "This email doesn't exist"
                }
            }
        }

        if (!userExists.verified) {
            return {
                redirect : `/verify?email=${userExists.email}`
            }
        }

        if (!userExists.firstname) {
            return {
                redirect : `/complete-profile?email=${userExists.email}`
            }
        }

        const matchPassword = await compare(password, userExists.password!)

        if (!matchPassword) {
            return {
                errors : {
                    email : "Wrong password"
                }
            }
        }
        const token = generateSessionToken()
        await createSession(token, userExists.id)
        await setSessionTokenCookie(token, new Date(Date.now() + 30 * 24 * 60 * 60 * 1000))

        return {
            redirect :
                "/dashboard"

        }

    } catch (e) {
        console.log(e);
    }
}

export const CompleteInfoAction = async (state : FormState, formData : FormData) => {
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

        const findUser = await prisma.user.findUnique({where : {email}});

        const hashedPassword = await hash(password, 10);

        await prisma.user.update({
            where : {email},
            data : {
                firstname,
                lastname,
                password : hashedPassword
            }
        })

        const token = generateSessionToken()
        await createSession(token, findUser!.id)
        await setSessionTokenCookie(token, new Date(Date.now() + 30 * 24 * 60 * 60 * 1000))


        return {
            redirect : "/dashboard"
        }
    } catch (e) {
        console.log(e);
    }
}

export const VerifyEmailAction = async (state : FormState, formData : FormData) => {

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

        const templateParams = {
            email,
            otp,
        };

        await emailjs.send(
            process.env.SERVICE_ID!,
            process.env.TEMPLATE_ID!,
            templateParams
        );

    } catch (e) {
        console.log(e);
    }
}

export const CreateSession = async (session : Session) => {
    try {
        await prisma.session.create({
            data: session
        });
    } catch (e) {
        console.log(e)
    }
}

export const FindSession = async (sessionId : string) => {
    try {
       const result = await prisma.session.findUnique({
            where: {
                id: sessionId
            },
            include: {
                user: true
            }
        });
       return result
    } catch (e) {
        console.log(e)
    }
}

export const DeleteSession = async (sessionId : string) => {
    try {
        await prisma.session.delete({ where: { id: sessionId } });
    } catch (e) {
        console.log(e);
    }
}

export const UpdateSession = async (sessionId : string, expiresAt : Date) => {
    try {
        await prisma.session.update({
            where: {
                id: sessionId
            },
            data: {
                expiresAt: expiresAt
            }
        });
    } catch (e) {
        console.log(e);
    }
}

