import Image from 'next/image'

import trimegah from '../public/logos/trimegah.jpg'

export default function Footer() {
  return (
    <footer className={`flex-[0_1_auto] flex flex-col pb-3 mt-6 space-y-2 md:space-y-0 break-all xs:break-normal [border-radius:0.75rem_0.75rem_0_0] bg-white justify-between items-center font-[Inter] text-black`}>
      <div className="flex flex-col items-center w-full pt-4">
        <h1 className="xs:text-xl">
          Disponsori oleh
        </h1>
        <a href="https://www.trimegah.com/id" target="_blank" rel="noreferrer">
          <Image src={trimegah} alt="Trimegah"/>
        </a> 
      </div>
      <div className="flex justify-between items-center w-full pt-4 px-6 border-t border-t-[#e5e5e6]">
        <a href="//www.dmca.com/Protection/Status.aspx?ID=8222e33b-20dc-44f3-a879-96b8dd0b5438" title="DMCA.com Protection Status" className="dmca-badge">
          <img src="https://images.dmca.com/Badges/dmca-badge-w100-5x1-08.png?ID=8222e33b-20dc-44f3-a879-96b8dd0b5438" alt="DMCA.com Protection Status"/>
        </a>
        <div className="flex justify-center">
          <a className="mx-2" href="https://www.instagram.com/dcxfg115/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram fa-2x"></i>
          </a>
          <button className="mx-2" onClick={() => alert("Hubungi kami: drawingclubjkt115@gmail.com")}>
            <i className="fa-regular fa-envelope fa-2x"></i>
          </button>          
        </div>
      </div>
    </footer>
  )
  }