import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from './../src/header'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header isStartPage search=""/>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        
      </main>
    </div>
  )
}

export default Home
