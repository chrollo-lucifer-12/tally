import {TextEditor} from "@/components/text-editor";
import {createOrGetForm} from "@/app/(main)/actions";

const EditFormPage = async (props : {params : Promise<{formId : string}>}) => {
    const params = await props.params
    const {formId} = params

    const content = await createOrGetForm(formId);
    const parsedContent = typeof content === "string" && content.trim()
        ? JSON.parse(content)
        : [];


    return <div className={"h-full w-full p-[100px] pt-[60px] max-h-[100vh] overflow-x-hidden overflow-y-auto"}>
        <TextEditor content = {parsedContent} formId = {formId} />
    </div>
}

export default EditFormPage