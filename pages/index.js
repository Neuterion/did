import { useInView } from 'react-intersection-observer'

import Image from 'next/image'

import title from '../public/logos/did-title2.png'

export default function Home() {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
  })

  return (
    <main className="flex flex-col justify-center text-white break-all">
      <div className="flex flex-col items-center justify-center">
        <div ref={ref} className={`flex flex-col items-center header_slide_in ${inView ? "appear" : ""}`}>
          <div className="flex flex-col items-center w-1/2 h-1/2 object-cover py-2">
            <Image src={title} alt="Dreaming in Daylight"/>
          </div>
          <h4 className="w-[100%] max-w-[90ch] font-jost text-xs md:text-lg xs:break-normal text-center">
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
    threshold: 0.85,
    triggerOnce: true,
  })
  const { ref: Koleksi, inView: KoleksiInView, entry: KoleksiEntry } = useInView({
    threshold: 0.85,
    triggerOnce: true,
  })

  return (
    <section id="cards" className="grid justify-items-center gap-8 mt-8 grid-cols-[repeat(auto-fill,minmax(240px,1fr))] grid-rows-[(minmax(200px,240px))] px-8 xs:break-normal text-white">
      <div ref={Drawry} className={`flex did_slide_in ${DrawryInView ? "appear" : ""}`}>
        <div className="flex-auto flex flex-col items-center text-center">
          <div className="w-fit p-3 bg-black rounded-lg bg-gradient-to-tr from-[#42275a] to-[#734b6d]">
            <i className="fa-solid fa-palette fa-2xl"></i>
          </div>
          <h1 className="flex justify-center items-center font-fraunces text-4xl font-bold">
            Draw From A Story
          </h1>
          <p className="flex items-center px-2 pt-1 font-jost">
            Gambar apa yang kamu imajinasikan saat membaca buku, sastra atau mendengarkan lagu!
          </p>            
        </div>
      </div>

      <div ref={Photo} className={`flex did_slide_in ${PhotoInView ? "appear" : ""}`}>
          <div className="flex-auto flex flex-col items-center text-center">
            <div className="w-fit p-3 bg-black rounded-lg bg-gradient-to-tr from-[#61045f] to-[#aa076b]">
              <i className="fa-solid fa-camera-retro fa-2xl"></i>
            </div>
            <h1 className="flex justify-center items-center font-fraunces text-4xl font-bold">
              Insight In Photogyart
            </h1>
            <p className="flex items-center px-2 pt-1 font-jost">
              Ambil sebuah foto lalu deskripsikan apa yang kamu imajinasikan dalam (mengambil/melihat) foto tersebut!
            </p>            
          </div>
      </div>

      <div ref={Exhibition} className={`flex did_slide_in ${ExhibitionInView ? "appear" : ""}`}>
          <div className="flex-auto flex flex-col items-center text-center">
            <div className="w-fit p-3 bg-black rounded-lg bg-gradient-to-tr from-[#a40606] to-[#A7631B]">
              <i className="fa-solid fa-images fa-2xl"></i>
            </div>
            <h1 className="flex justify-center items-center font-fraunces text-4xl font-bold">
              Dissolved Exhibition
            </h1>
            <p className="flex items-center px-2 pt-1 font-jost">
              Pameran yang berisikan karya-karya peserta lomba, serta siswa/i SMP di Jakarta Selatan yang ingin menampilkan lukisan maupun foto karyanya.
            </p>            
          </div>
      </div>

      <div ref={Koleksi} className={`flex did_slide_in ${KoleksiInView ? "appear" : ""} justify-self-center`}>
          <div className="flex-auto flex flex-col items-center text-center">
            <div className="w-fit p-3 bg-black rounded-lg bg-gradient-to-tr from-[#0c094b] to-[#599ae6]">
              <i className="fa-solid fa-images fa-2xl"></i>
            </div>
            <h1 className="flex justify-center items-center font-fraunces text-4xl font-bold">
              Koleksi
            </h1>
            <p className="flex items-center px-2 pt-1 font-jost">
              Berisi gambar-gambar hasil imajinasi anggota-anggota Drawing Club di SMPN 115.
            </p>            
          </div>
      </div>
    </section>
  )
}
