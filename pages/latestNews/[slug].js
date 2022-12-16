import ReactMarkdown from 'react-markdown'
import Head from "next/head";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { getDatabase, getSingleBlogPostBySlug } from "../../lib/notion";
import styles from '../../styles/markdown-styles.module.css'


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
    <div className='w-10/12 mx-auto'>
      <section className='reactMarkdown' >
          <h2 className='text-main_blue font-bold mt-4 mb-8' style={{fontSize: '1.875rem', lineHeight: '2.25rem' }}>{post.metadata.title}</h2>
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
    </div>
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
  const posts = await getDatabase(databaseId, 'news')
  const paths = posts.map((post) => ({ params: {slug:`${post.properties.Slug.formula.string}`} }));
  return {
    paths,
    fallback: "blocking",
  };
};

export default Post;