import Link from "next/link";
import {SignupAction} from "@/app/(auth)/actions";
import FormHeader from "@/components/auth-form/form-header";
import GoogleLogin from "@/components/auth-form/google-login";
import AuthForm from "@/components/auth-form";

const SignupPage = () => {

    return <div className={"w-full max-w-[280px]"}>
        <FormHeader/>
        <GoogleLogin/>
        <div className={"border border-gray-4 mt-6"}/>
        <AuthForm type={"signup"} serverAction={SignupAction}/>
        <section className={"mt-6"}>
            <p className={"text-[10px] text-gray-6"}>Already have an account? <Link className={"underline hover:text-gray-7 transition duration-200"} href={"/login"}>Log in</Link></p>
        </section>
    </div>
}

export default SignupPage