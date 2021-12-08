import { getProviders, getSession, useSession } from 'next-auth/react'
import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'

export default function Home({ providers }) {
  const { data: session } = useSession()
  if (!session) return <Login providers={providers} />

  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Facebook</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />

      <main className='flex'>
        {/* sidebar */}
        <Sidebar />
        {/* feed */}
        <Feed />
        {/* Widgets */}
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  const session = await getSession(context)

  return {
    props: {
      providers,
      session,
    },
  }
}
