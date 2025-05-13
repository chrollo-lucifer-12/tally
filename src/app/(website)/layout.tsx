import {ReactNode} from "react";

const Layout = ({children} : {children : ReactNode}) =>{
    return <main className="min-h-screen bg-white">
        {children}
    </main>
}

export default Layout