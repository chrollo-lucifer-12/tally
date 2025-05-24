"use client"

import {useForm} from "@/hooks/useForm";
import {renameForm} from "@/app/(main)/actions";
import CustomInput from "@/components/custom-input";
import CustomButton from "@/components/custom-button";

const RenameForm = ({formId} : {formId : string}) => {

    const {state, pending, action} = useForm(renameForm);

    return <form  action={action} className={"flex flex-col gap-y-4 mt-4"}>
        <CustomInput name={"name"} type={"text"} label={"Form Name"} error={state?.errors?.name} />
        <input name={"formId"} type={"hidden"} defaultValue={formId} />
        {
            state?.message &&  <p className={"text-green-800 text-[10px] mt-1"}>{state?.message}</p>
        }
        <CustomButton title={"Rename Form"} type={"submit"} pending={pending} cn={"bg-black text-white hover:bg-gray-900 hover:text-white w-[120px]"} />
    </form>
}

export default RenameForm