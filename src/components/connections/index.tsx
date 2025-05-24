"use client"

import Image from "next/image";
import {Trash2Icon} from "lucide-react";
import {deleteWebhook} from "@/app/(main)/actions";

const Connections = ({url,id} : {url : string,id:string}) => {


    return <div className={"w-full p-2 mt-6 flex justify-between items-center"}>
        <div className={"flex items-center gap-x-2"}>
            <Image src={"/icon_WEBHOOKS.png"} alt={"icon"} width={20} height={20}/>
            <div className={"flex flex-col gap-y-1 text-xs"}>
                <p className={"text-black font-bold"}>Webhook</p>
                <p className={"text-gray-6"}>{url}</p>
            </div>
        </div>
        <Trash2Icon className={"w-3 h-3 text-red-400 cursor-pointer"} onClick={async () => {
            await deleteWebhook(id)
        }} />
    </div>
}

export default Connections