import { IconCalendarEvent } from "@tabler/icons-react"
import { ComponentProps, ReactNode } from "react"
import { twJoin } from "tailwind-merge"

export type TimelineEventProps = ComponentProps<'div'> & {
	icon?: ReactNode,
	eventName: string,
	dateTime: string,
	desc: ReactNode,
}

export const TimelineEvent = ({icon, eventName, dateTime, desc}: TimelineEventProps) => {
	return (
		<div className='flex flex-row gap-4 border-l-2 border-slate-200 pl-4 py-4 items-start'>
			<div className={twJoin(
				'flex items-center justify-between p-2',
				'bg-blue-50 text-blue-500 rounded-md',
			)}>
				{icon === undefined ? <IconCalendarEvent size={24} /> : icon}
			</div>
			<div className='flex flex-col gap-2'>
				<span className='font-medium text-lg flex flex-col'>
					{eventName}
					{/* <span className='h-1 w-1 bg-slate-200 inline-block rounded-full'></span> */}
					<span className='text-slate-400 text-sm'>{dateTime}</span>
				</span>
				<span className='text-slate-700 max-w-[40ch]'>{desc}</span>
			</div>
		</div>
	)
}
