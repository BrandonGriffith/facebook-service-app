import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'
import { Props } from '../components/Types'
import UserFeed from '../components/main_feed/UserFeed'
import { useState } from 'react'
import Widgets from '../components/Widgets'


const Home = (props: Props) => {
  if (!props.session) return <Login />
  const [updatePosts, setUpdatePosts] = useState<boolean>(false);
  return (
    <div className="h-screen overflow-y-hidden bg-slate-100">
      <Head>
        <title>Social Media Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className='flex'>
        <Sidebar />
        <UserFeed updatePosts={updatePosts} setUpdatePosts={setUpdatePosts} />
        <Widgets />
      </main>
    </div>
  )
}
export default Home

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);
  return {
    props: {
      session
    }
  }
}
