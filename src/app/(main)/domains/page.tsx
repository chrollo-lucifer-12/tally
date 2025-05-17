import {GlobeIcon, PlusIcon} from "lucide-react";
import Link from "next/link";

const DomainsPages = () => {
    return <div className={"h-full w-full flex flex-col items-center justify-center"}>
        <GlobeIcon className={"text-gray-7 mb-8 w-20 h-20"}/>
        <h1 className={"text-gray-10 font-bold text-md"}>No custom domains yet</h1>
        <p  className={"text-gray-7 font-light text-sm hidden md:block"}>Personalize the form links with your own domain. Learn about custom domains.</p>
        <Link href={"/dashboard"}
              className={"text-white bg-blue-500 hover:bg-blue-800 text-xs gap-x-2 rounded-lg pl-2 pr-2 flex items-center justify-between transition duration-200 focus:ring-2 focus:ring-blue-500 mt-2"}>
            <PlusIcon className={"w-3"}/>
            <p className={"font-bold"}>Add Domain</p>
        </Link>
    </div>
}

export default DomainsPages