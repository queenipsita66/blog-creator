import { Box, Button, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import getBlogCardsCollection from '../backend/blogCardsCollectionAPI'
import getBlogHeaderCollection from '../backend/blogHeaderCollectionAPI'
import HomePage from '../components/organisms/HomePage'
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  const blogHeader = await getBlogHeaderCollection();
  const blogCards = await getBlogCardsCollection("home-page");
  return {
    props: {
      blogHeader: blogHeader,
      blogCards: blogCards
    }
  }
}

export default function Home(props: any) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog Creator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HomePage {...props}/>
      </main>
    </div>
  )
}