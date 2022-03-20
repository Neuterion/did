import Link from 'next/link'

import { useEffect } from 'react'

import styles from '../styles/Home.module.css'
import z from '../styles/Navbar.module.css'

export default function Navbar() {
    function openMobileMenu() {
        const menu = document.getElementById("mobile-menu");
        menu.classList.toggle("hidden");
        menu.classList.toggle("flex");
        menu.classList.toggle("flex-col");
    }

    useEffect(() => {
        window.addEventListener("resize", () => {
            const menu = document.getElementById("mobile-menu");
            if (window.innerWidth > 639 && menu.classList.contains("hidden") === false) {
                menu.classList.toggle("hidden");
                menu.classList.toggle("flex");
                menu.classList.toggle("flex-col");
            }
        })
    })

    return (
        <>
            <nav className={`${styles.did_normal_font} items-center py-2 bg-yellow-200 sticky`}>
                {/* pc menu */}
                <div className={`flex justify-between px-3 2xl:py-4 text-lg 2xl:text-3xl items-center`}>
                    <div className="flex">
                        <Link href="/">
                            <a className="px-3 2xl:px-5 mx-1 2xl:mx-2 py-1 flex items-center rounded-md hover:bg-black hover:text-yellow-200 transition duration-150">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 2xl:h-8 2xl:w-8" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                </svg>
                            </a>
                        </Link>
                        <Link href="/acara">
                            <a className="px-3 2xl:px-5 mx-1 2xl:mx-2 py-1 hidden sm:flex rounded-md hover:bg-black hover:text-yellow-200 transition duration-150">
                                Lomba & Talkshow
                            </a>
                        </Link>
                        <Link href="/koleksi">
                            <a className="px-3 2xl:px-5 mx-1 2xl:mx-2 py-1 hidden sm:flex rounded-md hover:bg-black hover:text-yellow-200 transition duration-150">
                                Koleksi
                            </a>
                        </Link>
                        <a href="https://forms.gle/capcMNwPAD7ebwxs7" target="_blank" className="px-3 2xl:px-5 mx-1 2xl:mx-2 py-1 hidden sm:flex rounded-md hover:bg-black hover:text-yellow-200 transition duration-150">
                            Daftar
                        </a>
                    </div>
                    
                    {/* mobile menu btn */}
                    <div className="flex sm:hidden px-2 py-1 rounded-md hover:bg-black hover:text-yellow-200 transition duration-150">
                        <button id="mobile-menu-btn" onClick={openMobileMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* mobile menu */}
                <div id="mobile-menu" className="hidden text-lg space-y-1 pt-3">
                    <div>
                        <Link href="/">
                            <a className="ml-5 px-2 py-0.5 my-0.5 rounded-md hover:bg-black hover:text-yellow-200 transition duration-150">
                                Lomba & Talkshow
                            </a>
                        </Link>
                    </div>
                    <div>
                        <Link href="/koleksi">
                            <a className="ml-5 px-2 py-0.5 my-0.5 rounded-md hover:bg-black hover:text-yellow-200 transition duration-150">
                                Koleksi
                            </a>
                        </Link>
                    </div>
                    <div>
                        <a href="https://forms.gle/capcMNwPAD7ebwxs7" className="ml-5 px-2 py-0.5 my-0.5 rounded-md hover:bg-black hover:text-yellow-200 transition duration-150">
                            Daftar
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}
