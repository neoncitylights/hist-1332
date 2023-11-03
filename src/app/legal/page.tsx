import { PageHeader } from "@/components/PageHeader";
import Link from "next/link";
import Image from "next/image";
import {
	Chip,
	ChipContainer
} from "@/components/Chip";
import {
	LegalCase,
	LegalCaseHeader,
	LegalCaseBody,
	LegalCaseFooter,
} from "@/components/LegalCase";

export default function Page() {
	const cases = legalData.map((legalCase, index) => {
		const topics = legalCase.topics.map((topic, index) => {
			return (
				<Chip key={index}>{topic}</Chip>
			)
		})
		return (
			<LegalCase key={index}>
				<LegalCaseHeader
					caseName={legalCase.caseName}
					courtName={legalCase.courtName}
					courtSite={legalCase.courtSite} />
				<ChipContainer>
					{topics}
				</ChipContainer>
				<LegalCaseBody>
					{legalCase.body}
				</LegalCaseBody>
				<LegalCaseFooter
					dateDecided={legalCase.dateDecided} />
			</LegalCase>
		)
	})

	return (
		<div className='flex flex-col gap-12'>
			<div className='grid grid-cols-2 gap-12'>
				<div>
					<Image
						src="/h3h3-case.webp"
						alt="H3H3 vs Ross"
						width={640} height={360}
						className="rounded-xl saturate-100"
						/>
				</div>
				<div className='flex flex-col gap-8 mt-4 items-start'>
					<header className='flex flex-col gap-2 leading'>
						<span className="uppercase text-sm">Featured Article</span>
						<h2 className="font-semibold text-5xl">How to Weigh Fair Use</h2>
					</header>
					<div className='flex flex-col gap-4 items-start'>
						<p className='max-w-[50ch]'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit mattis ligula, in vestibulum est feugiat in. Fusce commodo nulla vitae libero pellentesque tincidunt.
						</p>
						<Link
							href="/legal/essay"
							className="inline-flex items-center justify-between py-2 px-4 bg-stone-200 text-stone-800 rounded-md">
							Read more
						</Link>
					</div>
				</div>
			</div>
			<PageHeader
				title="Legal Proceedings"
				subTitle="Cases brought against YouTube, with wide societal implications." />
			<section className='grid grid-cols-2 gap-4'>
				{cases}
			</section>
		</div>
	)
}

type LegalCaseDatum = {
	caseName: string,
	courtName: string,
	courtSite: string,
	topics: string[],
	body: string,
	dateDecided: string,
}
const legalData: LegalCaseDatum[] = [
	{
		caseName: 'Hosseinzadeh v. Klein',
		courtName: 'United States District Court, S.D. New York.',
		courtSite: 'https://www.nysd.uscourts.gov/',
		topics: [
			'copyright',
		],
		body: 'Alleged copyright infringement against Matt Hosseinzadeh by Ethan and Hila Klein on YouTube when the pair uploads a video featuring his video.',
		dateDecided: '2017-08-23',
	},
	{
		caseName: 'Equals Three, LLC v. Jukin Media, Inc.',
		courtName: 'United States District Court, C.D. California.',
		courtSite: 'https://www.cacd.uscourts.gov/',
		topics: [
			'copyright',
		],
		body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit mattis ligula, in vestibulum est feugiat in. Fusce commodo nulla vitae libero pellentesque tincidunt.',
		dateDecided: '2015-10-13',
	},
	{
		caseName: 'Divino Grp. v. Google LLC',
		courtName: 'United States District Court, N.D. California',
		courtSite: 'https://www.cand.uscourts.gov/',
		topics: [
			'Discrimination',
			'LGBTQ',
		],
		body: 'Alleged discrimination against LGBTQ content and content creators',
		dateDecided: '2021-08-14',
	},
	{
		caseName: 'Hubbard v. Google LLC',
		courtName: 'United States District Court, N.D. California',
		courtSite: 'https://www.cand.uscourts.gov/',
		topics: [
			'COPPA',
			'PII',
			'Privacy'
		],
		body: 'Alleged violations of Google collecting PII (personally identifiable information) on minors, and its history of past legal enforcement/scrutiny from COPPA (Children\'s Online Privacy Protection Act)',
		dateDecided: '2021-08-14',
	},
	{
		caseName: 'Lenz v. Universal Music Corp.',
		courtName: 'United States Court of Appeals for the Ninth Circuit',
		courtSite: 'https://www.ca9.uscourts.gov/',
		topics: [
			'copyright',
		],
		body: 'Alleged violations of Google collecting PII (personally identifiable information) on minors, and its history of past legal enforcement/scrutiny from COPPA (Children\'s Online Privacy Protection Act)',
		dateDecided: '2021-08-14',
	},
	{
		caseName: 'Viacom International Inc. v. YouTube, Inc.',
		courtName: 'United States Court of Appeals for the Second Circuit',
		courtSite: 'https://www.ca2.uscourts.gov/',
		topics: [
			'copyright',
		],
		body: 'Allegations by Viacom against Google for copyright infringement on videos. This included content such as Nickelodeon, Paramount Pictures, and MTV',
		dateDecided: '2010-06-23',
	},
]
