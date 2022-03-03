import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import DefaultMeta from '../components/metadata'

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital@1&family=Jost:wght@500&display=swap" rel="stylesheet"/>

        <title>Dreaming in Daylight</title>
      </Head>

      {/* navbar */}
      <Navbar/>

      {/* main */}
      <HomeLayout/>
    </>
  )
}

function HomeLayout() {
  return (
    <>
      <div className="py-3 text-center bg-indigo-600">
        <div className={`${styles.did_title_font} text-white pt-28`}>
          <h1 className="font-bold text-4xl">
            Dreaming in
            <span className="block">Daylight</span>
          </h1>
        </div>
        <div className={`${styles.did_normal_font} pt-2 text-black pb-28`}>
          <h3>
            An artistic event by 115 JHS students.
          </h3>
          <button className="rounded-lg px-3 bg-indigo-500">
            <a href="/">
            Learn more
            </a>
          </button>
        </div>
      </div>
      <div className="py-3 bg-indigo-600">

      </div>
    </>
  )
}
