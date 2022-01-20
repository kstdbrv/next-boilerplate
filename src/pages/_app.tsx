import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  // const dsfgdfghdf = 'sdgfdsgdsf'
  return (
    <>
      <Head>
        <title>Weather Forecast</title>
        <link
          rel='icon'
          type='icon/img'
          href='/icons/icon192.png'
          sizes='32x32'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <link rel='manifest' href='./site.manifest.json' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
