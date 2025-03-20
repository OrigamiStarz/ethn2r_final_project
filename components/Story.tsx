import Image from 'next/image';
import imageIcon from '../public/image.svg';
import Link from 'next/link';

interface StoryProps {
    imageUrl?: string;
    title: string;
    description: string;
}

export default function Story({ imageUrl, title, description }: StoryProps) {
    return (
        <Link href="/stories" className="flex flex-col bg-white outline-1 outline-neutral-200 dark:outline-neutral-700 dark:bg-neutral-800 p-4 rounded-lg shadow-md m-4 w-11/12 sm:w-5/12 md:w-1/4 hover:shadow-[0px_4px_6px_0px_rgba(234,_179,_8,_0.5)] hover:scale-105 transition active:opacity-80">
                { imageUrl && (<Image src={imageUrl} alt={title} width={500} height={500} />) }
                { !imageUrl && (
                    <div className="flex justify-center bg-neutral-200 dark:bg-neutral-700">
                        <Image src={imageIcon} alt={title} width={300} height={300} className="invert-50 w-24 h-24 my-16" /> 
                    </div>
                )}


                <h1 className="font-[eczar] font-bold mt-2">{title}</h1>
                <p className="font-[eczar]">{description}</p>
        </Link>
    );
}