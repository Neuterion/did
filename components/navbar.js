import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className={`flex-[0_1_auto] flex flex-col xs:flex-row justify-center items-center xxs:px-1 xs:px-3 xxs:py-2 font-[Jost,sans-serif] text-lg 2xl:text-xl text-white bg-transparent`}>
            <a href="/" className="flex items-center px-1 xs:px-3 py-1 2xl:py-2 mx-1 2xl:mx-2 rounded-md hover:bg-blue-200 hover:bg-opacity-50 transition duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 xs:h-7 xs:w-7" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
            </a>
            <a href="/koleksi" className="flex px-1 xs:px-3 py-1 2xl:py-2 mx-1 2xl:mx-2 text-[16vw] xxs:text-[9vw] xs:text-lg rounded-md hover:bg-blue-200 hover:bg-opacity-50 transition duration-150">
                Koleksi
            </a>
        </nav>
    )
}
