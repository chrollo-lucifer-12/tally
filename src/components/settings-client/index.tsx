"use client"

import {User} from "@prisma/client";
import CustomInput from "@/components/custom-input";
import CustomButton from "@/components/custom-button";
import {TriangleAlertIcon} from "lucide-react";

const SettingsClient = ({user} : {user : User}) => {
    return <div className={"p-[100px] pt-[60px] pb-[60px] max-h-[100vh] overflow-y-auto"}>
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
            <CustomButton title={"Delete Account"} cn={"mt-2 bg-red-800 text-white text-xs font-semibold hover:bg-red-700 hover:text-white"} />
        </div>
    </div>
}

export default SettingsClient