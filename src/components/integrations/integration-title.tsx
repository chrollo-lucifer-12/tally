"use client"

import Image from "next/image";

const IntegrationTitle = ({src, title, description }: {src : string, title : string, description : string}) =>  {
    return <div>
        <Image src={src} alt={"icon"} width={25} height={25} />
        <div className={"flex flex-col gap-y-1 text-xs"}>
            <p className={"text-black font-bold"}>{title}</p>
            <p className={"text-gray-6"}>{description}</p>
        </div>
    </div>
}

export default IntegrationTitle