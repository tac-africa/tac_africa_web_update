import { Fragment } from "react";
import Head from "next/head";
import { getDatabase, getPage, getBlocks } from "../../lib/notion";
import Link from "next/link";
// import { databaseId } from "./index.js";
import styles from "../../styles/post.module.css";
import Button from "../../components/button/Button";


const databaseId: string = process.env.NOTION_BLOG_DATABASE_ID || ""


export const Text = ({ text } : any) => {
  if (!text) {
    return null;
  }
  return text.map((value : any) => {
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

const renderNestedList = (block : any) => {
  const { type } = block;
  const value = block[type];
  if (!value) return null;

  const isNumberedList = value.children[0].type === "numbered_list_item";

  if (isNumberedList) {
    return <ol>{value.children.map((block : any ) => renderBlock(block))}</ol>;
  }
  return <ul>{value.children.map((block : any ) => renderBlock(block))}</ul>;
};

const renderBlock = (block : any ) => {
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
          {value.children?.map((block : any ) => (
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

export default function Post({ page, blocks } : any) {
  if (!page || !blocks) {
    return <div />;
  }
  return (
    <div>
      <Head>
        <title>{page.properties.Name.title[0].plain_text}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <article className={`${styles.container}`}>
        <h1 className={`${styles.name} text-main_blue mt-6`}>
          <Text text={page.properties.Name.title} />
        </h1>
        <section>
          {blocks.map((block : any ) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
          <Link href="/" className={styles.back}>
            <Button text={' ← Go home'} />
          </Link>
        </section>
      </article>
    </div>
  );
}

export const getStaticPaths = async () => {
  const database = await getDatabase(databaseId, 'blog');
  return {
    paths: database.map((page : any) => ({ params: { id: page.id } })),
    fallback: true,
  };
};

export const getStaticProps = async (context : any) => {
  const { id } = context.params;
  const page = await getPage(id);
  const blocks = await getBlocks(id);

  // Retrieve block children for nested blocks (one level deep), for example toggle blocks
  // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  const childBlocks = await Promise.all(
    blocks
      .filter((block : any ) => block.has_children)
      .map(async (block : any ) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        };
      })
  );
  const blocksWithChildren = blocks.map((block : any ) => {
    // Add child blocks if the block should contain children but none exists
    if (block.has_children && !block[block.type].children) {
      block[block.type]["children"] = childBlocks.find(
        (x : any) => x.id === block.id
      )?.children;
    }
    return block;
  });

  return {
    props: {
      page,
      blocks: blocksWithChildren,
    },
    revalidate: 1,
  };
};
