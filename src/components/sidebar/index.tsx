import {getCurrentSession} from "@/lib/cookie";
import UserAvatar from "@/components/sidebar/user-avatar";
import Link from "next/link";
import {HouseIcon, SearchIcon, UsersIcon, GlobeLockIcon, SettingsIcon} from "lucide-react";

const links = [
    {
        name : "Home",
        icon : HouseIcon
    },
    {
        name : "Search",
        icon : SearchIcon
    },
    {
        name: "Members",
        icon: UsersIcon
    },
    {
        name : "Domains",
        icon : GlobeLockIcon
    },
    {
        name : "Settings",
        icon: SettingsIcon
    }
]

const Sidebar = async () => {
    const {user} = await getCurrentSession();

    if (!user) {
        return ;
    }

    return <div className={"w-52 min-h-screen p-3 border-r border-gray-200"}>
        <UserAvatar src={user.profileimage!} name={user.firstname!}  />
        <div className={"mt-4 flex flex-col"}>

            {
                links.map((link,i) => (
                    <Link key={i} href={"/dashboard"} className={"flex items-center gap-x-2 text-gray-8 text-[12px] hover:bg-gray-100 rounded-md transition duration-200"}>
                        <link.icon className={"w-4"} />
                        <p className={"font-semibold"}>{link.name}</p>
                    </Link>
                ))
            }


        </div>
    </div>
}

export default Sidebar