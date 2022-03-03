import Head from 'next/head'
import styles from '../styles/Home.module.css'
import DefaultMeta from '../components/metadata'
import Navbar from '../components/navbar'

export default function Contacts() {
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
            <Navbar/>
            <main className="bg-indigo-600 text-center">
                <h1 className={`${styles.did_title_font} text-4xl text-white font-bold`}>Ada pertanyaan?</h1>
            </main>
        </>
    )
}