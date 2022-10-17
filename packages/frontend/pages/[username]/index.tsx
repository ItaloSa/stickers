import type { NextPage } from 'next'
import Head from 'next/head'

const UserHome: NextPage = () => {
  return (
    <div>
      <Head>
        <title>User's home</title>
        <meta name="description" content="Some description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Users home</h1>
    </div>
  )
}

export default UserHome
