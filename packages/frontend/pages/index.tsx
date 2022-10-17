import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Stickers</title>
        <meta name="description" content="Some description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>

      <h1>Stickers home</h1>
    </div>
  )
}

export default Home
