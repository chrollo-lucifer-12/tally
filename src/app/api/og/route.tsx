import { ImageResponse } from 'next/og';
import {LinkPreview} from "@/components/link-preview";

export async function GET(req : Request) {

    return new ImageResponse(
        (
            <LinkPreview href={"/"}/>
        ),
        {
            width: 1200,
            height: 630,
        },
    );
}