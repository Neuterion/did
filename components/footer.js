import Image from 'next/image'

import font from '../styles/Home.module.css'
import styles from '../styles/Footer.module.css'

import instagram from '../public/logos/instagram.png'
import gmail from '../public/logos/gmail.png'

export default function Footer() {
    return (
      <footer className={`flex flex-col space-y-2 md:flex-row md:space-y-0 justify-center items-center ${styles.footer} font-[Inter] text-white py-3 mt-8 border-t border-opacity-50 border-t-gray-100`}>
        <h3 className={`mx-2 ${font.did_normal_font} text-lg`}>
          Hubungi kami:
        </h3>
        <a href="https://www.instagram.com/dcxfg115/" target="_blank" className={`py-2 px-3 mx-2 flex items-center rounded-lg bg-gray-900 hover:bg-black transition duration-150`}>
          <Image src={instagram} width="30px" height="30px" layout="fixed" className="relative top-[3px]" alt="instagram logo"></Image>
          <h3 className={`px-2`}>@dcxfg115</h3>
        </a>
        <a className={`py-2 px-3 mx-2 flex items-center rounded-lg bg-gray-900 hover:bg-black transition duration-150`}>
          <Image src={gmail} width="30px" height="30px" layout="fixed" className="relative top-[3px]" alt="instagram logo"></Image>
          <h3 className={`px-2`}>drawingclubjkt115@gmail.com</h3>
        </a>
      </footer>
    )
  }