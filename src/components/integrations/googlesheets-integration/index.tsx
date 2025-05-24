"use client"

import IntegrationTitle from "@/components/integrations/integration-title";
import {useState} from "react";
import AddSheets from "@/components/integrations/googlesheets-integration/add-sheets";


const GoogleSheetsIntegration = ({formId} : {formId : string}) => {

    const [open, setOpen] = useState(false)


    if (open) {
        return <div className={"w-full"}>
            <AddSheets formId={formId}/>
        </div>

    }

    return <div className={"flex flex-col gap-y-1 w-[200px] mt-10"}>
        <IntegrationTitle src={"/icon_GOOGLE_SHEETS.png"} title={'Notion'} description={"Send submissions to notion"}/>
        <button onClick={() => setOpen(true)} className={"text-blue-600 border-none outline-none mt-2 w-[80px] text-xs font-semibold hover:bg-gray-100 rounded cursor-pointer p-1 transition duration-100 focus:ring-2 focus:ring-blue-300"}>Connect</button>
    </div>
}

export default GoogleSheetsIntegration