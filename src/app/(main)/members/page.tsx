import {getUserWorkspaces} from "@/app/(main)/actions";
import InviteWorkspaceForm from "@/components/sidebar/workspaces-list/invite-workspace-form";

const MembersPage = async () => {

    const workspaces = await getUserWorkspaces();

    return <InviteWorkspaceForm workspaces={workspaces}/>
}

export default MembersPage