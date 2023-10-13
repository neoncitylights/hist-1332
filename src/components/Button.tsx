import { ButtonProps as HtmlButtonProps } from 'react-html-props'
import { twMerge } from 'tailwind-merge'

export type ButtonProps = HtmlButtonProps & {
	kind?: 'primary' | 'normal',
}

export const Button = ({children, className, kind = 'primary', ...props}: ButtonProps) => {
	const styles = twMerge(
		'appearance-none',
		'flex flex-row items-center justify-center gap-2',
		'py-2 px-4',
		'border',
		kind === 'primary' && 'bg-red-600 border-red-600 text-white',
		kind === 'normal' && 'border-slate-200 bg-white text-slate-800',
		'rounded-md',
		className
	)

	return (
		<button
			type='button'
			className={styles}
			{...props}
		>
			{children}
		</button>
	)
}
