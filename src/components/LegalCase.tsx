import { IconGavel } from "@tabler/icons-react"
import Link from "next/link"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

export type LegalCaseProps = ComponentProps<'section'>
export const LegalCase = ({children}: LegalCaseProps) => {
	return (
		<section
			className={twMerge(
				'inline-flex flex-row items-start gap-3 px-4 py-6',
				// 'border border-gray-100',
				// 'border border-stone-200',
				'bg-stone-50 text-stone-800 rounded-lg',
				'font-bespokeSerif'
			)}
		>
			<div className='p-3 rounded-md'>
				<IconGavel size={24} />
			</div>
			<div className='flex flex-col gap-4'>
				{children}
			</div>
		</section>
	)
}

export type LegalCaseHeaderProps = ComponentProps<'header'> & {
	caseName: string,
	courtName: string,
	courtSite: URL|string,
}
export const LegalCaseHeader = ({caseName, courtName, courtSite}: LegalCaseHeaderProps) => {
	return (
		<header>
			<h2 className={twMerge(
				'text-xl font-sans font-medium',
			)}>
				{caseName}
			</h2>
			<span className='text-sm text-gray-500'>
				<Link href={courtSite}>{courtName}</Link>
			</span>
		</header>
	)
}

export type LegalCaseBodyProps = ComponentProps<'span'>
export const LegalCaseBody = ({children}: LegalCaseBodyProps) => {
	return (
		<span>
			<p>{children}</p>
		</span>
	)
}

export type LegalCaseFooterProps = ComponentProps<'footer'> & {
	dateDecided: string,
}
export const LegalCaseFooter = ({dateDecided}: LegalCaseFooterProps) => {
	return (
		<footer className='flex flex-row gap-6 mt-auto items-start'>
			<div className='flex flex-col tracking-tight'>
				<span className='font-semibold font-sans'>Decided on</span>
				<span className=''>{dateDecided}</span>
			</div>
		</footer>
	)
}
