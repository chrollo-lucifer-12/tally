"use client"

import Image from "next/image";
import {useState} from "react";
import AddWebhook from "@/components/integrations/webhook-integration/add-webhook";
import IntegrationTitle from "@/components/integrations/integration-title";

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
        <IntegrationTitle src={"/icon_WEBHOOKS.png"} title={"Webhook"} description={"Send events for new submissions to HTTP endpoints"}/>
        <button onClick={handleOpen} className={"text-blue-600 border-none outline-none mt-2 w-[80px] text-xs font-semibold hover:bg-gray-100 rounded cursor-pointer p-1 transition duration-100 focus:ring-2 focus:ring-blue-300"}>Connect</button>
    </div>
}

export default WebhookIntegration