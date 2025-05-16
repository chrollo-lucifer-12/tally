"use client"

import {Form} from "@/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import {EllipsisVerticalIcon, FolderPlusIcon, PencilIcon, PlusIcon, Trash2Icon} from "lucide-react";
import {useState} from "react";
import CreateWorkspaceForm from "@/components/sidebar/workspaces-list/create-workspace-form";
import CreateFormButton from "@/components/create-form-button";
import {deleteForm} from "@/app/(main)/actions";

interface FormListProps {
    forms : Form[]
    type : "home" | "workspace"
}

const FormList = ({forms, type} : FormListProps) => {

    const [isOpen, setIsOpen] = useState(false);

    if (!forms.length && type === "home") {
        return <div className={"flex flex-col gap-y-1 items-center justify-center w-full h-full"}>
            <Image src={"/roll-up-sleeves.png"} alt={"sleeves"} width={200} height={200}/>
            <p className={"text-gray-10 font-bold text-md"}>No forms yet</p>
            <p className={"text-gray-7 font-light text-sm"}>Roll up your sleeves and let’s get started.</p>
            <p className={"text-gray-7 font-light text-sm"}>It's as simple as one-two-three.</p>
           <CreateFormButton/>
        </div>
    }

    return <div className={"w-full h-full p-[100px] pt-[60px] pb-[60px]"}>
        <CreateWorkspaceForm isOpen={isOpen} setIsOpen={setIsOpen}/>
        <div className={"flex justify-between w-full"}>
            <h1 className={"text-gray-10 font-bold text-[25px]"}>{type === "home" ? "Home" : "Workspaces"}</h1>
            <div className={"flex h-[25px] gap-x-2"}>
                {
                    type === "home" &&   <div onClick={() => {setIsOpen(true)}}
                                               className={"text-gray-7 hover:bg-gray-100 text-xs rounded-lg pl-2 pr-2 flex items-center justify-between transition duration-200 focus:ring-2 focus:ring-blue-500 gap-x-2"}>
                        <FolderPlusIcon className={"w-3"}/>
                        <p className={"font-bold"}>New Workspace</p>
                    </div>
                }
             <CreateFormButton/>
            </div>
        </div>
        <div className={"w-full border border-gray-4 mt-2 mb-6"}/>
        <div className={"w-full flex flex-col"}>

            {
                !forms.length && <p className={"mt-4 text-xs font-semibold text-gray-7"}>No Forms yet</p>
            }

            {
                forms.map((form) => (
                    <div key={form.id} className={"w-full p-3 flex justify-between items-center rounded-md hover:bg-gray-100 cursor-pointer group transition duration-100"}>
                        <div className={"flex flex-col gap-y-1"}>
                            <p className={"text-gray-10 font-semibold"}>{form.title}</p>
                        </div>
                        <div className={"group-hover:flex gap-x-4 text-gray-7 hidden"}>
                            <PencilIcon className={"w-5 hover:bg-gray-200 rounded-md p-1 transition duration-200"} href={`/forms/${form.id}/edit`} />
                            <Trash2Icon className={"w-5 hover:bg-gray-200 rounded-md p-1 transition duration-200"} onClick={async () => {
                                const confirmed = window.confirm("Are you sure you want to delete this form?");
                                if (confirmed) {
                                    await deleteForm(form.id);
                                }
                            }} />
                            <EllipsisVerticalIcon className={"w-5 hover:bg-gray-200 rounded-md p-1 transition duration-200"} />
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
}

export default FormList