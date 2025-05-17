import {getCurrentSession} from "@/lib/cookie";
import SettingsClient from "@/components/settings-client";

const SettingsPage = async () => {

    const {user} = await getCurrentSession();

    return <div className={"h-full w-full"}>
        <SettingsClient user={user!}/>
    </div>
}

export default SettingsPage