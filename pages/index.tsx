import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Labs from '../components/Labs'
import LandingPage from '../components/LandingPage'
import React, { useState, useEffect } from 'react'
import LatestNews from '../components/LatestNews'
//
import { getDatabase } from '../lib/notion'
import { GetStaticProps } from "next";


const databaseId: string = process.env.NOTION_BLOG_DATABASE_ID || ""

export const getStaticProps : GetStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};

const Home: NextPage = ( { posts } : any ) => {


  return (
    <div className="">
     <LandingPage />
     <LatestNews posts={posts} />
     <Labs posts={posts} />
    </div>
  )
}

export default Home
