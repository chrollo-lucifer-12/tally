"use client"

import {Workspace} from "@/lib/definitions";
import Link from "next/link";
import { ChevronDownIcon, ChevronRightIcon, EllipsisIcon, PlusIcon} from "lucide-react";
import {useState} from "react";
import CustomDialog from "@/components/custom-dialog";
import RenameWorkspaceForm from "@/components/sidebar/workspaces-list/rename-workspace-form";
import Tooltip from "@/components/tooltip";

interface WorkspacesAccordionProps {
    workspaces : Workspace[]
}

const WorkspacesAccordion = ({workspaces} : WorkspacesAccordionProps) => {

    const [openWorkspaceIds, setOpenWorkspaceIds] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState(false)
    const [renameWorkspaceId, setRenameWorkspaceId] = useState<string | null>(null)

    const handleIconClick = (e: any, workspaceId: string) => {
        e.preventDefault();
        e.stopPropagation();

        const findWorkspace = openWorkspaceIds.find(id => id === workspaceId);

        if (!findWorkspace) {
            setOpenWorkspaceIds(prevState => [workspaceId, ...prevState])
        } else {
            setOpenWorkspaceIds(prevState => prevState.filter(id => id !== workspaceId))
        }
    }

    const checkIfWorkspaceOpen = (workspaceId: string) => {
        const findWorkspace = openWorkspaceIds.find(id => id === workspaceId);

        return !!findWorkspace;


    }

    return <div>
        {
            renameWorkspaceId && <CustomDialog title={"Rename Workspace"} isOpen={isOpen} setIsOpen={setIsOpen}>
                <RenameWorkspaceForm id={renameWorkspaceId}/>
            </CustomDialog>
        }
        {
            workspaces.map((workspace) => (
                <Link key={workspace.id} href={`/workspaces/${workspace.id}`}
                      className={"flex flex-col gap-y-1"}>
                    <div
                        className={"flex justify-between items-center pl-1 pr-1 text-[11px] text-gray-9 font-semibold group transition duration-200 hover:bg-gray-2 rounded-md"}>
                        <div className={"flex gap-x-1 items-center"}>
                            {
                                !checkIfWorkspaceOpen(workspace.id) ? (<ChevronRightIcon
                                    className={"w-5 p-1 rounded-md cursor-pointer group-hover:text-black"}
                                    onClick={(e) => {
                                        handleIconClick(e, workspace.id)
                                    }}/>) : (
                                    <ChevronDownIcon
                                        className={"w-5 p-1 rounded-md cursor-pointer group-hover:text-black"}
                                        onClick={(e) => {
                                            handleIconClick(e, workspace.id)
                                        }}/>
                                )
                            }
                            <p>{workspace.name}</p>
                        </div>
                        <div className={"gap-x-1 items-center hidden text-black group-hover:flex"}>
                            <div className={"flex flex-col gap-y-1 group relative"}>
                                <EllipsisIcon className={"w-5  hover:bg-gray-100 rounded-md p-1 cursor-pointer"}
                                              onClick={(e) => {
                                                  e.preventDefault();
                                                  e.stopPropagation();
                                                  setIsOpen(true)
                                                  setRenameWorkspaceId(workspace.id)
                                              }}/>
                                <Tooltip
                                    cn={"top-full mt-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-200"}>
                                    <p>Rename, delete and more...</p>
                                </Tooltip>
                            </div>
                            <PlusIcon className={"w-5  hover:bg-gray-100 rounded-md p-1 cursor-pointer"}
                                      onClick={(e) => {
                                          e.preventDefault();
                                          e.stopPropagation();
                                      }}/>
                        </div>
                    </div>
                    {
                        checkIfWorkspaceOpen(workspace.id) && <div className={"flex flex-col gap-y-0.5"}>
                            {

                                !workspace.forms.length &&
                                <p className={"text-[11px] text-gray-8 font-semibold ml-6"}>No forms yet</p>
                            }

                            {
                                workspace.forms.map((form) => (
                                    <Link href={`/forms/${form.id}/summary`} key={form.id}
                                          className={"text-[11px] text-gray-9 font-semibold transition duration-200 hover:bg-gray-2 rounded-md pl-1 pr-1 ml-6"}>
                                        <p>{form.title}</p>
                                    </Link>
                                ))
                            }
                        </div>
                    }
                </Link>
            ))
        }
    </div>
}

export default WorkspacesAccordion