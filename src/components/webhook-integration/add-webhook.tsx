"use client"

import Image from "next/image";
import CustomInput from "@/components/custom-input";
import {addWebhook} from "@/app/(main)/actions";

const AddWebhook = ({formId} : {formId : string}) => {
    return <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col gap-y-6 items-center justify-center">
        <div className={"flex gap-x-2 w-[50%] items-center justify-center"}>
            <Image src={"/icon-2.svg"} alt={"icon"} width={25} height={25} />
            <Image src={"/circles.svg"} alt={"icon"} width={25} height={25} />
            <Image src={"/icon_WEBHOOKS.png"} alt={"icon"} width={25} height={25} />
        </div>
        <div className={"flex flex-col gap-y-1 items-center justify-center text-2xl w-[80%]"}>
            <p className={"text-black font-semibold"}>Add a webhook endpoint</p>
            <p className={"text-black text-[8px] max-w-[250px] text-center"}>Webhooks allow you to receive HTTP POST requests to a URL for new form submissions. Learn about webhooks.</p>
        </div>
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