import { ButtonProps as HtmlButtonProps } from 'react-html-props'
import { twMerge } from 'tailwind-merge'

export type ButtonProps = HtmlButtonProps & {
	kind?: 'primary' | 'normal',
}

export const Button = ({children, className, kind = 'primary', ...props}: ButtonProps) => {
	const styles = twMerge(
		'appearance-none',
		'inline-flex flex-row items-center justify-center gap-2',
		'py-2 px-4',
		'border',
		kind === 'primary' && 'bg-stone-600 border-stone-600 text-white',
		kind === 'normal' && 'border-stone-600 bg-white text-slate-600',
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
