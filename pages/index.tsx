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
import OngoingProjects from '../components/priojects/ongoingProjects'
import Contact from '../components/contact'


const databaseId: string = process.env.NOTION_BLOG_DATABASE_ID || ""

export const getStaticProps : GetStaticProps = async () => {
  const news = await getDatabase(databaseId, 'news');
  const labs = await getDatabase(databaseId, 'labs');
  const projects = await getDatabase(databaseId, 'projects');

  return {
    props: {
      posts: news,
      labPosts: labs,
      projects
    }
  };
};


const Home: NextPage = ( { posts, labPosts, projects} : any ) => {

  return (
    <div className="">
     <LandingPage />
     <LatestNews posts={ posts } />
     <Labs posts={ labPosts }  />
     <OngoingProjects posts={ projects} />
     <Contact />
    </div>
  )
}

export default Home
