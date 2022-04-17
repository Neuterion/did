import Image from 'next/image'

import trimegah from '../public/logos/test.jpg'

export default function Footer() {
  return (
    <footer className="flex flex-col pb-3 mt-6 space-y-2 md:space-y-0 break-all xs:break-normal rounded-t-xl bg-white justify-between items-center font-inter text-black">
      {/* sponsors */}
      <div className="flex flex-col items-center w-full pt-4">
        <h1 className="xs:text-xl">
          Disponsori oleh
        </h1>
        {/* Trimegah */}
        <a href="https://www.trimegah.com/id" target="_blank" rel="noreferrer">
          <Image src={trimegah} alt="Trimegah"/>
        </a> 
      </div>

      {/* social media */}
      <div className="flex flex-col-reverse xs:flex-row justify-between items-center w-full pt-4 px-6 border-t border-t-[#e5e5e6]">
        <p className="text-sm font-inter">
          Made with ❤️ by Farzan Akhtar
        </p>
        <div className="flex justify-center">
          {/* Instagram */}
          <a className="mx-2" href="https://www.instagram.com/dcxfg115/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram fa-2x"></i>
          </a>
          {/* Gmail */}
          <button className="mx-2" onClick={() => alert("Hubungi kami: drawingclubjkt115@gmail.com")}>
            <i className="fa-regular fa-envelope fa-2x"></i>
          </button>          
        </div>
      </div>
    </footer>
  )
  }