import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Script from 'next/script';


import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"></Script>
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png"/>
      <link rel="manifest" href="favicon/site.webmanifest"/>
      <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="theme-color" content="#ffffff"></meta>
      
    <Component {...pageProps} />
  </>
  )
}
