import type { ComponentProps, ReactNode } from "react"

export type PageHeaderProps = ComponentProps<'header'> & {
	title: string,
	subTitle: ReactNode,
}
export const PageHeader = ({title, subTitle}: PageHeaderProps) => {
	return (
		<header className='flex flex-col gap-2'>
				<h2 className='font-sora font-semibold text-4xl'>
					{title}
				</h2>
				<span className='text-lg text-stone-600'>
					{subTitle}
				</span>
			</header>
	)
}
