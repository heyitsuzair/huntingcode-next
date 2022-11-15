import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/Blogpost.module.css";

const Slug = () => {
  const router = useRouter();

  const { slug } = router.query;

  return (
    <div className={styles.container}>
      <Head>
        <title>{slug}</title>
        <meta
          name="description"
          content="A Blog Website Created By Muhammad Uzair To Practice Next JS. Made With <3 By UZAIR"
        />
        <meta name="keywords" content="hunting coder,blog,nextjs" />
      </Head>
      <main className={styles.main}>
        <h1>Title Of The Page {slug}</h1>
        <hr className={styles.hr} />
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet in,
          blanditiis quaerat, soluta laborum qui aliquam eos exercitationem
          neque dolor non reiciendis, fugit cumque veniam quisquam? Libero
          praesentium veniam in. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nesciunt maxime in veritatis quo sed, voluptatibus
          minima. Eaque maiores incidunt fugiat voluptatum vero dolores
          voluptatem aperiam sed! Qui dicta amet suscipit ab, impedit esse rerum
          maxime sapiente vel nisi eligendi omnis.
        </div>
      </main>
    </div>
  );
};

export default Slug;
