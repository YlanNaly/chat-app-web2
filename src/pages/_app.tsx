import '@/styles/globals.css'
import '@/styles/custom-style.css';
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


export default function App({ Component, pageProps }: AppProps) {
  
  
  
  return (
    <div>
      <Component {...pageProps} />    
    </div>
  )
}
