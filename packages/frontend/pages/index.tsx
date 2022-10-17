import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '../components/Navbar'
import ProfileContainer from '../containers/Profile'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Stickers</title>
        <meta name="description" content="Some description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar/>
      <ProfileContainer />

    </div>
  )
}

export default Home
