"use server"

import {getCurrentSession} from "@/lib/cookie";
import {prisma} from "@/lib/db";

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

        return workspaces;
    } catch (e) {
        console.log(e);
        return [];
    }
}