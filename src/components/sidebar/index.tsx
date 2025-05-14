import {getCurrentSession} from "@/lib/cookie";
import UserAvatar from "@/components/sidebar/user-avatar";

const Sidebar = async () => {
    const {user} = await getCurrentSession();

    if (!user) {
        return ;
    }

    return <div className={"w-64 min-h-screen p-5 border-r border-gray-200"}>
        <UserAvatar src={user.profileimage!} name={user.firstname!}  />
    </div>
}

export default Sidebar