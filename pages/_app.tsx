import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/LayOut'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
