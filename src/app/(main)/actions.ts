"use server"

import {deleteSessionTokenCookie, getCurrentSession} from "@/lib/cookie";
import {prisma} from "@/lib/db";
import {RenameFormSchema, RenameWorkspaceSchema, UpdateProfileSchema, WorkspaceSchema} from "@/lib/definitions";
import {revalidatePath} from "next/cache";
import {invalidateSession} from "@/lib/session";
import {supabase} from '@/lib/supabase/server';


export const getWorkspaces = async () => {
    try {
        const {user, session} = await getCurrentSession();

        if (!user || !session) {
            return [];
        }

        const workspaces = await prisma.workspace.findMany({
            where: {
                OR: [
                    {adminId: user.id},
                    {
                        userWorkspaceMaps: {
                            some: {
                                userId: user.id
                            }
                        }
                    }
                ]
            },
            include : {
                forms : {
                    where: {
                        inTrash : false
                    }
                }
            }
        });

        return workspaces;

    } catch (e) {
        console.log(e);
        return [];
    }
}

export const getUserWorkspaces = async () => {
    try {
        const {user, session} = await getCurrentSession();

        if (!user || !session) {
            return [];
        }

        const workspaces = await prisma.workspace.findMany({
            where : {
                adminId : user.id
            }
        })

        return workspaces;
    } catch (e) {
        console.log(e);
        return[];
    }
}

export const createWorkspace = async  (state : any, formData : FormData) => {

    const validatedFields = WorkspaceSchema.safeParse({
        name : formData.get("name")
    })

    if (!validatedFields.success) {
        return {
            errors : validatedFields.error.flatten().fieldErrors
        }
    }

    const {name} = validatedFields.data

    try {
        const {user, session} = await getCurrentSession();

        if (!user || !session) {
            return;
        }

        const count = await prisma.workspace.count({where : {adminId : user.id}})

        if (count === 2) {
            return {
                message : "Cannot create more than 2 workspaces"
            }
        }

        await prisma.workspace.create({
            data : {
                adminId : user.id,
                name
            }
        })

        revalidatePath("/dashboard")

        return {
            message : "Workspace Created"
        }

    } catch (e) {
        console.log(e);
    }
}

export const renameWorkspace = async (state : any, formData : FormData) => {
    const validatedFields = RenameWorkspaceSchema.safeParse({
        name: formData.get("name"),
        id: formData.get('id')
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors
        }
    }

    const {name, id} = validatedFields.data

    try {
        const {user, session} = await getCurrentSession();

        if (!user || !session) {
            return;
        }

        await prisma.workspace.update({
            where: {id},
            data: {
                name
            }
        })

        revalidatePath("/dashboard")

        return {
            message: "Workspace Renamed"
        }
    } catch (e) {
        console.log(e);
    }
}

export const deleteAccount = async () => {
    try {
        const {user, session} = await getCurrentSession();

        if (!user) return;

        await deleteSessionTokenCookie();
        await invalidateSession(session.id);
        await prisma.workspace.deleteMany({where : {adminId : user.id}})
        await prisma.form.deleteMany({where : {userId : user.id}})
        await prisma.user.delete({
            where : {id : user.id}
        })
        revalidatePath("/settings");
    } catch (e) {
        console.log(e);
    }
}

export const updateProfileAction = async (state : any, formData : FormData) => {

    const validatedFields = UpdateProfileSchema.safeParse({
        firstname : formData.get('firstname'),
        lastname : formData.get('lastname'),
        photo : formData.get('photo')
    })

    if (!validatedFields.success) {
        return {
            errors : validatedFields.error.flatten().fieldErrors
        }
    }

    const {lastname, firstname, photo} = validatedFields.data

    try {

        const {user} = await getCurrentSession();
        if (!user) return;

        let imageUrl = null;
        if (photo) {
            const buffer = Buffer.from(await photo.arrayBuffer());
            const filename = photo.name.substring(0, photo.name.lastIndexOf('.'));
            const {error} = await supabase.storage.from("profile-photos").update(filename, buffer, {
                contentType : photo.type,
                upsert : true
            })
            if (error) {
                console.log(error);
                return;
            }
            const { data } = supabase.storage.from('profile-photos').getPublicUrl(filename);
            imageUrl = data.publicUrl;
        }

        await prisma.user.update({
            where : {id : user.id},
            data : {
                ...(firstname && {firstname}),
                ...(lastname && {lastname}),
                ...(imageUrl && {profileimage : imageUrl})
            }
        })

        revalidatePath("/dashboard")

    } catch (e) {
        console.log(e);
    }
}

export const createOrGetForm = async (formId : string) => {
    try {
        const {user} = await getCurrentSession();
        if (!user) return;

        let findForm = await prisma.form.findUnique({where : {id : formId}})
        if (findForm) {
            return findForm.content
        }

        let workspace = await prisma.workspace.findFirst({where : {adminId : user.id}})

        findForm = await prisma.form.create({
            data : {
                id: formId,
                userId : user.id,
                title : "Untitled",
                workspaceId : workspace!.id
            }
        })

        revalidatePath("/dashboard")

        return [];

    } catch (e) {
        console.log(e);
        return[]
    }
}

export const updateForm = async (formId : string, content : any) => {
    try {
        let questions: { type: any; title: any; formId: string; }[] = []

        content.map((c : any) => {
            if (c.type === "shortquestion" || c.type === "longquestion" || c.type === "mcq" || c.type === "contact" || c.type === "email" || c.type === "url") {
                questions.push({type : c.type, title : c.content[0]?.text || "", formId})
            }
        })

        await prisma.question.deleteMany({
            where : {formId}
        })

        await prisma.question.createMany({
            data : questions
        })

        await prisma.form.update({
            where : {id : formId},
            data : {
                content : JSON.stringify(content)
            }
        })

    } catch (e) {
        console.log(e);
    }
}

export const deleteForm = async (formId : string) => {
    try {
        await prisma.form.update({where : {id : formId}, data : {inTrash : true}})
       revalidatePath("/dashboard")
    } catch (e) {
        console.log(e);
    }
}

export const addWebhook = async (formData : FormData) => {

    const formId = formData.get("formId")
    const url = formData.get("url")

    if (!url) return;

    try {
        await prisma.form.update({
            where : {id : formId as string},
            data : {
                webhookUrl : url as string
            }
        })
    } catch (e) {
        console.log(e);
    }
}

export const renameForm = async (state : any, formData : FormData) => {
    const validatedFields = RenameFormSchema.safeParse({
        name: formData.get("name"),
        formId: formData.get('formId')
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors
        }
    }

    const {name, formId} = validatedFields.data
    console.log(name ,formId)

    try {
        const {user, session} = await getCurrentSession();

        if (!user || !session) {
            return;
        }

        await prisma.form.update({
            where: {id : formId},
            data: {
               title : name
            }
        })

        revalidatePath("/workspaces")

        return {
            message: "Form Renamed"
        }
    } catch (e) {
        console.log(e);
    }
}

export const deleteWebhook = async (id : string) => {
    try {
        await prisma.form.update({where : {id}, data : {webhookUrl : null}});
        revalidatePath("/forms")
    } catch (e) {
        console.log(e);
    }
}