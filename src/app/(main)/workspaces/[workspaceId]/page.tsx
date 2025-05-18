import FormList from "@/components/form-list";
import {prisma} from "@/lib/db";

const WorkspacePage = async (props : {params : Promise<{workspaceId : string}>}) => {
    const params = await props.params
    const {workspaceId} = params

    const forms = await prisma.form.findMany({where: {workspaceId}, select: {id: true, title: true, updatedAt: true}});

    return <div className={"h-full w-full "}>
        <FormList forms={forms} type={"workspace"}/>
    </div>
}

export default WorkspacePage