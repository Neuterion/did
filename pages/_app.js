import Head from 'next/head'
import Layout from '../components/layout'
import Script from 'next/script'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Dreaming in Daylight</title>
        </Head>
        <Layout>
          <Script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"/>
          <Script src="https://kit.fontawesome.com/4ee6c4a9a2.js" crossOrigin="anonymous"/>
          <Component {...pageProps} />
        </Layout>
      </>
    )
}

export default MyApp
