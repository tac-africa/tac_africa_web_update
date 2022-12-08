import Head from 'next/head'
import Link from 'next/link';
import { getDatabase } from '../../lib/notion';
import styles from '../../styles/Home.module.css'
export default function Home({posts}) {

  // console.log(posts[0].properties, '<---->')
  if(!posts) return <h1>No posts</h1>
  return (
    <div className={styles.container}>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Blog</h1>
        {posts.map((post, index) => (
          <section key={index} className={styles.card}>
            <div>
                <h2>
                  <Link href={`/blogTest/${post.properties.Slug.formula.string}`} className={styles.action} >
                  {post.title}
                  </Link>
                </h2>
                <div>
                    {post.date}
                </div>
            </div>
            <p>
              {post.description}
            </p>
          </section>
        ))}
      </main>
    </div>
  )
}

const databaseId = process.env.NOTION_BLOG_DATABASE_ID || ""

export const getStaticProps = async () => {
  const data = await getDatabase(databaseId, 'news')
  return {
    props: {
      posts: data,
    },
    revalidate: 60
  };
};