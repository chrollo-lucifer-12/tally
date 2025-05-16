"use client"

import Link from "next/link";
import Image from "next/image";

const TallyIcon = ({href} : {href : string}) => {
   return <Link href={href} className={""}>
        <Image src={"/icon-2.svg"} alt={"icon"} width={20} height={20} className={""}/>
    </Link>
}
export default TallyIcon