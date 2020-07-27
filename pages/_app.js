// top-level component which will be common across all the different pages

import '../styles/global.css'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}