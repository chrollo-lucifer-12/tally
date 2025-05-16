"use client"

import {usePathname} from "next/navigation";
import Link from "next/link";

const pages = [
    {
        name : "Summary",
        link : "summary"
    },
    {
        name : "Submissions",
        link : "submissions"
    },
    {
        name : "Share",
        link : "share"
    },
    {
        name : "Integrations",
        link : "integrations"
    }
]

const FormNavbar = ({formId} : {formId : string}) => {

    const pathname = usePathname();

    const isActive =  (name : string) =>  pathname.includes(name);

    return <div className={" mt-4 w-full"}>
        <div className={"flex gap-x-6"}>
            {
                pages.map((page) => (
                    <div key={page.name} className={"group relative"}>
                        <Link href={`/forms/${formId}/${page.link}`}
                              className={` ${isActive(page.link) ? "text-black" : "text-gray-7"} text-xs font-semibold group-hover:text-black transition duration-200`}>
                            {page.name}
                        </Link>
                        <div
                            className={`absolute left-0 right-0 ${isActive(page.link) && "scale-x-100"}  h-[1px] mt-2 bg-gray-7 transition-all duration-200 scale-x-0 group-hover:scale-x-100 origin-left`}
                        />
                    </div>
                ))
            }
        </div>
        <div className={"border border-gray-4 mt-2"} />
    </div>
}

export default FormNavbar