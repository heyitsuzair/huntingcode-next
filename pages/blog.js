import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import axios from "axios";
import { fetchBlogs } from "../utils/api";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchPosts = async () => {
    try {
      const { data } = await axios.get(fetchBlogs);
      setBlogs(data);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

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
        <div className={styles.grid}>
          {blogs.map((blog, index) => {
            return (
              <div key={index} className="blogItem">
                <Link href={`/blogpost/${blog.slug}`}>
                  <h3>{blog.title}</h3>
                </Link>
                <p>{blog.content.substr(0, 300)}...</p>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Blog;
