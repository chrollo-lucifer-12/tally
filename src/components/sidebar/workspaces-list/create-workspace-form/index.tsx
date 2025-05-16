"use client"

import {useForm} from "@/hooks/useForm";
import {createWorkspace} from "@/app/(main)/actions";
import CustomInput from "@/components/custom-input";
import CustomButton from "@/components/custom-button";
import CustomDialog from "@/components/custom-dialog";
import {useState} from "react";

const CreateWorkspaceForm = ({isOpen, setIsOpen} : {isOpen : boolean, setIsOpen : (res: boolean) => void}) => {
    const {state, action, pending} = useForm(createWorkspace);



    return <CustomDialog title={"Add New Workspace"} isOpen={isOpen} setIsOpen={setIsOpen}>
        <form action={action} className={"flex flex-col gap-y-4 mt-4"}>
            <CustomInput name={"name"} type={"text"} label={"Workspace Name"} error={state?.errors?.name} />
            {
                state?.message &&  <p className={"text-green-800 text-[10px] mt-1"}>{state?.message}</p>
            }
            <CustomButton title={"Create Workspace"} type={"submit"} pending={pending} cn={"bg-black text-white hover:bg-gray-900 hover:text-white w-[120px]"} />
        </form>
    </CustomDialog>
}

export default CreateWorkspaceForm