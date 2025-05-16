import FormHeader from "@/components/form-header";
import FormNavbar from "@/components/form-navbar";
import CustomInput from "@/components/custom-input";

const SharePage = async (props : {params : Promise<{formId : string}>}) => {
    const params = await props.params;
    const {formId} = params

    return <div className={"w-full h-full p-[100px] pt-[60px] pb-[60px]"}>
        <FormHeader formId={formId}/>
        <FormNavbar formId={formId}/>
        <div className={"w-[50%] mt-6 flex flex-col gap-y-0.5"}>
            <p className="text-black font-semibold text-md">Share Link</p>
            <p className={"text-gray-11 text-xs"}>Your form is now published and ready to be shared with the world! Copy
                this link to share your form on social media, messaging apps or via email.</p>
            <CustomInput name={"link"} type={"text"} value={`/forms/${formId}`} disable={true} cn={"mt-1 cursor-pointer"}/>
        </div>
    </div>
}

export default SharePage