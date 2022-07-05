import type { NextPage } from "next";
import Books from "../components/Books";
import { Layout } from "../components/Layout";
import { Navbar } from "../components/Navbar";
import { Product } from "../types/product";
import styles from "../styles/Home.module.css";
import { User } from "../types/user";

type HomeProps = {
  products: Product[];
};

const Home: NextPage<HomeProps> = ({ products }) => {
  return (
    <Layout>
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.filter_container}></div>
          <Books products={products} pages={10} category="Em Destaque" />
          <div className={styles.promotion_container}></div>
        </main>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const response = await fetch("https://backend.dev/products");
  const products = await response.json();

  return {
    props: {
      products,
    },
  };
}

export default Home;
