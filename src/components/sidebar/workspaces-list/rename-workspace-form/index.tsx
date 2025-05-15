"use client"

import {useForm} from "@/hooks/useForm";
import {renameWorkspace} from "@/app/(main)/actions";
import CustomInput from "@/components/custom-input";
import CustomButton from "@/components/custom-button";

const RenameWorkspaceForm = ({id} : {id : string}) => {
    const {state, pending, action} = useForm(renameWorkspace)

    return <form action={action} className={"flex flex-col gap-y-4 mt-4"}>
        <CustomInput name={"name"} type={"text"} label={"Workspace Name"} error={state?.errors?.name} />
        <input name={"id"} type={"hidden"} value={id} />
        {
            state?.message &&  <p className={"text-green-800 text-[10px] mt-1"}>{state?.message}</p>
        }
        <CustomButton title={"Rename Workspace"} type={"submit"} pending={pending} cn={"bg-black text-white hover:bg-gray-900 hover:text-white w-[120px]"} />
    </form>
}
export default RenameWorkspaceForm