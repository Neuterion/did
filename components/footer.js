import Image from 'next/image'

import instagram from '../public/logos/instagram.png'
import gmail from '../public/logos/gmail.png'

export default function Footer() {
    return (
      <div className="flex-[0_1_auto] w-11/12 mx-auto break-all xs:break-normal">
        <footer className={`flex flex-col md:flex-row py-3 space-y-2 md:space-y-0 justify-center items-center font-[Inter] text-white border-t border-opacity-50 border-t-gray-100`}>
          <h3 className={`mx-2 text-xs xxs:text-sm sm:text-base`}>
            Hubungi kami:
          </h3>
          <a href="https://www.instagram.com/dcxfg115/" target="_blank" rel="noreferrer" className={`py-2 px-3 mx-2 flex justify-center items-center rounded-lg bg-gray-900 hover:bg-black transition duration-150`}>
            <Image src={instagram} width="20%" height="20%" alt="Instagram"></Image>
            <h3 className={`px-2 text-xs xxs:text-sm sm:text-base`}>@dcxfg115</h3>
          </a>
          <a className={`py-2 px-3 mx-2 flex justify-center items-center rounded-lg bg-gray-900 hover:bg-black transition duration-150`}>
            <Image src={gmail} width="20%" height="15%" alt="G-Mail"></Image>
            <h3 className={`px-2 text-xs xxs:text-sm sm:text-base`}>
              drawingclubjkt115<br className="hidden xsl:block sm:hidden"/>@gmail.com
            </h3>
          </a>
        </footer>        
      </div>

    )
  }