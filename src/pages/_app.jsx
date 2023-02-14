import './_app.css'
import Head from 'next/head'

export default function MyApp ({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="theme-color" content="#000000"/>
        <meta
          name="description"
          content="木材工房cloud9です。希少な木材を使用した高級アクセサリーを製作しているブランドです。"
        />
        <link rel="apple-touch-icon" href="/logo192.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <title>JUKEBOXXLONDON</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}