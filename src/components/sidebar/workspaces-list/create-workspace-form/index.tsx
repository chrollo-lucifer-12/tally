"use client"

import {useForm} from "@/hooks/useForm";
import {createWorkspace} from "@/app/(main)/actions";
import CustomInput from "@/components/custom-input";
import CustomButton from "@/components/custom-button";

const CreateWorkspaceForm = () => {
    const {state, action, pending} = useForm(createWorkspace);

    return <form action={action} className={"flex flex-col gap-y-4 mt-4"}>
        <CustomInput name={"name"} type={"text"} label={"Workspace Name"} error={state?.errors?.name} />
        <CustomButton title={"Create Workspace"} type={"submit"} pending={pending} cn={"bg-black text-white hover:bg-gray-900 hover:text-white w-[120px]"} />
    </form>
}
export default CreateWorkspaceForm