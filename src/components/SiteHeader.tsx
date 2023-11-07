import { IconPlayerPlayFilled } from "@tabler/icons-react";
import Link from "next/link";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export type SiteHeaderProps = ComponentProps<'header'>
export const SiteHeader = ({ ...props }: SiteHeaderProps) => {
    const headerStyles = twMerge(
        "pt-8 pb-4 px-48",
        "flex flex-row justify-between items-center",
        //"border-b-2 border-b-stone-300",
    )

    return (
        <header className={headerStyles} {...props}>
            <Link href="/">
                <span className='flex flex-row gap-4 items-center text-lg'>
                    <span className="p-4 bg-slate-900 text-white flex items-center justify-between">
                        <IconPlayerPlayFilled size={24} />
                    </span>
                    <span className='flex flex-col'>
                        <span className='font-generalSans font-semibold text-slate-900'>
                            How We
                            Watched Online
                        </span>
                        <span className='text-sm'>The History of YouTube</span>
                    </span>
                </span>
            </Link>
            <nav>
                <ul className="flex flex-row gap-8 text-lg font-medium text-stone-700">
                    <li><Link href="/homepage">Homepage</Link></li>
                    <li><Link href="/legal">Legal</Link></li>
                    <li><Link href="/social">Social</Link></li>
                    <li><Link href="/tech">Tech</Link></li>
                    <li><Link href="/trending">Trending</Link></li>
                    <li><Link href="/music">Music</Link></li>
                </ul>
            </nav>
        </header>
    )
}
