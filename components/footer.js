import Image from 'next/image'
import Instagram from '../public/logos/instagram.png'

export default function Footer() {
    return (
      <footer className={`flex justify-around items-center pb-1 mx-8 border-t border-opacity-50 border-t-gray-100`}>
        <a href="https://www.instagram.com/drawingclub115/" target="_blank" className={`py-2 my-4 px-3 flex items-center rounded-lg bg-gray-900 hover:bg-black transition duration-150`}>
          <Image src={Instagram} width="30px" height="30px" className="relative top-[3px]" alt="instagram logo"></Image>
          <h3 className={`px-2 text-white font-bold`}>@drawingclub115</h3>
        </a>
      </footer>
    )
  }