"use client"

import {Form} from "@/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import {EllipsisVerticalIcon, FolderPlusIcon, PencilIcon, PlusIcon, Trash2Icon} from "lucide-react";

interface FormListProps {
    forms : Form[]
}

const FormList = ({forms} : FormListProps) => {

    if (!forms.length) {
        return <div className={"flex flex-col gap-y-1 items-center justify-center w-full h-full"}>
            <Image src={"/roll-up-sleeves.png"} alt={"sleeves"} width={200} height={200}/>
            <p className={"text-gray-10 font-bold text-md"}>No forms yet</p>
            <p className={"text-gray-7 font-light text-sm"}>Roll up your sleeves and let’s get started.</p>
            <p className={"text-gray-7 font-light text-sm"}>It's as simple as one-two-three.</p>
            <Link href={"/dashboard"}
                  className={"text-white bg-blue-500 hover:bg-blue-800 text-xs gap-x-2 rounded-lg pl-2 pr-2 flex items-center justify-between transition duration-200 focus:ring-2 focus:ring-blue-500"}>
                <PlusIcon className={"w-3"}/>
                <p className={"font-bold"}>New Form</p>
            </Link>
        </div>
    }

    return <div className={"w-full h-full p-[100px] pt-[60px] pb-[60px]"}>
        <div className={"flex justify-between w-full"}>
            <h1 className={"text-gray-10 font-bold text-[25px]"}>Home</h1>
            <div className={"flex h-[25px] gap-x-2"}>
                <Link href={"/dashboard"}
                      className={"text-gray-7 hover:bg-gray-100 text-xs rounded-lg pl-2 pr-2 flex items-center justify-between transition duration-200 focus:ring-2 focus:ring-blue-500 gap-x-2"}>
                    <FolderPlusIcon className={"w-3"}/>
                    <p className={"font-bold"}>New Workspace</p>
                </Link>
                <Link href={"/dashboard"}
                      className={"text-white bg-blue-500 hover:bg-blue-800 text-xs gap-x-2 rounded-lg pl-2 pr-2 flex items-center justify-between transition duration-200 focus:ring-2 focus:ring-blue-500"}>
                    <PlusIcon className={"w-3"}/>
                    <p className={"font-bold"}>New Form</p>
                </Link>
            </div>
        </div>
        <div className={"w-full border border-gray-4 mt-2 mb-6"}/>
        <div className={"w-full flex flex-col"}>
            {
                forms.map((form) => (
                    <div className={"w-full p-3 flex justify-between items-center rounded-md hover:bg-gray-100 cursor-pointer group transition duration-100"}>
                        <div className={"flex flex-col gap-y-1"}>
                            <p className={"text-gray-10 font-semibold"}>{form.title}</p>
                        </div>
                        <div className={"group-hover:flex gap-x-4 text-gray-7 hidden"}>
                            <PencilIcon className={"w-5 hover:bg-gray-200 rounded-md p-1 transition duration-200"} />
                            <Trash2Icon className={"w-5 hover:bg-gray-200 rounded-md p-1 transition duration-200"}/>
                            <EllipsisVerticalIcon className={"w-5 hover:bg-gray-200 rounded-md p-1 transition duration-200"} />
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
}

export default FormList