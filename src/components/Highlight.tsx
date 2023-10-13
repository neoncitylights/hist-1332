import { MarkProps } from 'react-html-props'

export type HighlightProps = MarkProps
export const Highlight = ({children, ...props}: HighlightProps) => {
  return (
    <mark className='text-inherit bg-[unset] underline decoration-yellow-400 decoration-8 underline-offset-3' {...props}>
      {children}
    </mark>
  )
}
