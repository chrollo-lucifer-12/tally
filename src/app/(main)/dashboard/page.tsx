import {getUserForms} from "@/app/(main)/actions";
import FormList from "@/components/form-list";

const DashboardPage = async () => {

    const forms = await getUserForms();

    return <div className={"h-full w-full "}>
        <FormList forms={forms}/>
    </div>
}

export default DashboardPage