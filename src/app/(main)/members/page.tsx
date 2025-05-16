import {getUserWorkspaces} from "@/app/(main)/actions";
import InviteWorkspaceForm from "@/components/sidebar/workspaces-list/invite-workspace-form";

export const dynamic = "force-dynamic";

const MembersPage = async () => {

    const workspaces = await getUserWorkspaces();

    return <InviteWorkspaceForm workspaces={workspaces}/>
}

export default MembersPage