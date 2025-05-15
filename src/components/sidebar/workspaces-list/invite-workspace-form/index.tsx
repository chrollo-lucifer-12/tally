"use client"

import CustomDialog from "@/components/custom-dialog";
import {useState} from "react";
import {useRouter} from "next/navigation";
import CustomButton from "@/components/custom-button";
import CustomSelect from "@/components/custom-select";
import CustomInput from "@/components/custom-input";

interface InviteWorkspaceFormProps {
    workspaces : {
        name: string
        id: string
        adminId: string
    }[]
}

const InviteWorkspaceForm = ({workspaces} : InviteWorkspaceFormProps) => {

    const [isOpen, setIsOpen] = useState(true);

    if (!isOpen) {
        useRouter().push("/dashboard")
    }

    return <CustomDialog title={"Invite Members"} isOpen={isOpen} setIsOpen={setIsOpen} width={"500px"}>
        <form className={"flex flex-col gap-y-4 mt-4"}>
            <CustomSelect name={"workspace"} options={workspaces} label={"Workspace"} />
            <CustomInput name={"emails"} type={"textarea"} label={"Emails"} placeholder={"Type or paste emails separated by commas"} />
            {/*<CustomButton title={"Invite"} type={"submit"} pending={pending} cn={"bg-black text-white hover:bg-gray-900 hover:text-white w-[120px]"} />*/}
        </form>
    </CustomDialog>
}
export default InviteWorkspaceForm