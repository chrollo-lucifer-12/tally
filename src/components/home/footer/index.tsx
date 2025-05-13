"use client"

import Image from "next/image";
import Link from "next/link";
import { Twitter, Linkedin, Youtube, Facebook } from "lucide-react";

const Footer = () => {
    const socialIcons = [
        { icon: <Twitter size={20} className="text-gray-700" />, label: "Twitter" },
        { icon: <Linkedin size={20} className="text-gray-700" />, label: "LinkedIn" },
        { icon: <Youtube size={20} className="text-gray-700" />, label: "YouTube" },
        { icon: <Facebook size={20} className="text-gray-700" />, label: "Facebook" }
    ];

    const productLinks = [
        { label: "Features", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Customers", href: "#" },
        { label: "What's new", href: "#" },
        { label: "Roadmap", href: "#" },
        { label: "Feature requests", href: "#" },
        { label: "Templates", href: "#" },
        { label: "Integrations", href: "#" },
        { label: "Words from our users", href: "#" },
        { label: "Status", href: "#" }
    ];

    const helpLinks = [
        { label: "Get started", href: "#" },
        { label: "How-to guides", href: "#" },
        { label: "Help center", href: "#" },
        { label: "Contact support", href: "#" },
        { label: "Hire an expert", href: "#" },
        { label: "Report abuse", href: "#" }
    ];

    const companyLinks = [
        { label: "About us", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Media kit", href: "#" }
    ];

    const resourceLinks = [
        { label: "Join the community", href: "#" },
        { label: "Referral program", href: "#" },
        { label: "Fair use policy", href: "#" },
        { label: "GDPR", href: "#" },
        { label: "Terms & Privacy", href: "#" }
    ];

    const compareLinks = [
        { label: "Typeform alternative", href: "#" },
        { label: "Jotform alternative", href: "#" },
        { label: "Google Forms alternative", href: "#" },
        { label: "Best free online form builders", href: "#" }
    ];

    return <section className="mt-64 flex flex-col items-center gap-y-10 px-4 sm:px-10 md:px-20 lg:px-[120px]">
        <div className={"w-full border border-gray-5"} />
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="flex flex-col">
                <Image src={"/logo.png"} alt={"logo"} width={50} height={50}/>
                <p className="text-sm mt-6 text-gray-700 font-semibold">Made and hosted in the EU 🇪🇺</p>
                <p className="text-sm text-gray-700">© 2025 Tally BV</p>

                <div className="flex gap-4 mt-6">
                    {socialIcons.map((item, index) => (
                        <Link key={index} href="#" aria-label={item.label}>
                            {item.icon}
                        </Link>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <h3 className="font-bold text-lg mb-2 text-black">Product</h3>
                {productLinks.map((link, index) => (
                    <Link key={index} href={link.href} className="text-gray-700 hover:text-gray-900 text-sm">
                        {link.label}
                    </Link>
                ))}
            </div>

            <div className="flex flex-col gap-3">
                <h3 className="font-bold text-lg mb-2 text-black">Help</h3>
                {helpLinks.map((link, index) => (
                    <Link key={index} href={link.href} className="text-gray-700 hover:text-gray-900 text-sm">
                        {link.label}
                    </Link>
                ))}

                <h3 className="font-bold text-lg mt-8 mb-2 text-black">Company</h3>
                {companyLinks.map((link, index) => (
                    <Link key={index} href={link.href} className="text-gray-700 hover:text-gray-900 text-sm">
                        {link.label}
                    </Link>
                ))}
            </div>

            <div className="flex flex-col gap-3">
                <h3 className="font-bold text-lg mb-2 text-black">Resources</h3>
                {resourceLinks.map((link, index) => (
                    <Link key={index} href={link.href} className="text-gray-700 hover:text-gray-900 text-sm">
                        {link.label}
                    </Link>
                ))}

                <h3 className="font-bold text-lg mt-8 mb-2 text-black">Compare</h3>
                {compareLinks.map((link, index) => (
                    <Link key={index} href={link.href} className="text-gray-700 hover:text-gray-900 text-sm">
                        {link.label}
                    </Link>
                ))}
            </div>
        </div>
    </section>
}

export default Footer;