import type { NextPage } from 'next'
import Head from 'next/head'

const Profile: NextPage = () => {
  return (
    <div>
      <Head>
        <title>User's profile</title>
        <meta name="description" content="Some description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Users profile</h1>
    </div>
  )
}

export default Profile
