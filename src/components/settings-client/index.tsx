"use client"

import {User} from "@prisma/client";
import CustomInput from "@/components/custom-input";
import CustomButton from "@/components/custom-button";
import {TriangleAlertIcon} from "lucide-react";
import {useState} from "react";
import CustomDialog from "@/components/custom-dialog";

const SettingsClient = ({user} : {user : User}) => {

    const [isOpen, setIsOpen] = useState(false);



    return <div className={"p-[100px] pt-[60px] pb-[60px] max-h-[100vh] overflow-y-auto"}>
        <CustomDialog title={"Delete account"} isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className={"flex flex-col gap-y-0.5 text-xs text-gray-10"}>
                <p>If you are sure you want to proceed with the deletion of your account, please continue below.</p>
                <p>Keep in mind this operation is irreversible and will result in a complete deletion of all your account data - all your forms, submissions and workspaces will be deleted.</p>
                <CustomButton title={"Delete my account"} cn={"mt-4 bg-red-800 text-white text-xs font-semibold hover:bg-red-700 hover:text-white w-[120px]"}/>
            </div>
        </CustomDialog>
        <h1 className={"text-gray-10 font-bold text-[25px]"}>Settings</h1>
        <div className={"border border-gray-4 mt-1"} />
        <div className={"w-[50%]"}>
            <form className={"flex flex-col gap-y-4 mt-4"}>
                <CustomInput name={"photo"} type={"file"} label={"Photo"} />
                <CustomInput name={"firstname"} type={"text"} label={"First name"} value={user.firstname || ""} />
                <CustomInput name={"lastname"} type={"text"} label={"Last name"} value={user.lastname || ""} />
                <CustomButton title={"Update"} cn={"bg-black text-white hover:bg-gray-900 hover:text-white w-[60px] text-sm font-semibold rounded-lg"} />
            </form>
        </div>
        <div className={"w-[50%] mt-10"}>
            <h1 className={"text-gray-10 font-bold text-[15px] flex gap-x-2 items-center"}>
                <TriangleAlertIcon className={"w-5 h-5"} />
                <p>Danger Zone</p>
            </h1>
            <p className={"mt-1 text-gray-10 text-xs"}>This will permanently delete your entire account. All your forms, submissions and workspaces will be deleted.</p>
            <CustomButton title={"Delete Account"} cn={"mt-2 bg-red-800 text-white text-xs font-semibold hover:bg-red-700 hover:text-white"} onClick={() => {
                setIsOpen(true)
            }} />
        </div>
    </div>
}

export default SettingsClient