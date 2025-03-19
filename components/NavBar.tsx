import Link from 'next/link';

export default function NavBar() {
    return (
        <div className="fixed w-screen h-12 z-10 top-0 bg-background opacity-70 dark:opacity-40">
            <div className="flex justify-end h-full mx-2 gap-0">
                <Link href="/" className="font-[eczar] text-4xl flex py-1.5 mr-auto">IS</Link>
                <Link href="/" className="h-full font-[eczar] hover:bg-gray-300 hover:text-black hover:opacity-80 items-center flex transition px-4">Home</Link>
                <Link href="/mission" className="h-full font-[eczar] hover:bg-gray-300 hover:text-black hover:opacity-80 items-center flex transition px-4">Mission</Link>
                <Link href="/stories" className="h-full font-[eczar] hover:bg-gray-300 hover:text-black hover:opacity-80 items-center flex transition px-4">Stories</Link>
                <Link href="/contact"  className="h-full font-[eczar] hover:bg-gray-300 hover:text-black hover:opacity-80 items-center flex transition px-4">Contact</Link>
            </div>
        </div>
    );   
}