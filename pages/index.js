import Head from "next/head";
// import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="A Blog Website Created By Muhammad Uzair To Practice Next JS. Made With <3 By UZAIR"
        />
        <meta name="keywords" content="hunting coder,blog,nextjs" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href="/">Hunting Coder!</Link>
        </h1>
        <div className={styles.imgWrap}>
          {/* <Image
            src="/home.jpg"
            width={200}
            height={200}
            alt="Coding...."
            className={styles.myImg}
          /> */}
          <img
            src="/home.jpg"
            width={200}
            height={200}
            alt="Coding...."
            className={styles.myImg}
          />
        </div>

        <strong className={styles.description}>
          Hunting Developers Around World!
        </strong>

        {/* <div className={styles.grid}>
          <div>
            <h2>Popular Blogs</h2>
            <div className="blogItem dummy">
              <h3>How To Learn JavaScript</h3>
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
        </div> */}
      </main>
    </div>
  );
}
