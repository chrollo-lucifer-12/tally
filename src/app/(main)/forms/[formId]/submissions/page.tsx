import FormHeader from "@/components/form-header";
import FormNavbar from "@/components/form-navbar";
import {getCurrentSession} from "@/lib/cookie";
import {prisma} from "@/lib/db";
import SubmissionsTable from "@/components/submissions-table";

const SubmissionsPage = async (props : {params : Promise<{formId : string}>}) => {
    const {user} = await getCurrentSession();
    const params = await props.params;
    const {formId} = params

    const reviews = await prisma.review.findMany({
        where : {
            AND : [
                {formId},
                {userId : user!.id}
            ]
        },
        include : {
            question : {
                select : {
                    title : true,
                    type : true
                }
            },
        }
    })

    let formattedReviews : {questionName : string, response : string}[] = [];
    reviews.map((r) => {
        formattedReviews.push({questionName : r.question.title || r.question.type, response : r.response as string})
    })

    return <div className={"w-full h-full p-[20px] sm:p-[100px] pt-[30px] sm:pt-[60px] pb-[30px] sm:pb-[60px]"}>
        <FormHeader formId={formId}/>
        <FormNavbar formId={formId}/>
        <SubmissionsTable reviews={formattedReviews}/>
    </div>
}

export default SubmissionsPage