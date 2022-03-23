import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Navbar() {
    return (
        <>
            <nav className={`sticky top-0 z-50 ${styles.did_normal_font} items-center py-2 bg-yellow-200 sticky`}>
                {/* pc menu */}
                <div className={`flex justify-around items-center px-3 text-lg 2xl:text-xl`}>
                    <div className="flex">
                        <Link href="/">
                            <a className="flex items-center px-3 py-1 2xl:py-2 mx-1 2xl:mx-2 rounded-md hover:bg-black hover:text-yellow-200 transition duration-150">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                </svg>
                            </a>
                        </Link>
                        <Link href="/koleksi">
                            <a className="flex px-3 py-1 2xl:py-2 mx-1 2xl:mx-2 rounded-md hover:bg-black hover:text-yellow-200 transition duration-150">
                                Koleksi
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
