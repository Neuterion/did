import Image from 'next/image'

import font from '../styles/Home.module.css'
import styles from '../styles/Footer.module.css'

import instagram from '../public/logos/instagram.png'
import gmail from '../public/logos/gmail.png'

export default function Footer() {
    return (
      <footer className={`flex justify-center items-center pb-1 mt-8 mx-8 border-t border-opacity-50 border-t-gray-100`}>
        <h3 className={`mx-2 ${font.did_normal_font} text-xl text-white`}>
          Hubungi kami:
        </h3>
        <a href="https://www.instagram.com/drawingclub115/" target="_blank" className={`py-2 my-4 px-3 mx-2 flex items-center rounded-lg bg-gray-900 hover:bg-black transition duration-150`}>
          <Image src={instagram} width="30px" height="30px" className="relative top-[3px]" alt="instagram logo"></Image>
          <h3 className={`px-2 text-white font-bold`}>@drawingclub115</h3>
        </a>
        <a href="https://www.instagram.com/drawingclub115/" target="_blank" className={`py-2 my-4 px-3 mx-2 flex items-center rounded-lg bg-gray-900 hover:bg-black transition duration-150`}>
          <Image src={gmail} width="30px" height="30px" className="relative top-[3px]" alt="instagram logo"></Image>
          <h3 className={`px-2 text-white font-bold`}>drawingclubjkt115@gmail.com</h3>
        </a>
      </footer>
    )
  }