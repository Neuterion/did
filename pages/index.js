import { useInView } from 'react-intersection-observer'

import Image from 'next/image'

import title from '../public/logos/did-title2.png'

export default function Home() {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
  })

  return (
    <main className="flex-[1_1_auto] flex flex-col justify-center text-white break-all">
      <div className="flex flex-col items-center justify-center">
        <div ref={ref} className={`flex flex-col items-center header_slide_in ${inView ? "appear" : ""}`}>
          <div className="flex flex-col items-center w-1/2 h-1/2 object-cover py-2">
            <Image src={title} alt="Dreaming in Daylight"/>
          </div>
          <h4 className="w-[100%] max-w-[90ch] font-[Inter] text-xs md:text-lg xs:break-normal text-center">
            Dimana kemampuan menggambar maupun fotografi menyatu dengan kemampuan berimajinasi.
          </h4>        
        </div>
        <EventCards/>
      </div>
    </main>
  )
}

function EventCards() {
  const { ref: Drawry, inView: DrawryInView, entry: DrawryEntry } = useInView({
    threshold: 0.85,
    triggerOnce: true,
  })
  const { ref: Photo, inView: PhotoInView, entry: PhotoEntry } = useInView({
    threshold: 0.85,
    triggerOnce: true,
  })
  const { ref: Exhibition, inView: ExhibitionInView, entry: ExhibitionEntry } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  })

  return (
    <section id="cards" className="flex flex-col justify-center items-center xs:break-normal text-white">
      <div ref={Drawry} className={`flex items-center justify-end did_slide_in ${DrawryInView ? "appear" : ""} w-11/12 rounded-xl px-7 py-6 my-4 sm:my-6 bg-gradient-to-tr from-[#42275a] to-[#734b6d]`}>
          <div className="flex-[1_1_auto] flex flex-col justify-center">
            <h3 className={`font-[Jost,sans-serif] text-lg md:text-xl`}>
              LOMBA
            </h3>
            <h1 className={`font-[Fraunces,serif] text-4xl md:text-7xl font-bold`}>
              Draw From A Story
            </h1>
            <p className={`max-w-[95ch] py-1 px-2 mt-1.5 font-[Jost,sans-serif] text-xs md:text-lg rounded-lg`}>
              Gambar apa yang kamu imajinasikan saat membaca buku, sastra atau mendengarkan lagu!
            </p>            
          </div>
          <a href="">
            <svg role="button" xmlns="http://www.w3.org/2000/svg" className="h-11 w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>            
          </a>
      </div>

      <div ref={Photo} className={`flex items-center justify-end did_slide_in ${PhotoInView ? "appear" : ""} w-11/12 rounded-xl px-7 py-6 my-4 sm:my-6 bg-gradient-to-tr from-[#61045f] to-[#aa076b]`}>
          <div className="flex-[1_1_auto] flex flex-col justify-center">
            <h3 className={`font-[Jost,sans-serif] text-lg md:text-xl`}>
              LOMBA
            </h3>
            <h1 className={`font-[Fraunces,serif] text-4xl md:text-7xl font-bold`}>
              Photogyart
            </h1>
            <p className={`max-w-[95ch] py-1 px-2 mt-1.5 font-[Jost,sans-serif] text-xs md:text-lg rounded-lg`}>
              Ambil sebuah foto lalu deskripsikan apa yang kamu imajinasikan dalam (mengambil/melihat) foto tersebut!
            </p>            
          </div>
          <a href="">
            <svg role="button" xmlns="http://www.w3.org/2000/svg" className="h-11 w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>            
          </a>
      </div>

      <div ref={Exhibition} className={`flex items-center justify-end did_slide_in ${ExhibitionInView ? "appear" : ""} w-11/12 rounded-xl px-7 py-6 my-4 sm:my-6 bg-gradient-to-tr from-[#a40606] to-[#A7631B]`}>
          <div className="flex-[1_1_auto] flex flex-col justify-center">
            <h3 className={`font-[Jost,sans-serif] text-lg md:text-xl`}>
              PAMERAN
            </h3>
            <h1 className={`font-[Fraunces,serif] text-4xl md:text-7xl font-bold`}>
              Dissolved Exhibition
            </h1>
            <p className={`max-w-[95ch] py-1 px-2 mt-1.5 font-[Jost,sans-serif] text-xs md:text-lg rounded-lg`}>
              Pameran yang berisikan karya-karya peserta lomba, serta siswa/i SMP di Jakarta Selatan yang ingin menampilkan lukisan maupun foto karyanya.
            </p>            
          </div>
          <a href="">
            <svg role="button" xmlns="http://www.w3.org/2000/svg" className="h-11 w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>            
          </a>
      </div>
    </section>
  )
}
