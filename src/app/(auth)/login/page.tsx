import Link from "next/link";
import {LoginAction, } from "@/app/(auth)/actions";
import FormHeader from "@/components/auth-form/form-header";
import GoogleLogin from "@/components/auth-form/google-login";
import AuthForm from "@/components/auth-form";

const LoginPage = () => {

    return <div className={"w-full max-w-[280px] p-2 sm:p-0"}>
        <FormHeader signup={false}/>
        <GoogleLogin/>
        <div className={"border border-gray-4 mt-6"}/>
        <AuthForm type={"login"} serverAction={LoginAction}/>
        <section className={"mt-6"}>
            <p className={"text-[10px] text-gray-6"}>Don't have an account? <Link className={"underline hover:text-gray-7 transition duration-200"} href={"/signup"}>Sign up</Link></p>
        </section>
    </div>
}

export default LoginPage