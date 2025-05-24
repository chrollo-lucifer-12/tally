import {z} from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];


export const SignupSchemaEmail = z.object({
    email : z.string().min(1, {message : "Please enter a value"})
})

export const CompleteInfoSchema = z.object({
    firstname : z.string().min(1, {message : "Please enter a valid value"}),
    lastname : z.string().min(1, {message : "Please enter a valid value"}),
    password : z.string().min(8, "Password must be at least 8 characters long")

        .regex(/[!@#$%^&*()\-_=+{};:,<.>]/, "Password must contain at least one special character"),
    email : z.string().email()
})

export const VerifyEmailSchema = z.object({
    otp: z.string()
        .min(6, { message: "OTP must be 6 digits" })
        .max(6, { message: "OTP must be 6 digits" }),
    email : z.string().email()
});

export const LoginSchema = z.object({
    password : z.string().min(8, "Password must be at least 8 characters long"),
    email : z.string().email()
})

export const WorkspaceSchema = z.object({
    name : z.string().min(1, {message : "Name cannot be empty"})
})

export const RenameWorkspaceSchema = z.object({
    name : z.string().min(1, {message : "Name cannot be empty"}),
    id : z.string()
})

export const RenameFormSchema = z.object({
    name : z.string().min(1, {message : "Name cannot be empty"}),
    formId : z.string()
})


export const UpdateProfileSchema = z.object({
    photo : z.any().refine((file) => file?.size <= MAX_FILE_SIZE, {message : "Max image size is 5MB"}).refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        "Only .jpg, .jpeg, .png and .webp formats are supported.").optional(),
    firstname : z.string().min(3, {message : "Enter valid first name"}).optional(),
    lastname : z.string().min(3, {message : "Enter valid first name"}).optional()
})

export type Workspace = {
    forms: {
        id: string
        workspaceId: string
        title: string
        isPublishes: boolean
        createdAt: Date
        updatedAt: Date
        inTrash: boolean
        userId: string | null
    }[]
} & {
    id: string
    name: string
    adminId: string
}

export type Form = {
    id: string
    title: string
    updatedAt: Date
}

export type FormState =
    | {
    errors?: {
        name?: string[]
        email?: string[]
        password?: string[]
    }
    redirect ?: string
}
    | undefined