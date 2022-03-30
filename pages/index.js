import { useInView } from 'react-intersection-observer'

import Image from 'next/image'

import title from '../public/logos/did-title2.png'

export default function Home() {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
  })

  return (
    <main className="flex-[1_1_auto] font-[Jost,sans-serif] items-center text-white break-all">
      <div ref={ref} className={`flex flex-col items-center header_slide_in ${inView ? "appear" : ""}`}>
        <div className="w-1/2 h-1/2 object-cover py-2">
          <Image src={title} alt="Dreaming in Daylight" placeholder="blur"/>
        </div>
        <h4 className="w-[100%] max-w-[90ch] font-[Inter] text-xs xs:text-base xs:break-normal text-center">
          Dimana kemampuan menggambar maupun fotografi menyatu dengan kemampuan berimajinasi.
        </h4>        
      </div>

      <EventCards/>

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
    <section id="index" className="flex flex-col justify-center items-center xs:break-normal">
      <div ref={Drawry} className={`did_slide_in ${DrawryInView ? "appear" : ""} w-11/12 rounded-xl px-7 py-6 my-4 sm:my-6 bg-gradient-to-tr from-[#0c1d58] to-[#6e4c68]`}>
        <div className="xxs:border-r-2 pr-4 lg:pr-6 border-white transition-[border] duration-[90ms] ease-linear hover:border-r-8">
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

      <div ref={Photo} className={`did_slide_in ${PhotoInView ? "appear" : ""} w-11/12 rounded-xl px-7 py-6 my-4 sm:my-6 bg-gradient-to-tr from-[#2cb8b3] to-[#cc2dfd]`}>
        <div className="xxs:border-r-2 pr-4 lg:pr-6 border-white transition-[border] duration-[90ms] ease-linear hover:border-r-8">
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

      <div ref={Exhibition} className={`did_slide_in ${ExhibitionInView ? "appear" : ""} w-11/12 rounded-xl px-7 py-6 my-4 sm:my-6 bg-gradient-to-tr from-[#946466] to-[#f3d56c]`}>
        <div className="xxs:border-r-2 pr-4 lg:pr-6 border-white transition-[border] duration-[90ms] ease-linear hover:border-r-8">
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
