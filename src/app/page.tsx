import { IconArrowRight, IconArrowUpRight, IconPlayerPlayFilled } from '@tabler/icons-react'
import { DivProps, ButtonProps as HtmlButtonProps, MarkProps } from 'react-html-props'
import { twMerge } from 'tailwind-merge'

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className='flex flex-col justify-between h-screen p-16'>
        <div className='flex flex-row justify-between'>
          <span className={twMerge(
              'flex flex-row gap-2 items-center',
              'font-mono font-medium uppercase text-2xl',
              'cursor-pointer')}>
            Play
            <IconPlayerPlayFilled size={24} />
          </span>
          <div className='flex flex-col gap-1 text-xl items-end uppercase font-mono'>
            <span>Feb 14. 2005 {'///'}</span>
            <span>{'///'} Oct 11. 2023</span>
          </div>
        </div>
        <div className='flex flex-row justify-between items-end'>
          <div className='flex flex-row gap-4 items-end'>
            <span className='flex flex-col gap-2'>
              {/* <span className='text-gray-900 text-4xl'>YouTube</span> */}
              <h1 className='text-8xl font-generalSans font-medium'>
                How the World<br /> Watched Online
              </h1>
            </span>
            <IconArrowUpRight size={64} strokeLinecap='butt' />
          </div>
          <div className='flex flex-row gap-1 items-end'>
            {/* <div className='w-[32px] h-[08px] bg-[#ffffff] rounded-xl'></div>
            <div className='w-[32px] h-[12px] bg-[#ffff00] rounded-xl'></div>
            <div className='w-[32px] h-[18px] bg-[#00ffff] rounded-xl'></div>
            <div className='w-[32px] h-[27px] bg-[#00ff00] rounded-xl'></div>
            <div className='w-[32px] h-[41px] bg-[#ff00ff] rounded-xl'></div>
            <div className='w-[32px] h-[61px] bg-[#ff0000] rounded-xl'></div>
            <div className='w-[32px] h-[91px] bg-[#0000ff] rounded-xl'></div> */}
            <div className='w-[32px] h-[08px] bg-[#ffffff] rounded-xl'></div>
            <div className='w-[32px] h-[12px] bg-[#FFC800] rounded-xl'></div>
            <div className='w-[32px] h-[18px] bg-[#16C6E9] rounded-xl'></div>
            <div className='w-[32px] h-[27px] bg-[#2CD762] rounded-xl'></div>
            <div className='w-[32px] h-[41px] bg-[#E830E8] rounded-xl'></div>
            <div className='w-[32px] h-[61px] bg-[#E83046] rounded-xl'></div>
            <div className='w-[32px] h-[91px] bg-[#005EFF] rounded-xl'></div>
          </div>
        </div>
      </section>
      <section className='h-[200vh] p-16'>
        <section>
          <section></section>
        </section>
      </section>
    </main>
  )
}

type HighlightProps = MarkProps
const Highlight = ({children, ...props}: HighlightProps) => {
  return (
    <mark className='text-inherit bg-[unset] underline decoration-yellow-400 decoration-8 underline-offset-3' {...props}>
      {children}
    </mark>
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

type ColumnProps = DivProps & {
  heading: string,
  heading2: string,
  textClassName?: string,
  headingClassName?: string,
  heading2ClassName?: string,
  cardClassName?: string,
  innerCardClassName?: string,
}
const Column = ({
  heading,
  heading2,
  children,
  className,
  textClassName,
  headingClassName,
  heading2ClassName,
  cardClassName,
  innerCardClassName,
  ...props
}: ColumnProps) => {
  const cardTw = twMerge(
    'flex flex-col gap-8 justify-between w-[200px]',
    className
  );
  const heading2Tw = twMerge(
    '[writing-mode:vertical-lr] [text-orientation:sideways-right]',
    'ml-auto rotate-180 text-slate-200 text-xl font-mono',
    heading2ClassName
  );
  const innerCardTw = twMerge(
    'flex p-4 border-2 border-slate-800 rounded-lg min-w-full h-[400px]',
    innerCardClassName,
  );

  return (
    <section className={cardTw} {...props}>
    <div className={innerCardTw}>
      <p className={heading2Tw}>
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
