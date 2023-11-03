import { ComponentProps } from 'react'
import { twJoin, twMerge } from 'tailwind-merge'
import Link from 'next/link'

export default function Home() {
  return (
	<div className='grid grid-cols-6 gap-4 h-[600px]'>
		<Column
			pageUrl="/homepage"
			columnName="Homepage"
			counter={'01'}
			bgStyles={twJoin(
				//"hover:shadow-slate-900",
				"bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1542039375-28138150cc31?auto=format&fit=crop&q=80&w=3548&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"
			)}
			textStyles="from-black" />
		<Column
			pageUrl='/legal'
			columnName="Legal"
			counter={'02'}
			bgStyles={twJoin(
				//"hover:shadow-slate-900",
				"bg-center bg-[url(https://images.unsplash.com/photo-1576015655841-ef5fdc1a7060?auto=format&fit=crop&q=80&w=3694&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"
			)}
			textStyles="from-slate-900" />
		<Column
			pageUrl='/tech'
			columnName="Tech"
			counter={'03'}
			bgStyles={twJoin(
				//"hover:shadow-[#512C2A]",
				"bg-center bg-[url(https://images.unsplash.com/photo-1493599588594-dc6ae2c099bf?auto=format&fit=crop&q=80&w=3434&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"
			)}
			textStyles="from-[#512C2A]" />
		<Column
			pageUrl="/music"
			columnName="Music"
			counter={'04'}
			bgStyles={twJoin(
				//"hover:shadow-yellow-900",
				"bg-center bg-[url(https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"
  			)}
			textStyles="from-yellow-900" />
		<Column
			pageUrl="/trending"
			columnName="Trending"
			counter={'05'}
			bgStyles={twJoin(
				//"hover:shadow-yellow-900",
				"bg-center bg-[url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=2124&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"
			)}
			textStyles="from-yellow-900" />
		<Column
			pageUrl="/social"
			columnName="Social"
			counter={'06'}
			bgStyles={twJoin(
				//"hover:shadow-black/40",
				"bg-center bg-[url(https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"
			)}
			textStyles="from-[#262624]"
			counterStyles="text-black/40" />
	</div>
  )
}

type ColumnProps = ComponentProps<'div'> & {
	pageUrl: string,
	columnName: string,
	counter: string,
	bgStyles?: string,
	textStyles?: string,
	counterStyles?: string,
}

const Column = ({pageUrl, bgStyles, columnName, textStyles, counter, counterStyles, ...props}: ColumnProps) => {
	const bgStylesTw = twMerge(
		'h-full flex flex-col justify-between',
		'bg-slate-800 bg-cover',
		'rounded-lg',
		'cursor-pointer',
		'ease-in-out',
		'hover:scale-y-[1.05]',
		'hover:shadow-lg',
		'transition',
		bgStyles,
	)

	const textStylesTw = twMerge(
		'flex flex-col gap-2 p-4 self-stretch',
		'font-sans text-white text-2xl',
		'rounded-lg',
		'bg-gradient-to-t',
		'to-transparent',
		// '[writing-mode:vertical-rl]',
		//'backdrop-blur-lg backdrop-opacity-70',
		textStyles,
	)

	return (
		<Link href={pageUrl}>
			<div className={bgStylesTw} {...props}>
				<p className={twMerge(
					'inline-flex self-end justify-end',
					'p-4',
					'text-mono text-opacity-50 text-white/30 select-none',
					counterStyles,
				)}>
					{counter}
				</p>
				<p className={textStylesTw}>
					<span>{columnName}</span>
				</p>
			</div>
		</Link>
	)
}

const StaticBars = () => {
  return (
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
  )
}
