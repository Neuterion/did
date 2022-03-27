import Link from 'next/link'
import Image from 'next/image'

import Drawings from '../components/drawings'

import title from '../public/logos/did-title2.png'

export default function Home() {
  return <Main/>
}

function Main() {
  return (
    <main className={`flex-[1_1_auto] flex flex-col font-[Jost,sans-serif] items-center text-white break-all`}>
      <div className={`flex justify-center w-1/2 h-1/2 lg:w-[33%] lg:h-[33%] object-cover py-4`}>
        <Image src={title} alt="Dreaming in Daylight" placeholder="blur"/>
      </div>
      <h4 className={`text-md xs:break-normal px-8 sm:px-32 2xl:px-96 text-center`}>
        Dimana kemampuan menggambar maupun fotografi menyatu dengan kemampuan berimajinasi.
      </h4>

      <EventCards/>

    </main>
  )
}

function EventCards() {
  return (
    <section className="flex flex-col justify-center items-center xs:break-normal">
      <div className={`w-11/12 rounded-xl px-7 py-6 my-4 sm:my-6 bg-gradient-to-tr from-[#0c1d58] to-[#6e4c68]`}>
        <div className="xxs:border-r-2 pr-4 border-white">
          <h3 className={`font-[Jost,sans-serif] text-lg md:text-xl text-yellow-200`}>
            LOMBA
          </h3>
          <h1 className={`font-[Fraunces,serif] text-4xl md:text-7xl font-bold text-[#EFEFEF]`}>
            Draw From A Story
          </h1>
          <p className={`inline-block py-1 px-2 mt-1.5 font-[Jost,sans-serif] text-xs md:text-sm bg-[#91C7C9] bg-opacity-50 rounded-lg`}>
            Gambar apa yang kamu imajinasikan saat membaca buku, sastra atau mendengarkan lagu!
          </p>
        </div>
      </div>

      <div className={`w-11/12 rounded-xl px-7 py-6 my-4 sm:my-6 bg-gradient-to-tr from-[#2cb8b3] to-[#cc2dfd]`}>
        <div className="xxs:border-r-2 pr-4 border-white">
          <h3 className={`font-[Jost,sans-serif] text-lg md:text-xl text-yellow-200`}>
            LOMBA
          </h3>
          <h1 className={`font-[Fraunces,serif] text-4xl md:text-7xl font-bold text-[#EFEFEF]`}>
            Photogyart
          </h1>
          <p className={`inline-block py-1 px-2 mt-1.5 font-[Jost,sans-serif] text-xs md:text-sm bg-[#91C7C9] bg-opacity-50 rounded-lg`}>
            Ambil sebuah foto lalu deskripsikan apa yang kamu imajinasikan dalam (mengambil/melihat) foto tersebut!
          </p>
        </div>
      </div>

      <div className={`w-11/12 rounded-xl px-7 py-6 my-4 sm:my-6 bg-gradient-to-tr from-[#946466] to-[#f3d56c]`}>
        <div className="xxs:border-r-2 pr-4 border-white">
          <h3 className={`font-[Jost,sans-serif] text-lg md:text-xl text-yellow-200`}>
            PAMERAN
          </h3>
          <h1 className={`font-[Fraunces,serif] text-4xl md:text-7xl font-bold text-[#EFEFEF]`}>
            Dissolved Exhibition
          </h1>
          <p className={`inline-block py-1 px-2 mt-1.5 font-[Jost,sans-serif] text-xs md:text-sm bg-[#91C7C9] bg-opacity-50 rounded-lg`}>
            Pameran yang berisikan karya-karya peserta lomba, serta siswa/i SMP di Jakarta Selatan yang ingin menampilkan gambar/foto karyanya.
          </p>
        </div>
      </div>
    </section>
  )
}
