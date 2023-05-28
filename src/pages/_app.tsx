import Navbar from '@/components/molecules/navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }: AppProps) {
  
  
  
  return (
    <div>
      <Component {...pageProps} />    
    </div>
  )
}
