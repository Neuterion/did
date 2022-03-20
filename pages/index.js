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
      <main className={`${styles.did_normal_font} flex flex-col items-center text-white`}>
        <div className={`${styles.img_title} py-4`}>
          <Image src={title} alt="Dreaming in Daylight" placeholder="blur"/>
        </div>
        <h4 className={`text-xs md:text-base pb-4 px-8 sm:px-32 text-center`}>
          Sebuah acara yang mengadakan lomba dan pameran seni di bidang menggambar, dan fotografi;
          bertema <span className="italic">daydreaming</span> yang diasosiasikan dengan kemampuan berimajinasi seorang diri dalam berfoto maupun menggambar.{" "}
          <span className="italic">Daydreaming in Daylight</span> dapat diikuti oleh seluruh siswa/i SMP di Jakarta Selatan.
        </h4>
        <div className={`t} py-3 text-center`}>
          <Drawings/>
        </div>
        <div>
          <button className="px-3 my-1 py-2 rounded-lg bg-opacity-25 bg-cyan-200 hover:bg-opacity-40 transition duration-100">
            <Link href="/koleksi">
              <a>
                Lihat selengkapnya
              </a>
            </Link>
          </button>
        </div>
      </main>

      <Footer/>
    </section>
  )
}
