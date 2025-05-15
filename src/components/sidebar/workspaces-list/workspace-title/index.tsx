"use client"

import {PlusIcon} from "lucide-react";

const WorkspaceTitle = () => {
    return  <div className={"flex items-center justify-between text-[9px] text-gray-9 font-semibold pl-1 pr-1"}>
        <p className={""}>Workspaces</p>
        <PlusIcon className={"w-4 text-gray-8 hover:bg-gray-100 rounded-md p-1 cursor-pointer"} />
    </div>
}

export default WorkspaceTitle