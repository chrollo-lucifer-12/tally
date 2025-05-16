import FormHeader from "@/components/form-header";
import FormNavbar from "@/components/form-navbar";

const SubmissionsPage = async (props : {params : Promise<{formId : string}>}) => {
    const params = await props.params;
    const {formId} = params

    return <div className={"w-full h-full p-[100px] pt-[60px] pb-[60px]"}>
        <FormHeader formId={formId}/>
        <FormNavbar formId={formId}/>
    </div>
}

export default SubmissionsPage