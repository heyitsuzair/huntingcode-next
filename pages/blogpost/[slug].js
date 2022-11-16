import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Blogpost.module.css";
import axios from "axios";
import { fetchBlog } from "../../utils/api";

const Slug = ({ blogPost }) => {
  const [post, setPost] = useState(blogPost);

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
        <div className={styles.content}>{post.content}</div>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;

  const { data } = await axios.get(fetchBlog + slug);
  const blogPost = data;

  return {
    props: { blogPost }, // will be passed to the page component as props
  };
}

export default Slug;
