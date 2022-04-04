import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital@1&family=Jost:wght@500&family=Inter&display=swap" rel="stylesheet"/>
        <script src="https://kit.fontawesome.com/4ee6c4a9a2.js" crossorigin="anonymous"></script>
      </Head>
      <body>
        <Main/>
        <NextScript />
      </body>
    </Html>
  )
}