"use client";

import dynamic from "next/dynamic";


const Editor = dynamic(() => import("./editor"), { ssr: false });

export const TextEditor = () => {
    return <Editor />;
};
