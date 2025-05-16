import {getWorkspaceForms} from "@/app/(main)/actions";
import FormList from "@/components/form-list";

const WorkspacePage = async (props : {params : Promise<{workspaceId : string}>}) => {
    const params = await props.params
    const {workspaceId} = params

    const forms = await getWorkspaceForms(workspaceId);

    return <div className={"h-full w-full "}>
        <FormList forms={forms} type={"workspace"}/>
    </div>
}

export default WorkspacePage