import {
    BookIcon,
    CircleDollarSignIcon,
    LayoutPanelTopIcon, LifeBuoyIcon,
    MapIcon, MessageCircleIcon,
    MousePointer2Icon,
    SmilePlusIcon,
    SparklesIcon,
    Trash2Icon
} from "lucide-react";
import Link from "next/link";


const links = [
    {
        title : "Product",
        sublinks : [
            {
                name : "Templates",
                icon : LayoutPanelTopIcon
            },
            {
                name : "What's new",
                icon: SparklesIcon
            },
            {
                name : "Roadmap",
                icon: MapIcon
            },
            {
                name : "Feature Requests",
                icon: SmilePlusIcon
            },
            {
                name : "Rewards",
                icon: CircleDollarSignIcon
            },
            {
                name : "Trash",
                icon: Trash2Icon
            }
        ]
    },
    {
        title : "Help",
        sublinks: [
            {
                name : "Get started",
                icon: MousePointer2Icon
            },
            {
                name : "How-to guides",
                icon: BookIcon
            },
            {
                name : "Help Center",
                icon: LifeBuoyIcon
            },
            {
                name : "Contact Support",
                icon: MessageCircleIcon
            }
        ]
    }
]

const MiscList = () => {
    return <div className={"mt-2"}>
        <div className={""}>
            <p className={"text-[9px] text-gray-9 font-semibold"}>Products</p>
            <div className={"flex flex-col mt-2"}>
                {
                    links[0].sublinks.map((link,i) => (
                        <Link key={i} href={"/dashboard"}
                              className={"flex items-center gap-x-2 text-gray-7 text-[11px] hover:bg-gray-100 rounded-md transition duration-200 pl-1 pr-1 hover:text-black"}>
                            <link.icon className={"w-4"}/>
                            <p className={"font-semibold"}>{link.name}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
        <div className={"mt-2"}>
            <p className={"text-[9px] text-gray-9 font-semibold"}>Help</p>
            <div className={"flex flex-col mt-2"}>
                {
                    links[1].sublinks.map((link,i) => (
                        <Link key={i} href={"/dashboard"}
                              className={"flex items-center gap-x-2 text-gray-7 text-[11px] hover:bg-gray-100 rounded-md transition duration-200 pl-1 pr-1 hover:text-black"}>
                            <link.icon className={"w-4"}/>
                            <p className={"font-semibold"}>{link.name}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    </div>
}

export default MiscList