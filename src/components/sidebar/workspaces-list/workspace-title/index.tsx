"use client"

import {PlusIcon} from "lucide-react";
import Tooltip from "@/components/tooltip";
import {useState} from "react";
import CustomDialog from "@/components/custom-dialog";
import CreateWorkspaceForm from "@/components/sidebar/workspaces-list/create-workspace-form";

const WorkspaceTitle = () => {

    const [isOpen, setIsOpen] = useState(false)

    return <div className={"flex items-center justify-between text-[9px] text-gray-9 font-semibold pl-1 pr-1"}>
        <CustomDialog title={"Add New Workspace"} isOpen={isOpen} setIsOpen={setIsOpen}>
            <CreateWorkspaceForm/>
        </CustomDialog>
        <p className={""}>Workspaces</p>
        <div className={"flex flex-col gap-y-1 group relative"}>
            <PlusIcon className={"w-4 text-gray-8 hover:bg-gray-100 rounded-md p-1 cursor-pointer"} onClick={() => {setIsOpen(true)}} />
            <Tooltip cn={"top-full mt-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-200"}>
                <p>New Workspace</p>
            </Tooltip>
        </div>
    </div>
}

export default WorkspaceTitle