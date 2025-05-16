import Image from 'next/image';
import Link from 'next/link';

type Props = {
    href: string;
};

export function LinkPreview({ href }: Props) {
    return (
        <Link href={href} className="hover:shadow-md transition flex flex-col space-y-1 border-l-4 rounded-md border-gray-5 p-2 mt-2">
            <p className={"text-black font-semibold text-sm"}>Tally Forms</p>
            <p className={"text-xs text-gray-8"}>Made with Tally, the simplest way to create forms.</p>
                <Image src={"/og.jpg"} alt="" width={100} height={80} className="rounded-md w-full p-2 border border-gray-300" />
        </Link>
    );
}