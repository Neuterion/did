import { useInView } from 'react-intersection-observer'

import Image from 'next/image'
import Link from 'next/link'

import title from '../public/logos/did-title2.png'

export default function Home() {
  {/* inter-obsrv */}
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
  })

  return (
    <main className="flex flex-col justify-center text-white break-all">
      <div className="flex flex-col items-center justify-center">
        {/* header */}
        <div ref={ref} className={`flex flex-col items-center did_slide_in ${inView ? "appear" : ""}`}>
          <div className="flex flex-col items-center w-1/2 h-1/2 object-cover py-2">
            <Image src={title} alt="Dreaming in Daylight"/>
          </div>
          <h4 className="px-4 font-jost sm:text-lg text-center">
            Dimana kemampuan menggambar maupun fotografi menyatu dengan kemampuan berimajinasi.
          </h4>
        </div>
        <EventCards/>
      </div>
    </main>
  )
}

function EventCards() {
  {/* inter-obsrv for each card --> VERY BAD PRACTICE; still searching for the solution */}
  const { ref: Drawry, inView: DrawryInView, entry: DrawryEntry } = useInView({
    threshold: 0.85,
    triggerOnce: true,
  })
  const { ref: Photo, inView: PhotoInView, entry: PhotoEntry } = useInView({
    threshold: 0.85,
    triggerOnce: true,
  })
  const { ref: Koleksi, inView: KoleksiInView, entry: KoleksiEntry } = useInView({
    threshold: 0.85,
    triggerOnce: true,
  })

  return (
    <section id="cards" className="grid justify-items-center gap-8 mt-8 grid-cols-[repeat(auto-fill,minmax(240px,1fr))] grid-rows-[(minmax(200px,240px))] px-8 xs:break-normal text-white">
      {/* draw from a story */}
      <div ref={Drawry} className={`flex did_slide_in ${DrawryInView ? "appear" : ""} rounded-lg bg-gradient-to-tr from-[#42275a] to-[#734b6d]`}>
        <div className="flex-auto flex flex-col justify-center items-center px-3 pt-1 pb-3 text-center">
          <div className="w-fit p-3">
            <i className="fa-solid fa-palette fa-2xl"></i>
          </div>
          <h1 className="flex justify-center items-center font-fraunces text-4xl font-bold">
            Draw From A Story
          </h1>
          <p className="flex items-center px-2 pt-1 font-jost">
            Gambar apa yang kamu imajinasikan saat membaca buku, sastra atau mendengarkan lagu!
          </p>
          <Link href="/drawry" passHref>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mt-2 hover:text-yellow-300 transition duration-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </Link>
        </div>
      </div>

      {/* insight in photogyart */}
      <div ref={Photo} className={`flex did_slide_in ${PhotoInView ? "appear" : ""} rounded-lg bg-gradient-to-tr from-[#61045f] to-[#aa076b]`}>
        <div className="flex-auto flex flex-col justify-center items-center px-3 pt-1 pb-3 text-center">
          <div className="w-fit p-3">
            <i className="fa-solid fa-camera-retro fa-2xl"></i>
          </div>
          <h1 className="flex justify-center items-center font-fraunces text-4xl font-bold">
            Insight In Photogyart
          </h1>
          <p className="flex items-center px-2 pt-1 font-jost">
            Ambil sebuah foto lalu deskripsikan apa yang kamu imajinasikan dalam (mengambil/melihat) foto tersebut!
          </p>
          <Link href="/photogyart" passHref>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mt-2 hover:text-yellow-300 transition duration-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </Link>
        </div>
      </div>

      {/* our collection */}
      <div ref={Koleksi} className={`flex did_slide_in ${KoleksiInView ? "appear" : ""} rounded-lg bg-gradient-to-tr from-[#0c094b] to-[#599ae6]`}>
        <div className="flex-auto flex flex-col justify-center items-center px-3 pt-1 pb-3 text-center">
          <div className="w-fit p-3">
            <i className="fa-solid fa-images fa-2xl"></i>
          </div>
          <h1 className="flex justify-center items-center font-fraunces text-4xl font-bold">
            Koleksi
          </h1>
          <p className="flex items-center px-2 pt-1 font-jost">
            Berisi gambar-gambar hasil imajinasi anggota-anggota Drawing Club di SMPN 115.
          </p>
          <Link href="/koleksi" passHref>
            <svg xmlns="http://www.w3.org/2000/svg" role="button" className="h-8 w-8 mt-2 hover:text-yellow-300 transition duration-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
