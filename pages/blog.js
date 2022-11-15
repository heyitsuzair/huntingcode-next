import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "../styles/Blog.module.css";

const Blog = () => {
  return (
    <div className={styles.container}>
      <style jsx>
        {`
          h3 {
            font-size: 28px;
          }
        `}
      </style>
      <Head>
        <title>Blog</title>
        <meta
          name="description"
          content="A Blog Website Created By Muhammad Uzair To Practice Next JS. Made With <3 By UZAIR"
        />
        <meta name="keywords" content="hunting coder,blog,nextjs" />
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          <div>
            <div className="blogItem dummy">
              <Link href={"/blogpost/learn-js"}>
                <h3>How To Learn JavaScript</h3>
              </Link>
              <p>JavaScript Is The Web Language.</p>
            </div>
            <div className="blogItem">
              <h3>How To Learn JavaScript</h3>
              <p>JavaScript Is The Web Language.</p>
            </div>
            <div className="blogItem">
              <h3>How To Learn JavaScript</h3>
              <p>JavaScript Is The Web Language.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
