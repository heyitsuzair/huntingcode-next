import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Blogpost.module.css";
import axios from "axios";
import * as fs from "node:fs";
import { fetchBlog } from "../../utils/api";

const Slug = ({ myBlog }) => {
  const [post, setPost] = useState(myBlog);

  const createMarkup = (content) => {
    return { __html: content };
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{post.title}</title>
        <meta
          name="description"
          content="A Blog Website Created By Muhammad Uzair To Practice Next JS. Made With <3 By UZAIR"
        />
        <meta name="keywords" content="hunting coder,blog,nextjs" />
      </Head>
      <main className={styles.main}>
        <h1>{post.title}</h1>
        <hr className={styles.hr} />
        <div
          className={styles.content}
          dangerouslySetInnerHTML={createMarkup(post.content)}
        ></div>
      </main>
    </div>
  );
};

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "how-to-learn-js" } },
      { params: { slug: "how-to-learn-next-js" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");
  console.log(myBlog);

  return {
    props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
  };
}

export default Slug;
