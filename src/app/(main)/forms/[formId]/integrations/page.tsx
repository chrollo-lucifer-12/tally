import FormHeader from "@/components/form-header";
import FormNavbar from "@/components/form-navbar";
import {prisma} from "@/lib/db";
import Connections from "@/components/connections";
import WebhookIntegration from "@/components/webhook-integration";

const IntegrationsPage = async (props : {params : Promise<{formId : string}>}) => {
    const params = await props.params;
    const {formId} = params

    const connection = await prisma.form.findUnique({where : {id : formId}, select : {webhookUrl : true}})

    return <div className={"w-full h-full p-[20px] sm:p-[100px] pt-[30px] sm:pt-[60px] pb-[30px] sm:pb-[60px]"}>
        <FormHeader formId={formId}/>
        <FormNavbar formId={formId}/>

        {
            connection && connection.webhookUrl && <Connections url={connection.webhookUrl} />
        }

        <div className={"flex flex-col gap-y-2 mt-4"}>
            <p className={"text-black text-md font-bold"}>Discover integrations</p>
            <p className={"text-gray-9 text-xs max-w-[380px]"}>Make Tally even more powerful by using these tools. Check out our roadmap for upcoming integrations and to request new ones.</p>
        </div>

        <WebhookIntegration formId={formId} />
    </div>
}

export default IntegrationsPage