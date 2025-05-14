import {z} from "zod";

export const SignupSchemaEmail = z.object({
    email : z.string().min(1, {message : "Please enter a value"})
})