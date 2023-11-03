import { PageHeader } from "@/components/PageHeader";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export default function Page() {
	return (
		<div className="px-[14rem] flex flex-col gap-8">
			<PageHeader
				title="How to Weigh Fair Use"
				subTitle="By Ricardo Rivera" />
			<article className='flex flex-col gap-4 py-12'>
				<Paragraph>
					On YouTube, and many other social media sites, it is very common to see content creators reacting to other’s pieces of works, giving critiques and feedback,
					reporting it for news coverage, or using footage as part of an educational experience, however, the misunderstanding of certain laws paved ways to lawsuits
					that have nationwide, and site-wide, implementations. As a YouTuber that may not know much about law, it is important to know how to legally use other works
					properly to avoid the takedown of your channel, or worse, a lawsuit that may dig you deep into a hole.
				</Paragraph>
				<Paragraph>
					One of the biggest genres of videos on the platform is a <Quote>“react video”</Quote>, which, to put plainly, is a video capturing the reaction of a video posted by another
					creator. These videos are everywhere and extend to every part of every community and extend across the borders of America where YouTube’s headquarters is located.
					Because of the widespread use of react videos to garner more clicks, many YouTubers lack the legal understanding of what protects their work from being the
					focal point of a lawsuit: copyright law, more specifically Fair Use.
				</Paragraph>
				<Paragraph>
					According to the <Highlight>Copyright Act of 1976</Highlight>, Fair Use is a legal doctrine in the United States that allows the unlicensed use of copyrighted works to be protected under
					certain circumstances, including criticism, parody, news reporting, or research. While Fair Use does serve as a defense in court, it does not automatically absolve
					the user from legal litigation. Additionally, Fair Use acts only as a viable defense in an American court and does not extend to other countries. 
				</Paragraph>
				<Separator />
				<Paragraph>
					To save themselves from being sued or having your work taken down by YouTube, content creators must understand the four factors that weight the difference of copyright
					infringement and Fair Use, which are: <Quote>“the purpose and character of the use, including whether such use is of a commercial nature or is for nonprofit educational
					purposes; the nature of the copyrighted work; the amount and substantiality of the portion used in relation to the copyrighted work as a whole; and the effect of
					the use upon the potential market for or value of the copyrighted work.”</Quote>
				</Paragraph>
				<Paragraph>
					The “purpose and character of the use” of the work essentially asks how you will be using the copyrighted source in your video and if the video is transformative.
					Are you profiting from the use of the video or is the video made for non-profit? While making money off your piece of work will not automatically subject your work
					to not be classified as Fair Use, non-profit uses of Fair Use are more likely to be favored in courts, or if non-favored factors are heavily paired with other
					favored factors. Additionally, how are you using the video: for criticism, news reporting, or for education? 
				</Paragraph>
				<Paragraph>
					Next is the <Quote>“nature of the copyrighted work”</Quote>. In short, how is the copyrighted work presented? Is it factual or fiction? Because the circulation of factual information
					generally benefits the public, the use of copyrighted materials for works of fact are usually favored and can be copied for news reporting and educational use.
					While fictional works can be justified under Fair Use, it can negatively impact your case if not attentive to other pillars of Fair Use. 
				</Paragraph>
				<Separator />
				<Paragraph>
					Another factor is the <Quote>“the amount and substantiality of the portion used in relation to the copyrighted work as a whole”</Quote>. Using most, if not all, of the copyrighted work
					in your project is almost always frowned upon, so, using the most important highlights of the copyrighted work is usually in the best interest of the artists.
					However, it is important to factor in how substantial the used work is to the original. Using 90 of a 100-word poem or song will likely be flagged as copyright infringement
					compared to using 90 of a 100,000-word essay. However, if the 90 words of that 100,000-word essay is the “heart” of the original work, it can be seen as infringing on their copyright.
				</Paragraph>
				<Paragraph>
					The last of the four factors is the <Quote>“effect of the use upon the potential market for or value of the copyrighted work”</Quote>, which equates to how will the new work of art can affect
					the income or market of the original? In short, does the work claiming Fair Use act as a substitute on the market? If I take the entirety of a Superbowl game and give little
					commentary in a video, that may serve as a direct substitute for the original work which strips income from the copyrighted work.
				</Paragraph>
				<Paragraph>
					Lastly, one last factor to consider is how transformative is your work to copyrighted work. Transformative use is a somewhat recent concept in Copyright law, which asks how the original work has been transformed into a new work, with a new personality, a different purpose, and for a different audience perhaps. Using the work and adding next to nothing to that work is plain copyright infringement, so making sure your works has a different purpose and character than the original helps your case in any potential lawsuit. 
				</Paragraph>
				<Separator />
				<Paragraph>
					Now that you understand the importance of Fair Use and know how to differentiate your work to avoid potential lawsuits, let us look at a lawsuit that started on YouTube that has and will influence content creation for years to come.
				</Paragraph>
				<Paragraph>
					Ethan and Hila Klein, better known as <Highlight>H3H3</Highlight> on YouTube, are content creators on the platform that gained prominence in mid twenty-tens for their commentary on other videos, comedy sketches, and, most importantly, reaction videos, one of which led to a lawsuit in 2017. The lawsuit was triggered after the Klein’s made a reaction video to another YouTuber, named <Highlight>Matt Hosseinzadeh</Highlight>, for their <Quote>“cringey”</Quote> pickup artistry videos. The video is fairly simple: the Kleins would watch parts of the video and add humor by making jokes and mocking the video. According to the lawsuit, the Kleins’ fourteen-minute video used roughly three minutes of the original video in their commentary, which pushed Hosseinzadeh to file a lawsuit.
				</Paragraph>
				<Paragraph>
					During this time on YouTube, this specific lawsuit decided the entirety of the commentary community as there was yet to be a lawsuit defending Fair Use that sprang up from the site, which if Fair Use was restricted, would impact hundreds, if not thousands, of channels and content creators as the genre is in just about every space on YouTube. This lawsuit decided the faith of the platform to a lot of creators.
				</Paragraph>
				<Paragraph>
					I am going to avoid the second part of the lawsuit, which specifically handled defamation, but the lawsuit was ruled by the courts as Fair Use, weighing their decision on each of the factors equally. For the purpose and character of the infringing work, it was seen as criticism and commentary for profit. Because the video was placed into a criticism/commentary category, it weighed in the Kleins’ favor.
				</Paragraph>
				<Separator />
				<Paragraph>
					However, in the second factor, the Courts found that the original work is of creative nature as it was purely fictional and scripted, yet the Kleins’ argued the opposite, resulting in a favoring towards Hoss.
				</Paragraph>
				<Paragraph>
					As for the runtime, the Kleins’ used three minutes and fifteen seconds of almost five- and half-minute video for their nearly fourteen-minute video. While much of the original work was used, the Kleins’ added around 10 minutes of additional commentary. The courts ruled the factor to be neutral as <Quote>“a great deal of plaintiff's work was copied, but such copying was plainly necessary to the commentary and critique.”</Quote>
				</Paragraph>
				<Paragraph>
					Lastly, the market substitute of the Kleins’ video for Hoss’ was not the case. For one to watch the mocking commentary of the original video by H3H3 would have a completely different experience than watching the pickup artist’s video.
				</Paragraph>
				<Paragraph>
					All in all, the Kleins’ escaped the lawsuit victorious as their video was seen as “quintessential criticism and comment” and landed a huge victory for the online commentary community. Since then, according to Casetext.com, the Kleins’ lawsuit has been cited in 15 federal lawsuits. The H3 lawsuit, and Fair Use on the platform, is routed in American history. YouTube as a platform is changing the world as we know it. Many people still see the platform as another social media website, but the fact that an ordinary YouTuber’s commentary will and has influenced Fair Use law for the next foreseeable future is insane to think about.
				</Paragraph>
			</article>
		</div>
	)
}

type SeparatorProps = Omit<ComponentProps<'span'>, 'children'>
const Separator = ({ ...props }: SeparatorProps) => {
	return (
		<span className="my-4" {...props}>
			<div className='h-[2px] w-1/4 bg-stone-300 flex mx-auto'></div>
		</span>
	)
}

type HighlightProps = ComponentProps<'mark'>
const Highlight = ({children, ...props}: HighlightProps) => {
	return (
		<span className='mx-1 px-1 font-semibold bg-yellow-300 text-stone-800' {...props}>
			{children}
		</span>
	)
}

type QuoteProps = ComponentProps<'q'>
const Quote = ({children}: QuoteProps) => {
	return (
		<span className="italic font-light text-stone-600">{children}</span>
	)
}

type ParagraphProps = ComponentProps<'p'>
const Paragraph = ({ children, className }: ParagraphProps) => {
	return (
		<p className={twMerge("indent-8 text-justify font-sans", className)}>
			{children}
		</p>
	)
}
