"use client"

import {TriangleAlertIcon} from "lucide-react";
import CustomButton from "@/components/custom-button";
import {useState} from "react";
import CustomDialog from "@/components/custom-dialog";
import {deleteAccount} from "@/app/(main)/actions";

const DeleteAccount = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isPending, setIsPending] = useState(false)

    const handleDeleteAccount = async () => {
        setIsPending(true);
        setIsOpen(true)
       await deleteAccount();
        setIsPending(false);
    }

    return  <div className={"w-[50%] mt-10"}>
        <CustomDialog title={"Delete account"} isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className={"flex flex-col gap-y-0.5 text-xs text-gray-10"}>
                <p>If you are sure you want to proceed with the deletion of your account, please continue below.</p>
                <p>Keep in mind this operation is irreversible and will result in a complete deletion of all your account data - all your forms, submissions and workspaces will be deleted.</p>
                <CustomButton pending={isPending} title={"Delete my account"} cn={"mt-4 bg-red-800 text-white text-xs font-semibold hover:bg-red-700 hover:text-white w-[120px]"}/>
            </div>
        </CustomDialog>
        <h1 className={"text-gray-10 font-bold text-[15px] flex gap-x-2 items-center"}>
            <TriangleAlertIcon className={"w-5 h-5"} />
            <p>Danger Zone</p>
        </h1>
        <p className={"mt-1 text-gray-10 text-xs"}>This will permanently delete your entire account. All your forms, submissions and workspaces will be deleted.</p>
        <CustomButton title={"Delete Account"} cn={"mt-2 bg-red-800 text-white text-xs font-semibold hover:bg-red-700 hover:text-white"} onClick={handleDeleteAccount} />
    </div>
}

export default DeleteAccount