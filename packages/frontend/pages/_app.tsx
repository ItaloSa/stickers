import { useEffect } from 'react';
import type { AppProps } from 'next/app'

import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    import('bootstrap/dist/js/bootstrap');
  },[])

  return <Component {...pageProps} />
}

export default MyApp
