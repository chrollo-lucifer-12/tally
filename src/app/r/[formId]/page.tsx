import {prisma} from "@/lib/db";
import DisplayForm from "@/components/display-form";

const Form = async (props: {params : Promise<{formId : string}>}) => {
    const params = await props.params
    const {formId} = params;

    const questions = await prisma.question.findMany({where : {formId}});
    const form = await prisma.form.findUnique({where : {id : formId}, select : {title : true}});

    return <DisplayForm title={form!.title} questions={questions} formId = {formId} />

}

export default Form