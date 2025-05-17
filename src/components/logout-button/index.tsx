import {LogOutIcon} from "lucide-react";
import {LogoutAction} from "@/app/(auth)/actions";

const LogoutButton = () => {

    const handleLogout = async () => {
        await LogoutAction();
    }

    return  <div onClick={handleLogout} className={"flex items-center gap-x-2 text-red-400 text-[11px] hover:bg-gray-100 rounded-md transition duration-200 pl-1 pr-1 cursor-pointer"}>
        <LogOutIcon className={"w-4"}/>
        <p className={"font-semibold"}>Logout</p>
    </div>
}

export default LogoutButton