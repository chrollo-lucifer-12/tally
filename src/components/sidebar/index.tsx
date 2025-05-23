import {getCurrentSession} from "@/lib/cookie";
import UserAvatar from "@/components/sidebar/user-avatar";
import LinksList from "@/components/sidebar/links-list";
import WorkspacesList from "@/components/sidebar/workspaces-list";
import MiscList from "@/components/sidebar/misc-list";

const Sidebar = async () => {

    const {user} = await getCurrentSession();

    if (!user) {
        return;
    }

    return <div className={"w-52 min-h-screen p-3 border-r border-gray-200 hidden sm:block"}>
        <UserAvatar src={user.profileimage!} name={user.firstname!}/>
        <LinksList/>
        <WorkspacesList/>
        <MiscList/>
    </div>
}

export default Sidebar