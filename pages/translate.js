import Head from 'next/head'
import Image from 'next/image'
import StartSearch from '../src/startSearch'
import Header from './../src/header'
import { useRouter } from 'next/router'
import Feed from '../src/feed'

export default function TranslatePage (){
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header isStartpage="false" search={router.query}/>
      <Feed />
    </div>
  )
}