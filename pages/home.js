import Head from 'next/head'
import Link from 'next/link'

import Navbar from '../components/navbar'
import Drawings from '../components/drawings'
import Footer from '../components/footer'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital@1&family=Jost:wght@500&display=swap" rel="stylesheet"/>

        <title>Dreaming in Daylight</title>
      </Head>

      <body className="bg-indigo-600">
        {/* navbar */}
        <Navbar/>

        {/* main */}
        <Main/>
      </body>
    </>
  )
}

function Main() {
  return (
    <>
      <div className={`${styles.did_normal_font} py-3 text-center text-white`}>
        <div className={`${styles.did_title_font} pt-20`}>
          <h1 className="font-bold text-5xl">
            Dreaming in
            <span className="block">Daylight</span>
          </h1>
        </div>

        <div className={`py-4 px-8 sm:px-32`}>
          <h4>
          Sebuah acara yang mengadakan lomba dan pameran seni di bidang menggambar, dan fotografi;
          bertema <span className="italic">daydreaming</span> yang diasosiasikan dengan kemampuan berimajinasi seorang diri dalam berfoto maupun menggambar.{" "}
          <span className="italic">Daydreaming in Daylight</span> dapat diikuti oleh seluruh siswa/i SMP di Jakarta Selatan.
          </h4>
        </div>

        <Drawings/>

        <div>
          <button className="px-3 my-1 py-2 rounded-lg bg-opacity-25 bg-cyan-200 hover:bg-opacity-40 transition duration-100">
            <Link href="/">
              <a>
                Lihat selengkapnya
              </a>
            </Link>
          </button>
        </div>
      </div>

      <Footer/>
    </>
  )
}
