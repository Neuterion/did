import Link from 'next/link'

export default function Navbar() {
    {/* navbar w/ home btn only */}
    return (
        <nav className="flex flex-col xs:flex-row justify-center items-center xxs:px-1 xs:px-3 xxs:py-2 text-white bg-transparent">
            <Link href="/" passHref>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 xs:h-7 xs:w-7 hover:text-yellow-200 transition duration-75" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
            </Link>
        </nav>
    )
}
