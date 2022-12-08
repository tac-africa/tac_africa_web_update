import ReactMarkdown from 'react-markdown'
import Head from "next/head";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { getDatabase, getSingleBlogPostBySlug } from "../../lib/notion";
import styles from '../../styles/Home.module.css'

const databaseId = process.env.NOTION_BLOG_DATABASE_ID || ""

// TEXT START
export const Text = ({ text } ) => {
  if (!text) {
    return null;
  }
  return text.map((value ) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <span
        className={[
          bold ? `${styles.bold } text-main_blue`: "",
          code ? styles.code : "",
          italic ? styles.italic : "",
          strikethrough ? styles.strikethrough : "",
          underline ? styles.underline : "",
        ].join(" ")}
        style={color !== "default" ? { color } : {}}
      >
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    );
  });
};

const renderNestedList = (block ) => {
  const { type } = block;
  const value = block[type];
  if (!value) return null;

  const isNumberedList = value.children[0].type === "numbered_list_item";

  if (isNumberedList) {
    return <ol>{value.children.map((block  ) => renderBlock(block))}</ol>;
  }
  return <ul>{value.children.map((block  ) => renderBlock(block))}</ul>;
};

const renderBlock = (block  ) => {
  const { type, id } = block;
  const value = block[type];


  switch (type) {
    case "paragraph":
      return (
        <p className="pb-4">
          <Text text={value.rich_text} />
        </p>
      );
    case "heading_1":
      return (
        <h1 className="pb-2 text-main_blue">
          <Text text={value.rich_text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2 className="pb-2 text-main_blue">
          <Text text={value.rich_text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3 className="pb-2 text-main_blue">
          <Text text={value.rich_text} />
        </h3>
      );
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li>
          <Text text={value.rich_text} />
          {!!value.children && renderNestedList(block)}
        </li>
      );
    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
            <Text text={value.rich_text} />
          </label>
        </div>
      );
    case "toggle":
      return (
        <details>
          <summary>
            <Text text={value.rich_text} />
          </summary>
          {value.children?.map((block  ) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </details>
      );
    case "child_page":
      return <p>{value.title}</p>;
    case "image":
      const src =
        value.type === "external" ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure className="py-6">
          <img src={src} alt={caption} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );
    case "divider":
      return <hr key={id} />;
    case "quote":
      return <blockquote key={id}>{value.rich_text[0].plain_text}</blockquote>;
    case "code":
      return (
        <pre className={styles.pre}>
          <code className={styles.code_block} key={id}>
            {value.rich_text[0].plain_text}
          </code>
        </pre>
      );
    case "file":
      const src_file =
        value.type === "external" ? value.external.url : value.file.url;
      const splitSourceArray = src_file.split("/");
      const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
      const caption_file = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure>
          <div className={styles.file}>
            📎{" "}
            <Link href={src_file} passHref>
              {lastElementInArray.split("?")[0]}
            </Link>
          </div>
          {caption_file && <figcaption>{caption_file}</figcaption>}
        </figure>
      );
    case "bookmark":
      const href = value.url;
      return (
        <a href={href} target="_brank" className={styles.bookmark}>
          {href}
        </a>
      );
    default:
      return `❌ Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
};

// TEXT END


// const CodeBlock = ({ language, codestring }) => {
// return (
//     <SyntaxHighlighter language={language} style={vscDarkPlus} PreTag="div">
//         {codestring}
//     </SyntaxHighlighter>
// )
// }
const Post = ({ post }) => {
  console.log(post[0].properties.Name.title[0].plain_text)
  if(!post) return <h1>No posts</h1>
  return (
      <section className={styles.container}> 
        <Head>
        <title>{post[0].properties.Name.title[0].plain_text}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h3>{post[0].properties.Name.title[0].plain_text}</h3>
        {/* <span>{post.metadata.date}</span>
        <p style={{color: "gray"}}>{post.metadata.tags.join(', ')}</p>
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
        }}>{post.markdown}</ReactMarkdown> */}
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
  const posts = await getDatabase(databaseId, 'news')
  const paths = posts.map(({ slug }) => ({ params: { slug: `${slug}` } }));
  return {
    paths,
    fallback: true,
  };
};

export default Post;