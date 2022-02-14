import axios from "axios";
import Head from "next/head";
import { Featured, ProductList } from "../components";
import styles from "../styles/Home.module.css";

export default function Home({ productList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant App</title>
        <meta name="description" content="Pizza Restaurant App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <ProductList productList={productList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      productList: res.data,
    },
  };
};
