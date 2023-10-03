import { IconArrowRight, IconBook, IconCode } from '@tabler/icons-react'
import { DivProps, ButtonProps as HtmlButtonProps } from 'react-html-props'
import { twMerge } from 'tailwind-merge'

export default function Home() {
  return (
    <main className="flex flex-row gap-8 items-center p-12 w-full my-auto">
      <Column heading={'Heading 1'} heading2={'Heading 1 test'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium asperiores eius neque libero amet repudiandae placeat perferendis laudantium unde ipsam eaque mollitia.
      </Column>
      <Column heading={'Heading 2'} heading2={'Heading 2 test'} className='flex-col-reverse'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium asperiores eius neque libero amet repudiandae placeat perferendis laudantium unde ipsam eaque mollitia.
      </Column>
      <div className='ml-auto flex flex-col gap-8 text-right items-end'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-4xl font-bold'>The History of YouTube</h2>
          <p>An interactive form of storytelling through research and code</p>
        </div>
        <div className='flex flex-row gap-2'>
          <Button kind='primary'>Enter the story<IconBook size={20} /></Button>
          <Button kind='normal'>View source code <IconCode size={20} /></Button>
        </div>
      </div>
    </main>
  )
}

type ButtonProps = HtmlButtonProps & {
  kind?: 'primary' | 'normal',
}
const Button = ({children, className, kind = 'primary', ...props}: ButtonProps) => {
  const styles = twMerge(
    'appearance-none',
    'flex flex-row items-center justify-center gap-2',
    'py-2 px-4',
    'border',
    kind === 'primary' && 'border-slate-800 bg-slate-800 text-white',
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

type ColumnProps = DivProps & {
  heading: string,
  heading2: string,
  textClassName?: string,
}
const Column = ({heading, heading2, children, className, textClassName, ...props}: ColumnProps) => {
  return (
    <section className={twMerge('flex flex-col gap-8 justify-between w-[200px]', className)} {...props}>
    <div className='flex p-4 border-2 border-slate-800 rounded-lg min-w-full h-[400px]'>
      <p className='[writing-mode:vertical-lr] [text-orientation:sideways-right] ml-auto rotate-180 text-slate-200 text-xl font-mono'>
        {heading2} \\
      </p>
    </div>
    <section className='flex flex-col gap-2'>
      <h1 className='text-2xl font-bold flex flex-row gap-2 items-center'>
        {heading}
        <IconArrowRight size={24} />
      </h1>
      <p className={twMerge('text-sm', textClassName)}>{children}</p>
    </section>
  </section>
  )
}
