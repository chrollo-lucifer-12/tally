import {getUserForms} from "@/app/(main)/actions";
import FormList from "@/components/form-list";
import {getCurrentSession} from "@/lib/cookie";
import {redirect} from "next/navigation";

export const dynamic = "force-dynamic";


const DashboardPage = async () => {


    const {user} = await getCurrentSession();

    if (!user) {
        return redirect("/")
    }

    const forms = await getUserForms();

    return <div className={"h-full w-full "}>
        <FormList forms={forms}/>
    </div>
}

export default DashboardPage