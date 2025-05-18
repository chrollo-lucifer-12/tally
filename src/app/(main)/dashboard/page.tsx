import FormList from "@/components/form-list";
import {getCurrentSession} from "@/lib/cookie";
import {prisma} from "@/lib/db";

const DashboardPage = async () => {

    const {user} = await  getCurrentSession();

    const forms = await prisma.form.findMany({where: {userId: user!.id}, select: {id: true, title: true, updatedAt: true}});

    return <div className={"h-full w-full "}>
        <FormList forms={forms} type={"home"}/>
    </div>
}

export default DashboardPage