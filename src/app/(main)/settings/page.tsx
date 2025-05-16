import {getCurrentSession} from "@/lib/cookie";
import {redirect} from "next/navigation";
import SettingsClient from "@/components/settings-client";

const SettingsPage = async () => {

    const {user} = await getCurrentSession();

    if (!user) {
        return redirect("/");
    }

    return <div className={"h-full w-full"}>
        <SettingsClient user={user}/>
    </div>
}

export default SettingsPage