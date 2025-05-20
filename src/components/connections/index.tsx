"use client"

import Image from "next/image";

const Connections = ({url} : {url : string}) => {
    return <div className={"w-full p-2 mt-6 flex gap-x-2 items-center"}>
        <Image src={"/icon_WEBHOOKS.png"} alt={"icon"} width={20} height={20} />
        <div className={"flex flex-col gap-y-1 text-xs"}>
            <p className={"text-black font-bold"}>Webhook</p>
            <p className={"text-gray-6"}>{url}</p>
        </div>
    </div>
}

export default Connections