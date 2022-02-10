import Head from "next/head";
import Image from "next/image";
import { Featured } from "../components";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant App</title>
        <meta name="description" content="Pizza Restaurant App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
    </div>
  );
}
