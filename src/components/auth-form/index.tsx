"use client"

import {useForm} from "@/hooks/useForm";
import CustomInput from "@/components/custom-input";
import CustomButton from "@/components/custom-button";
import {useEffect} from "react";
import {useRouter} from "next/navigation";

interface AuthFormProps {
    type : "signup" | "login" | "complete" | "verify"
    serverAction : any
    email?: string
}

const AuthForm = ({type, serverAction, email} :AuthFormProps) => {
    const {pending, state, action} = useForm(serverAction)

    const router = useRouter()

    useEffect(() => {
        if (state?.redirect) {
            router.push(state?.redirect)
        }
    }, [state])

    switch (type) {
        case "signup": {
            return <form action={action} className={"flex flex-col gap-y-4 mt-4"}>
                <CustomInput name={"email"} type={"email"} label={"Email"} error={state?.errors?.email}/>
                <CustomButton pending={pending}  type={"submit"} title={"Continue"} cn={"bg-black text-white hover:text-white hover:bg-gray-900"} />
            </form>
        }
        case "complete": {
            return <form action={action} className={"flex flex-col gap-y-4 mt-4"}>
                <CustomInput name={"firstname"} type={"text"} label={"First Name"} error={state?.errors?.firstname}/>
                <CustomInput name={"lastname"} type={"text"} label={"Last Name"} error={state?.errors?.lastname}/>
                <CustomInput name={"password"} type={"password"} label={"Password"} error={state?.errors?.password}/>
                <input type={"hidden"} name={"email"} value={email} />
                <CustomButton pending={pending}  type={"submit"} title={"Continue"} cn={"bg-black text-white hover:text-white hover:bg-gray-900"} />
            </form>
        }
    }
}

export default AuthForm