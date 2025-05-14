import FormHeader from "@/components/auth-form/form-header";
import AuthForm from "@/components/auth-form";
import {CompleteInfoAction} from "@/app/(auth)/actions";
import {redirect} from "next/navigation";
import {prisma} from "@/lib/db";

const CompleteProfilePage = async ({searchParams} : {searchParams : Promise<{email : string}>}) => {
    const {email} = await searchParams

    if (!email) {
        redirect("/signup")
    }

    const userExists = await prisma.user.findFirst({where : {email}})

    if (!userExists) {
        redirect("/signup")
    }

    if (!userExists.verified) {
        redirect(`/verify?email=${email}`)
    }

    return <div className={"w-full max-w-[280px]"}>
        <FormHeader/>
        <AuthForm type={"complete"} serverAction={CompleteInfoAction} email={email}/>
    </div>
}

export default CompleteProfilePage