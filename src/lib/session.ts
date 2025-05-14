import {encodeBase32LowerCaseNoPadding, encodeHexLowerCase} from "@oslojs/encoding";
import {sha256} from "@oslojs/crypto/sha2";
import {CreateSession, DeleteSession, FindSession, UpdateSession} from "@/app/(auth)/actions";

export function generateSessionToken(): string {
    const bytes = new Uint8Array(20);
    crypto.getRandomValues(bytes);
    return encodeBase32LowerCaseNoPadding(bytes);
}

export async function createSession(token: string, userId: string) {
    const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
    const session = {
        id: sessionId,
        userId,
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
    };
    await CreateSession(session);
    return session;
}

export async function validateSessionToken(token: string) {
    const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
    const result = await FindSession(sessionId)
    if (!result) {
        return { session: null, user: null };
    }
    const { user, ...session } = result;
    if (Date.now() >= session.expiresAt.getTime()) {
      await  DeleteSession(sessionId)
        return { session: null, user: null };
    }
    if (Date.now() >= session.expiresAt.getTime() - 1000 * 60 * 60 * 24 * 15) {
        session.expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);
        await UpdateSession(session.id, session.expiresAt);
    }
    return { session, user };
}

export async function invalidateSession(sessionId: string): Promise<void> {
    await DeleteSession(sessionId);
}