import {getCurrentSession} from "@/lib/cookie";
import {prisma} from "@/lib/db";
import DisplayLinks from "@/components/sidebar/misc-list/display-links";

const MiscList = async () => {

    const {user} = await getCurrentSession();
    const deletedForms = await prisma.form.findMany({where : {
        AND : [
            {userId : user!.id},
            {inTrash : true}
        ]
        } , select : {
        id : true,
            title : true
        } })

    return <DisplayLinks forms={deletedForms}/>
}

export default MiscList