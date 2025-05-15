import {getWorkspaces} from "@/app/(main)/actions";
import WorkspacesAccordion from "@/components/sidebar/workspaces-list/workspaces-accordion";
import WorkspaceTitle from "@/components/sidebar/workspaces-list/workspace-title";

const WorkspacesList = async () => {
    const workspaces = await getWorkspaces();

    return <div className={"mt-2 flex flex-col gap-y-1"}>
        <WorkspaceTitle/>
        <WorkspacesAccordion workspaces={workspaces}/>
    </div>
}

export default WorkspacesList