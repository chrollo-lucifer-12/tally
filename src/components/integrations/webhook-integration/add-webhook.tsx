"use client"

import CustomInput from "@/components/custom-input";
import {addWebhook} from "@/app/(main)/actions";
import AddPage from "@/components/integrations/add-page";

const AddWebhook = ({formId} : {formId : string}) => {
    return <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col gap-y-6 items-center justify-center">
        <AddPage src={"/icon_WEBHOOKS.png"} title={"Add a webhook endpoint"} description={"Webhooks allow you to receive HTTP POST requests to a URL for new form submissions. Learn about webhooks."} />
        <div className={" w-[40%]"}>
            <form action={addWebhook} className={"flex flex-col gap-y-6"}>
            <CustomInput  name={"url"} type={"url"} label={"Endpoint"} placeholder={"https://"} />
                <input defaultValue={formId} name={"formId"} className={"hidden"} />
            <button type={"submit"}  className={"bg-blue-500 text-white font-semibold hover:bg-blue-600 hover:text-white p-1 rounded-md cursor-pointer transition duration-200"}>Connect</button>
            </form>
        </div>
    </div>
}

export default AddWebhook