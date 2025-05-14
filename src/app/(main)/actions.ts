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