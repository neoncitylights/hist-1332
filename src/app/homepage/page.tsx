import { IconCalendarEvent } from "@tabler/icons-react";
import { ComponentProps, ReactNode } from "react";
import { twJoin } from "tailwind-merge";

export default function Page() {
	return (
		<div>
			<div className='flex flex-col ml-96'>
				{events.map((event, index) => {
					return (
						<TimelineEvent
							key={index}
							eventName={event.eventName}
							dateTime={event.dateTime}
							desc={event.desc} />
					)
				})}
			</div>
		</div>	
	)
}

{/* <div className="rounded-lg flex flex-col max-w-[400px] p-4">
	<div>
		<img
			className='rounded-lg'
			src="https://www.feedough.com/wp-content/uploads/2022/12/image-7.webp"
			width={400} />
	</div>
	<div className='p-4'>
		<p>The three founders of YouTube who met at PayPal.</p>
	</div>
</div> */}

const events: TimelineEventProps[] = [
	{
		eventName: 'YouTube Founded',
		dateTime: 'Early 2005',
		desc: <>
			Who founded YouTube? YouTube was founded by three individuals: Steve Chen, Chad Hurley, and Jawed Karim. They were friends and former employees of PayPal.
			<br /><br />
			The idea for YouTube emerged in 2005 when they couldn't find online videos about popular events such as Janet Jackson's wardrobe malfunction at the 2004 Super Bowl or the tsunami that occurred during that winter.
		</>,
	},
	{
		eventName: 'Beta Site Launch',
		dateTime: 'May 2005',
		desc: 'YouTube\'s beta site was launched in May 2005. It reached its first one million-hit video in September 2005, featuring a viral Nike ad with Brazilian soccer player Ronaldinho.',
	},
	{
		eventName: 'Record-Breaking Views',
		dateTime: 'December 2005',
		desc: 'Around this time, YouTube was serving over two million video views per day.',
	},
	{
		eventName: 'GA Site Launch',
		dateTime: 'December 2005',
		desc: 'YouTube officially launched in December 2005. It received a $3.5 million investment from Sequoia Capital, enabling it to improve its servers and increase bandwidth.',
	},
	{
		eventName: 'Content Verification Program and Deal with NBC',
		dateTime: 'March 2006',
		desc: 'In response to copyright concerns, YouTube introduced the Content Verification Program. It later struck a deal with NBC for the promotion of the network\'s TV lineup.',
	},
	{
		eventName: 'Google buys YouTube',
		dateTime: 'October 2006',
		desc: 'Recognizing its potential, Google acquired YouTube in October 2006 for $1.65 billion. This acquisition further accelerated YouTube\'s growth and integration with Google services.',
	},
	{
		eventName: 'Launch of Partner Program',
		dateTime: 'May 2007',
		desc: 'In May 2007, YouTube launched its Partner Program, allowing content creators to monetize their videos and receive a share of advertising revenue.',
	},
	{
		eventName: 'Mainstream Recognition',
		dateTime: 'January 2009',
		desc: 'In January 2009, the 111th U.S. Congress launched its official Congressional YouTube channels, giving citizens unprecedented access to the government. The Vatican also launched its YouTube channel in February 2009.',
	},
	{
		eventName: 'YouTube Live',
		dateTime: 'April 2011',
		desc: 'In April 2011, YouTube launched YouTube Live, a service that allowed the streaming of various live content, from concerts to news coverage.',
	},
	{
		eventName: '1B Hit Video, U.S. Presidential Election Coverage',
		dateTime: 'December 2012',
		desc: 'In December 2012, Psy\'s "Gangnam Style" became the first YouTube video to reach over one billion views. YouTube also played a significant role in the 2012 U.S. presidential election coverage.',
	},
	{
		eventName: 'Continued Expansion and Evolution',
		dateTime: '2015 - Present',
		desc: 'YouTube introduced subscription services like YouTube Red (later YouTube Premium) and YouTube Go for low-end devices. It faced challenges, including the 2018 shooting at its headquarters. In January 2022, YouTube was ranked as the second most popular social network worldwide.',
	}
]

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
