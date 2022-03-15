import type { NextPage } from 'next'
import Head from 'next/head'
import Login from '../components/Login';

const Main: NextPage = () => {
  return (
    <>
      <Head>
        <title>OctoStats &#128025;</title>
        <meta name="description" content="A GitHub user stats visualizer built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Login />
    </>
  )
}

export default Main;
