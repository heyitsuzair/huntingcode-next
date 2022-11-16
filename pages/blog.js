import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import axios from "axios";
import * as fs from "node:fs";
import { fetchBlogs } from "../utils/api";
import InfiniteScroll from "react-infinite-scroll-component";

const Blog = ({ allBlogs, allCount }) => {
  const [blogs, setBlogs] = useState(allBlogs);
  const [count, setCount] = useState(2);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(fetchBlogs + (count + 2));
      setBlogs(data);
      setCount(count + 2);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <div className={styles.container}>
      <style jsx>
        {`
          h3 {
            font-size: 28px;
            text-align: center;
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
        <InfiniteScroll
          dataLength={blogs.length} //This is important field to render the next data
          next={fetchData}
          hasMore={allCount !== blogs.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className={styles.grid}>
            {blogs.map((blog, index) => {
              return (
                <div key={index} className={styles.blogItem}>
                  <Link href={`/blogpost/${blog.slug}`}>
                    <h3>{blog.title}</h3>
                  </Link>
                  <span style={{ textAlign: "center", marginBottom: "2rem" }}>
                    {blog.metaDesc}
                  </span>
                  <Link
                    href={`/blogpost/${blog.slug}`}
                    className="btn btn-primary"
                  >
                    See More
                  </Link>
                </div>
              );
            })}
          </div>
        </InfiniteScroll>

        {/* <div className={styles.grid}>
          {blogs.map((blog, index) => {
            return (
              <div key={index} className={styles.blogItem}>
                <Link href={`/blogpost/${blog.slug}`}>
                  <h3>{blog.title}</h3>
                </Link>
                <span style={{ textAlign: "center", marginBottom: "2rem" }}>
                  {blog.metaDesc}
                </span>
                <Link
                  href={`/blogpost/${blog.slug}`}
                  className="btn btn-primary"
                >
                  See More
                </Link>
              </div>
            );
          })}
        </div> */}
      </main>
    </div>
  );
};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let allCount = data.length;
  let myFile;
  let allBlogs = [];

  for (let index = 0; index < 3; index++) {
    const item = data[index];
    myFile = await fs.promises.readFile(`blogdata/${item}`, "utf-8");
    allBlogs.push(JSON.parse(myFile));
  }

  return {
    props: { allBlogs, allCount }, // will be passed to the page component as props
  };
}

export default Blog;
