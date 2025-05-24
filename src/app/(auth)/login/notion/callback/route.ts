import { prisma } from "@/lib/db";

export async function GET(req: Request) {
    const url = new URL(req.url);
    const code = url.searchParams.get("code");
    const stateRaw = url.searchParams.get("state") || "{}";

    if (!code) {
        return new Response(JSON.stringify({ error: "Missing code" }), { status: 400, headers: { "Content-Type": "application/json" } });
    }

    const state = JSON.parse(decodeURIComponent(stateRaw));
    const formId = state.formId;

    const redirectUri = `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/notion/callback`;

    const tokenRes = await fetch("https://api.notion.com/v1/oauth/token", {
        method: "POST",
        headers: {
            Authorization:
                "Basic " + Buffer.from(`${process.env.NEXT_PUBLIC_NOTION_CLIENT_ID}:${process.env.NOTION_CLIENT_SECRET}`).toString("base64"),
            "Content-Type": "application/json",
            "Notion-Version": "2022-06-28",
        },
        body: JSON.stringify({
            grant_type: "authorization_code",
            code,
            redirect_uri: redirectUri,
        }),
    });

    if (!tokenRes.ok) {
        return new Response(JSON.stringify({ error: "Failed to fetch token" }), { status: 500, headers: { "Content-Type": "application/json" } });
    }

    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    await prisma.form.update({
        where: { id: formId },
        data: { notionToken: accessToken, notionDatabaseId: tokenData.database_id },
    });

    // Redirect the user after updating the token
    return new Response(null, {
        status: 302,
        headers: {
            Location: `${process.env.NEXT_PUBLIC_BASE_URL}/forms/${formId}/integrations`,
        },
    });
}
