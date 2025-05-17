"use client"


import Link from "next/link";
import {PlusIcon} from "lucide-react";

const CreateFormButton = () => {
    return  <Link href={"/forms/create"}
                  className={"text-white bg-blue-500 hover:bg-blue-800 text-xs gap-x-2 rounded-lg pl-2 pr-2 flex items-center justify-between transition duration-200 focus:ring-2 focus:ring-blue-500"}>
        <PlusIcon className={"w-3"}/>
        <p className={"font-bold hidden md:block"}>New Form</p>
    </Link>
}
export default CreateFormButton