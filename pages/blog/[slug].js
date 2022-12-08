import ReactMarkdown from 'react-markdown'
import Head from "next/head";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { getDatabase, getSingleBlogPostBySlug } from "../../lib/notion";
import styles from '../../styles/Home.module.css'

const databaseId = process.env.NOTION_BLOG_DATABASE_ID || ""

const CodeBlock = ({ language, codestring }) => {
return (
    <SyntaxHighlighter language={language} style={vscDarkPlus} PreTag="div">
        {codestring}
    </SyntaxHighlighter>
)
}
const Post = ({ post }) => {
  if(!post) return <h1>No posts</h1>
  return (
      <section className={styles.container}> 
          <h2>{post.metadata.title}</h2>
        <ReactMarkdown
        components={{
            code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
                <CodeBlock
                codestring={String(children).replace(/\n$/, '')}
                language={match[1]}
                />
            ) : (
                <code className={className} {...props}>
                {children}
                </code>
            )
            }
        }}>{post.markdown}</ReactMarkdown>
      </section>
  );
};

export const getStaticProps = async ({ params }) => {


  const post = await getSingleBlogPostBySlug(databaseId, params.slug)
  return {
    props: {
      post,
    },
    revalidate: 60
  };
};

export const getStaticPaths = async () => {
  const posts = await getDatabase(databaseId, 'blog')
  const paths = posts.map((post) => ({ params: {slug:`${post.properties.Slug.formula.string}`} }));
  console.log(paths , '<---->')
  return {
    paths,
    fallback: "blocking",
  };
};

export default Post;