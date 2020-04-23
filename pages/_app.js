// top-level component which will be common across all the different pages

import '../styles/global.css'

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}