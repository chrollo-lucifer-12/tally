import {getUserWorkspaces} from "@/app/(main)/actions";
import InviteWorkspaceForm from "@/components/sidebar/workspaces-list/invite-workspace-form";
import {getCurrentSession} from "@/lib/cookie";
import {prisma} from "@/lib/db";

export const dynamic = "force-dynamic";

const MembersPage = async () => {

    const {user} = await getCurrentSession();

    const workspaces = await prisma.workspace.findMany({
        where : {
            adminId : user!.id
        }
    })

    return <InviteWorkspaceForm workspaces={workspaces}/>
}

export default MembersPage