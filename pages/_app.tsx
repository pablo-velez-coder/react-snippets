import '../styles/globals.css'
import 'antd/dist/antd.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import UiProvider from '../context/ui/uiContext'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <UiProvider>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </UiProvider>
  )
}

export default MyApp
