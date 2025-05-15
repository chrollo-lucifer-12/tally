import {GlobeLockIcon, HouseIcon, SearchIcon, SettingsIcon, UsersIcon} from "lucide-react";
import Link from "next/link";

const links = [
    {
        name : "Home",
        icon : HouseIcon,
        href : "/dashboard"
    },
    {
        name : "Search",
        icon : SearchIcon,
        href : "/search"
    },
    {
        name: "Members",
        icon: UsersIcon,
        href : "/members"
    },
    {
        name : "Domains",
        icon : GlobeLockIcon,
        href : "/domains"
    },
    {
        name : "Settings",
        icon: SettingsIcon,
        href : "/settings"
    }
]

const LinksList = () => {
    return <div className={"mt-4 flex flex-col"}>
        {
            links.map((link, i) => (
                <Link key={i} href={link.href}
                      className={"flex items-center gap-x-2 text-gray-8 text-[11px] hover:bg-gray-100 rounded-md transition duration-200 pl-1 pr-1"}>
                    <link.icon className={"w-4"}/>
                    <p className={"font-semibold"}>{link.name}</p>
                </Link>
            ))
        }
    </div>
}

export default LinksList