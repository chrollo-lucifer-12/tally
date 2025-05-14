"use client"

import Link from "next/link";
import Image from "next/image";
import CustomButton from "@/components/custom-button";
import CustomInput from "@/components/custom-input";
import {useForm} from "@/hooks/useForm";
import {SignupAction} from "@/app/(auth)/actions";

const SignupPage = () => {

    const {action, pending, state} = useForm(SignupAction)

    return <div className={"w-full max-w-[280px]"}>
        <header className={"flex flex-col gap-y-10 justify-center"}>
            <Link href={"/"} className={"bg-transparent text-gray-7"}>
                <Image src={"/icon-2.svg"} alt={"icon"} width={20} height={20} className={"filter text-gray-7"}/>
            </Link>
            <span>
            <p className={"text-black text-[20px] font-[700]"}>Create your Tally account</p>
            <p className={"text-gray-5 text-[12px] font-[600] mt-10px leading-[1.25]"}>Get started with the simplest way to create forms.</p>
            </span>
        </header>
        <section className={"flex flex-col gap-y-4 mt-10"}>
            <CustomButton src={"/google-svg.svg"} title={"Continue with Google"}/>
        </section>
        <div className={"border border-gray-4 mt-6"}/>
        <form action={action} className={"flex flex-col gap-y-4 mt-4"}>
            <CustomInput name={"email"} type={"email"} label={"Email"} error={state?.errors?.email}/>
            <CustomButton pending={pending}  type={"submit"} title={"Continue"} cn={"bg-black text-white hover:text-white hover:bg-gray-900"} />
        </form>
        <section className={"mt-6"}>
            <p className={"text-[10px] text-gray-6"}>Already have an account? <Link className={"underline hover:text-gray-7 transition duration-200"} href={"/login"}>Log in</Link></p>
        </section>
    </div>
}

export default SignupPage