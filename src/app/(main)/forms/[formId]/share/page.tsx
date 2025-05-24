import FormHeader from "@/components/form-header";
import FormNavbar from "@/components/form-navbar";
import CustomInput from "@/components/custom-input";
import {LinkPreview} from "@/components/link-preview";

const SharePage = async (props : {params : Promise<{formId : string}>}) => {
    const params = await props.params;
    const {formId} = params

    return <div className={"w-full h-full p-[20px] sm:p-[100px] pt-[30px] sm:pt-[60px] pb-[30px] sm:pb-[60px]"}>
        <FormHeader formId={formId}/>
        <FormNavbar formId={formId}/>
        <div className={"w-full flex justify-between"}>
            <div className={"w-[50%] mt-6 flex flex-col gap-y-0.5 p-2"}>
                <p className="text-black font-semibold text-md">Share Link</p>
                <p className={"text-gray-11 text-xs"}>Your form is now published and ready to be shared with the world!
                    Copy
                    this link to share your form on social media, messaging apps or via email.</p>
                <CustomInput name={"link"} type={"text"} value={`${process.env.NEXT_PUBLIC_BASE_URL}/r/${formId}`} disable={true}
                             cn={"mt-1 cursor-pointer"}/>
            </div>
            <div className={"w-[50%] mt-6 flex flex-col gap-y-0.5 p-2"}>
                <p className="text-black font-semibold text-md">Link Preview</p>
                <p className={"text-gray-11 text-xs"}>When you share a link, it will embed with a preview similar to the
                    one below on social media, messaging apps, and search engines. </p>
                <LinkPreview href={`/forms/${formId}`}/>
            </div>
        </div>
    </div>
}

export default SharePage