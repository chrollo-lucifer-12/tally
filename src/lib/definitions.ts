import {z} from "zod";

export const SignupSchemaEmail = z.object({
    email : z.string().min(1, {message : "Please enter a value"})
})

export const CompleteInfoSchema = z.object({
    firstname : z.string().min(1, {message : "Please enter a valid value"}),
    lastname : z.string().min(1, {message : "Please enter a valid value"}),
    password : z.string().min(8, "Password must be at least 8 characters long")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/\d/, "Password must contain at least one number")
        .regex(/[!@#$%^&*()\-_=+{};:,<.>]/, "Password must contain at least one special character"),
    email : z.string().email()
})

export const VerifyEmailSchema = z.object({
    otp: z.string()
        .min(6, { message: "OTP must be 6 digits" })
        .max(6, { message: "OTP must be 6 digits" }),
    email : z.string().email()
});