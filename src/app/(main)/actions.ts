"use server"

import {getCurrentSession} from "@/lib/cookie";
import {prisma} from "@/lib/db";
import {WorkspaceSchema} from "@/lib/definitions";

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

        await prisma.workspace.create({
            data : {
                adminId : user.id,
                name
            }
        })

        return {
            message : "Workspace Created"
        }

    } catch (e) {
        console.log(e);
    }
}