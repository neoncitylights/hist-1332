import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

export type ChipContainerProps = ComponentProps<'div'>
export const ChipContainer = ({children}: ChipContainerProps) => {
	return (
		<div className='flex flex-row gap-2'>
			{children}
		</div>
	)
}

export type ChipProps = ComponentProps<'div'>
export const Chip = ({children}: ChipProps) => {
	return (
		<div className={twMerge(
			'flex items-center justify-center',
			'px-3 py-1',
			'bg-stone-200',
			//'border border-blue-400',
			'rounded-md',
			'text-stone-800 text-sm font-sans font-medium lowercase'
		)}>
			{children}
		</div>
	)
}
