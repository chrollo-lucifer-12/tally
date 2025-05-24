"use client"

import {Workspace} from "@/lib/definitions";
import Link from "next/link";
import {EllipsisIcon} from "lucide-react";
import {useState} from "react";
import CustomDialog from "@/components/custom-dialog";
import RenameForm from "@/components/sidebar/workspaces-list/rename-form";

interface DisplayFormsProps{
    workspace : Workspace
}

const DisplayForms = ({workspace} : DisplayFormsProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const [renameFormId, setRenameFormId] = useState<string | null>(null);

    return <div>
        {
            // renameFormId && <RenameForm formId={renameFormId}/>
            renameFormId && <CustomDialog title={"Rename Form"} isOpen={isOpen} setIsOpen={setIsOpen}>
                <RenameForm formId={renameFormId}/>
            </CustomDialog>
        }
        {
            workspace.forms.map((form) => (
                <Link href={`/forms/${form.id}/summary`} key={form.id}
                      className={"text-[11px] text-gray-9 font-semibold transition duration-200 hover:bg-gray-2 rounded-md pl-1 pr-1 ml-6 flex justify-between items-center"}>
                    <p>{form.title}</p>
                    <EllipsisIcon className={"w-5  hover:bg-gray-100 rounded-md p-1 cursor-pointer"}
                                  onClick={(e) => {
                                      e.preventDefault()
                                      e.stopPropagation()
                                      setIsOpen(true)
                                      setRenameFormId(form.id)
                                  }}/>
                </Link>
            ))
        }
    </div>
}

export default DisplayForms;