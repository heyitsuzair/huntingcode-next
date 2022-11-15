import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className={styles.mainnav}>
      <ul>
        <li
          className={`${styles.navLink} ${
            router.pathname === "/" && styles.navLinkActive
          }`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`${styles.navLink} ${
            router.pathname === "/blog" && styles.navLinkActive
          }`}
        >
          <Link href="/blog">Blog</Link>
        </li>
        <li
          className={`${styles.navLink} ${
            router.pathname === "/about" && styles.navLinkActive
          }`}
        >
          <Link href="/about">About</Link>
        </li>
        <li
          className={`${styles.navLink} ${
            router.pathname === "/contact" && styles.navLinkActive
          }`}
        >
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
