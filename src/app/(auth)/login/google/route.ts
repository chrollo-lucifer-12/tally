import { generateState, generateCodeVerifier } from "arctic";
import { google } from "@/lib/auth";
import { cookies } from "next/headers";

export async function GET(): Promise<Response> {
    const state = generateState();
    const codeVerifier = generateCodeVerifier();
    const url = google.createAuthorizationURL(state, codeVerifier, ["openid", "profile", "email"]);

    const cookieStore = await cookies();
    cookieStore.set("google_oauth_state", state, {
        path: "/",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 100,
        sameSite: "lax"
    });
    cookieStore.set("google_code_verifier", codeVerifier, {
        path: "/",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 100,
        sameSite: "lax"
    });

    return new Response(null, {
        status: 302,
        headers: {
            Location: url.toString()
        }
    });
}