import styles from '../styles/Home.module.css'

export default function Navbar() {
    return (
        <nav className="flex flex-row justify-between items-center py-3 bg-yellow-200">
            {/* pc menu */}
            <div className={`${styles.did_normal_font} px-3 text-lg flex items-center`}>
                <a href="home" className="px-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                </a>
                <a href="/" className="px-4 hidden sm:flex">Lomba</a>
                <a href="/" className="px-4 hidden sm:flex">Talkshow</a>
                <a href="hubungi-kami" className="px-4 hidden sm:flex">Hubungi Kami</a>
            </div>
            <div className={styles.did_normal_font}>
                <a href="/" className="px-5 hidden sm:flex">Daftar</a>
            </div>

            {/* mobile menu btn */}
            <div className="flex sm:hidden px-4">
                <button id="mobile-menu-btn" onClick="openMobileMenu()">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>

            {/* mobile menu */}
            <div className="hidden space-y-1">
                <div>
                    <a href="/">Lomba</a>
                </div>
                <div>
                    <a href="/">Talkshow</a>
                </div>
                <div>
                    <a href="hubungi-kami">Hubungi Kami</a>
                </div>
                <div>
                    <a href="/">Daftar</a>
                </div>
            </div>
        </nav>
    )
}
