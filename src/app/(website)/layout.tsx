import {ReactNode} from "react";
import {getCurrentSession} from "@/lib/cookie";
import {redirect} from "next/navigation";

const Layout = async ({children} : {children : ReactNode}) =>{

    const {session} = await getCurrentSession()

    if (session) {
        redirect("/dashboard")
    }


    return <main className="min-h-screen bg-white">
        {children}
    </main>
}

export default Layout