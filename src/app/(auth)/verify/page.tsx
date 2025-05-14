import FormHeader from "@/components/auth-form/form-header";
import AuthForm from "@/components/auth-form";
import {redirect} from "next/navigation";
import {prisma} from "@/lib/db";
import {GenerateOtp, VerifyEmailAction} from "@/app/(auth)/actions";

const VerifyPage = async ({searchParams} : {searchParams : Promise<{email : string}>}) => {
    const {email} = await searchParams

    if (!email) {
        redirect("/signup")
    }

    const userExists = await prisma.user.findFirst({where : {email}})

    if (!userExists) {
        redirect("/signup")
    }

    if (userExists.verified) {
        redirect(`/complete-profile?email=${email}`)
    }

    await GenerateOtp(email);

    return <div className={"w-full max-w-[280px]"}>
        <FormHeader/>
        <AuthForm type={"verify"} serverAction={VerifyEmailAction} email={email}/>
    </div>
}

export default VerifyPage