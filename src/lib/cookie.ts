import {cookies} from "next/headers";
import {cache} from "react";
import {validateSessionToken} from "@/lib/session";

// ...

export async function setSessionTokenCookie(token: string, expiresAt: Date): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.set("session", token, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        expires: expiresAt,
        path: "/"
    });
}

export async function deleteSessionTokenCookie(): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.set("session", "", {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        maxAge: 0,
        path: "/"
    });
}

export const getCurrentSession = cache(async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get("session")?.value ?? null;
    if (token === null) {
        return { session: null, user: null };
    }
    return await validateSessionToken(token);
});