"use client"

import Image from "next/image";
import CustomInput from "@/components/custom-input";
import CustomButton from "@/components/custom-button";
import {RefObject, useState} from "react";
import {User} from "@prisma/client";
import {useForm} from "@/hooks/useForm";
import {updateProfileAction} from "@/app/(main)/actions";

interface UpdatedProfileFormProps {
    user : User
    setIsOpen : (res : boolean) => void
    fileInputRef :  RefObject<HTMLInputElement | null>
}

const UpdatedProfileForm = ({user, setIsOpen, fileInputRef} : UpdatedProfileFormProps) => {

    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const {state, action, pending} = useForm(updateProfileAction)

    return <form className={"flex flex-col gap-y-4 mt-4"} action={action}>
        <div className={"flex flex-col gap-y-1"}>
            <label htmlFor={"photo"} className="text-black font-semibold text-xs">Photo</label>
            <div className={"cursor-pointer flex items-center gap-x-6 group"}>
                <Image id={"photo"} src={ selectedFile ? URL.createObjectURL(selectedFile) : user.profileimage!} alt={"photo"} width={80} height={80}
                       className={"rounded-full"}/>
                <button type={"button"} onClick={() => {
                    setIsOpen(true)
                }}
                        className={`text-gray-7 hover:bg-gray-3 hover:text-gray-9 font-[600] pt-1 pr-[0.7em] pb-1 pl-[0.7em] text-[10px] rounded-[7px] items-center justify-center gap-x-[0.6em] gap-y-[0.6em] transition duration-200 focus:ring-2 focus:ring-blue-500  hidden group-hover:flex cursor-pointer`}>Upload
                    Photo
                </button>
            </div>
        </div>
        <input name={"photo"} accept="image/*" onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) { setSelectedFile(file); setIsOpen(false)}
        }} ref={fileInputRef} type={"file"} className={"hidden"}/>
        <CustomInput name={"firstname"} type={"text"} label={"First name"} value={user.firstname || ""} error={state?.errors.firstname} />
        <CustomInput name={"lastname"} type={"text"} label={"Last name"} value={user.lastname || ""} error={state?.errors.lastname} />
        <CustomButton title={"Update"} pending={pending} type={"submit"}
                      cn={"bg-black text-white hover:bg-gray-900 hover:text-white w-[60px] text-sm font-semibold rounded-lg"}   />
    </form>
}

export default UpdatedProfileForm