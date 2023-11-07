import { PageHeader } from "@/components/PageHeader";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import { ComponentProps } from "react";
import { twJoin } from "tailwind-merge";

export default function Page() {
    return (
        <div className='flex flex-col gap-12'>
            <PageHeader 
                title="Musicians born here"
                subTitle="Some of the biggest artists started from the ground-up, right on the YouTube platform."
            />
            <div className='flex flex-row gap-2 items-start'>
                <div className='bg-[#c25e23] rounded-xl'>
                    <PlaylistAlbum src="https://i.scdn.co/image/ab67616d0000b273e6d489d359c546fea254f440" />
                    <div className='p-4 flex flex-col gap-4 text-white'>
                        <h2 className='text-xl'>Ed Sheeran</h2>
                        <p className='max-w-[30ch] text-sm'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem diam,
                            egestas at vehicula quis, molestie sed arcu. Proin ultricies cursus est vel pretium.
                            Donec cursus varius faucibus. Praesent id nisi sit amet risus sagittis pulvinar.
                            Aliquam cursus, nisl ac feugiat consequat, est velit vestibulum enim, id sagittis
                            magna purus sed dolor.
                        </p>
                        <div className='grid grid-cols-2 gap-4 pt-4 border-t border-[#89411A] border-dotted'>
                            <div className='flex flex-col gap-1'>
                                <span className='text-sm font-medium text-[#89411A]'>Monthly Listeners</span>
                                <span className='text-lg'>74.8M</span>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='text-sm font-medium text-[#89411A]'>Subscribers</span>
                                <span className='text-lg'>53.8M</span>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='text-sm font-medium text-[#89411A]'>Grammy Awards</span>
                                <span className='text-lg'>185</span>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='text-sm font-medium text-[#89411A]'>First Video</span>
                                <span className='text-lg'>April 22, 2010</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-1/2'>
                    {list.map((item, index) => (
                        <PlaylistItem
                            key={index}
                            num={index + 1}
                            songName={item.songName}
                            artistName={item.artistName}
                            views={item.views}
                            length={item.length}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

const list: Omit<PlaylistItemProps, 'num'>[] = [
    {
        songName: 'Yeah Right',
        artistName: 'Joji',
        views: '155M',
        length: '2:55',
    },
    {
        songName: "Here",
        artistName: 'Alessia Cara',
        views: '245M',
        length: '3:30'
    },
    {
        songName: "She Looks So Perfect",
        artistName: '5SOS',
        views: '317M',
        length: '3:39'
    },
    {
        songName: "The A-Team",
        artistName: 'Ed Sheeran',
        views: '365M',
        length: '4:50'
    },
    {
        songName: 'Can\'t Feel My Face',
        artistName: 'The Weeknd',
        views: '1.35B',
        length: '3:39'
    },
    {
        songName: 'Baby',
        artistName: 'Justin Bieber, ft. Ludacris',
        views: '1.5B',
        length: '3:20'
    },
]

list.sort((a, b) => {
    const aValue = parseFloat(a.views) * (a.views.includes('B') ? 1000 : 1);
    const bValue = parseFloat(b.views) * (b.views.includes('B') ? 1000 : 1);
    return bValue - aValue;
});

type ArtistCardProps = ComponentProps<'div'>
const ArtistCard = () => {

}

type PlaylistAlbumProps = ComponentProps<'div'> & {
    src: string,
}
const PlaylistAlbum = ({src}: PlaylistAlbumProps) => {
    return (
        <div className='group relative w-[350px] cursor-pointer'>
            <img src={src} className='w-full h-auto object-fill aspect-square rounded-xl' />
            <div className={twJoin(
                "absolute opacity-0",
                "top-1/2 left-1/2",
                "-translate-y-1/2 -translate-x-1/2 p-4",
                "rounded-full",
                "transition-opacity ease-in-out duration-100",
                "group-hover:opacity-100 group-hover:bg-slate-900/50"
            )}>
                <IconPlayerPlayFilled size={24} className='text-white' />
            </div>
        </div>
    )
}

type PlaylistItemProps = ComponentProps<'div'> & {
    num: number,
    songName: string,
    isCover?: boolean,
    artistName: string,
    views: string,
    length: string,
}
const PlaylistItem = ({num, songName, isCover = false, artistName, views, length}: PlaylistItemProps) => {
    return (
        <div className={twJoin(
            'flex flex-row justify-between items-center group',
            'pr-8 py-2',
            'rounded-md',
            'cursor-pointer',
            'transition-colors hover:bg-slate-100')}>
            <span className='flex flex-row items-center'>
                <span className='px-8 group-hover:text-red-600 transition-colors'>{num}</span>
                <span className='flex flex-col'>
                    <span className='flex flex-row gap-2 font-regular group-hover:text-red-600 transition-colors'>
                        {songName}
                        {isCover && <span className='text-slate-600'>(Cover)</span>}
                    </span>
                    <span className='text-slate-600'>{artistName}</span>
                </span>                      
            </span>
            <span className='flex flex-row gap-4 group-hover:text-red-600 transition-colors'>
                <span>{views}</span>
                <span>{length}</span>
            </span>
        </div>
    )
}
