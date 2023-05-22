import Navbar, { NavBarLink } from '@/components/molecules/navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  
  const navLink:NavBarLink[]=[ 
    {
      ref:"channel"
    },
    {
      ref:"profile"
    }
  ]
  
  return (
    <div>

      <Navbar {...navLink}/>
      <Component {...pageProps} />
    
    </div>
  )
}
