import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Drawings from '../components/drawings'

import styles from '../styles/Home.module.css'
import title from '../public/logos/did-title2.png'

export default function Home() {
  return (
    <>
        {/* navbar */}
        <Navbar/>

        {/* main w/ footer */}
        <Main/>
    </>
  )
}

function Main() {
  return (
    <section id="home">
      <main className={`flex flex-col font-[Jost,sans-serif] items-center text-white`}>
        <div className={`w-1/2 h-1/2 object-cover py-4`}>
          <Image src={title} alt="Dreaming in Daylight" placeholder="blur"/>
        </div>
        <h4 className={`text-xs md:text-base 2xl:text-lg pb-4 px-8 sm:px-32 2xl:px-96 text-center`}>
          Sebuah acara yang mengadakan lomba dan pameran seni di bidang menggambar, dan fotografi;
          bertema <span className="italic">daydreaming</span> yang diasosiasikan dengan kemampuan berimajinasi seorang diri dalam berfoto maupun menggambar.{" "}
          <span className="italic">Daydreaming in Daylight</span> dapat diikuti oleh seluruh siswa/i SMP di Jakarta Selatan.
        </h4>
        <div className={`py-2 text-center`}>
          <Drawings/>
        </div>
        <div className="mb-3 -mt-2 sm:-mt-1">
          <button className="px-3 py-2 rounded-lg bg-opacity-25 bg-cyan-200 hover:bg-opacity-40 transition duration-100">
            <Link href="/koleksi">
              <a className="2xl:text-lg">
                Lihat selengkapnya
              </a>
            </Link>
          </button>
        </div>

        <Drawry/>
        <Photogyart/>
        <Exhibition/>

      </main>

      <Footer/>
    </section>
  )
}

function Drawry() {
  return (
    <div className={`${styles.lomba_card} w-11/12 rounded-xl px-7 py-6 my-8`}>
      <div className="border-r-2 border-white">
        <h3 className={`font-[Jost,sans-serif] text-xl text-yellow-200`}>
          LOMBA
        </h3>
        <h1 className={`font-[Fraunces,serif] text-7xl font-bold -mt-1 text-[#EFEFEF]`}>
          Draw From A Story
        </h1>
        <p className={`inline-block py-1 px-2 mt-1.5 -ml-1 font-[Jost,sans-serif] text-sm bg-[#91C7C9] bg-opacity-50 rounded-lg`}>
          Gambar apa yang kamu imajinasikan saat membaca buku, sastra atau mendengarkan lagu!
        </p>
      </div>
    </div>
  )
}

function Photogyart() {
  return (
    <div className={`flex flex-row justify-end ${styles.lomba2_card} w-11/12 rounded-xl px-7 py-6 my-8`}>
      <div className="border-r-2 w-full border-white">
        <h3 className={`font-[Jost,sans-serif] text-xl text-yellow-200`}>
          LOMBA
        </h3>
        <h1 className={`font-[Fraunces,serif] text-7xl font-bold -mt-1 text-[#EFEFEF]`}>
          Photogyart
        </h1>
        <p className={`inline-block py-1 px-2 mt-3 -mr-1 font-[Jost,sans-serif] text-sm bg-[#91C7C9] bg-opacity-50 rounded-lg`}>
          Ambil sebuah foto lalu deskripsikan apa yang kamu imajinasikan dalam (mengambil/melihat) foto tersebut!
        </p>
      </div>
    </div>
  )
}

function Exhibition() {
  return (
    <div className={`flex flex-row justify-end ${styles.exhibition_card} w-11/12 rounded-xl px-7 py-6 my-8`}>
      <div className="border-r-2 w-full border-white">
        <h3 className={`font-[Jost,sans-serif] text-xl text-yellow-200`}>
          PAMERAN
        </h3>
        <h1 className={`font-[Fraunces,serif] text-7xl font-bold -mt-1 text-[#EFEFEF]`}>
          Dissolved Exhibition
        </h1>
        <p className={`inline-block py-1 px-2 mt-3 -mr-1 font-[Jost,sans-serif] text-sm bg-[#91C7C9] bg-opacity-50 rounded-lg`}>
          Pameran yang berisikan karya-karya peserta lomba, serta siswa/i SMP di Jakarta Selatan yang ingin menampilkan gambar/foto karyanya.
        </p>
      </div>
    </div>
  )
}

