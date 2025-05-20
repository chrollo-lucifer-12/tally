"use client"

import Image from "next/image";
import {useState} from "react";
import AddWebhook from "@/components/webhook-integration/add-webhook";

const WebhookIntegration = ({formId} : {formId : string}) => {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true);
    }

    if (open) {
        return <div className={"w-full"}>
            <AddWebhook formId={formId} />
        </div>

    }

    return <div className={"flex flex-col gap-y-1 w-[200px] mt-10"}>
        <Image src={"/icon_WEBHOOKS.png"} alt={"icon"} width={25} height={25} />
        <div className={"flex flex-col gap-y-1 text-xs"}>
            <p className={"text-black font-bold"}>Webhook</p>
            <p className={"text-gray-6"}>Send events for new submissions to HTTP endpoints</p>
        </div>
        <button onClick={handleOpen} className={"text-blue-600 border-none outline-none mt-2 w-[80px] text-xs font-semibold hover:bg-gray-100 rounded cursor-pointer p-1 transition duration-100 focus:ring-2 focus:ring-blue-300"}>Connect</button>
    </div>
}

export default WebhookIntegration