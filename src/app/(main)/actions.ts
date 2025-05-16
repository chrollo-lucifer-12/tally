"use server"

import {deleteSessionTokenCookie, getCurrentSession} from "@/lib/cookie";
import {prisma} from "@/lib/db";
import {RenameWorkspaceSchema, WorkspaceSchema} from "@/lib/definitions";
import {revalidatePath} from "next/cache";
import {invalidateSession} from "@/lib/session";

export const getUserForms = async () => {
    try {
        const {user, session} = await  getCurrentSession();

        if (!user || !session) {
            return [];
        }

        return await prisma.form.findMany({where: {userId: user.id}, select: {id: true, title: true, updatedAt: true}});

    } catch (e) {
        console.log(e);
        return [];
    }
}

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