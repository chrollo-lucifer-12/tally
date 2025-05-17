"use client"

import {User} from "@prisma/client";
import DeleteAccount from "@/components/settings-client/delete-account";
import {useRef, useState} from "react";
import CustomDialog from "@/components/custom-dialog";
import {UploadIcon} from "lucide-react";
import UpdatedProfileForm from "@/components/settings-client/update-profile-form";

const SettingsClient = ({user} : {user : User}) => {

    const [isOpen, setIsOpen] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);


    const handleClick = () => {
        fileInputRef.current?.click();
    };


    return <div className={"p-[20px] sm:p-[100px] pt-[30px] sm:pt-[60px] pb-[30px] sm:pb-[60px] max-h-[100vh] overflow-y-auto"}>

        <CustomDialog title={"Upload"} isOpen={isOpen} setIsOpen={setIsOpen} width={"400px"}>
            <div onClick={handleClick} className={"flex flex-col gap-y-1 items-center justify-center cursor-pointer w-[360px] h-[200px] rounded-md border border-gray-7 border-dashed"}>
                <UploadIcon className={"text-gray-6 w-10 h-10"} />
                <p className={"text-xs text-gray-10 font-bold"}>Click to choose a file or drag here</p>

            </div>
        </CustomDialog>

        <h1 className={"text-gray-10 font-bold text-[25px]"}>Settings</h1>
        <div className={"border border-gray-4 mt-1"}/>
        <div className={"w-[80%] md:w-[50%]"}>
            <UpdatedProfileForm user={user} setIsOpen={setIsOpen} fileInputRef={fileInputRef}/>
        </div>
        <DeleteAccount/>
    </div>
}

export default SettingsClient