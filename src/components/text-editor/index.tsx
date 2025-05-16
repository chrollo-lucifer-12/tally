"use client";

import dynamic from "next/dynamic";


const Editor = dynamic(() => import("./editor"), { ssr: false });

export const TextEditor = (props: { content: any | null, formId : string
}) => {
    return <Editor {...props} />;
};
