import Link from "next/link";
import {PencilIcon} from "lucide-react";
import {prisma} from "@/lib/db";

const FormHeader = async ({formId} : {formId :string}) => {

    const form = await prisma.form.findUnique({where: {id: formId}});

    return  <div className={"flex justify-between items-center"}>
        <h1 className={"text-gray-10 font-bold text-[25px]"}>{form!.title}</h1>
        <Link href={`/forms/${formId}/edit`}
              className={"text-white bg-blue-500 hover:bg-blue-800 text-xs gap-x-2 rounded-lg pl-2 pr-2 flex items-center justify-between transition duration-200 focus:ring-2 focus:ring-blue-500"}>
            <PencilIcon className={"w-3"}/>
            <p className={"font-bold"}>Edit</p>
        </Link>
    </div>
}

export default FormHeader