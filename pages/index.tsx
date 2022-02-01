import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/header";
import styles from "../styles/Home.module.css";

type HomeProps = {
  products: any;
};

const Home: NextPage<HomeProps> = ({ products = [] }) => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.header_links}>
            <a href="index.tsx">Yomu</a>
            <a href="home.tsx">home</a>
            <a href="categories.tsx">categorias</a>
            <a href="cart.tsx">carrinho</a>
          </div>

          <div className={styles.header_user_container}>
            <div className={styles.user_icon}>
              <Image
                src="/images/user.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </div>
            <p className={styles.user_name}>laura silva</p>
          </div>
        </header>

        <main className={styles.main}>
          <div className={styles.filter_container}></div>
          <div className={styles.products_container}>
            <div className={styles.products}>
              {products.map((product: any) => (
                <div className={styles.books} key={product.id}>
                  <div className={styles.book_cover}>
                    <img
                      src={`https://covers.openlibrary.org/b/olid/${product.id}-M.jpg`}
                    />
                  </div>
                  <div className={styles.book_details}>
                    <div className={styles.details}>
                      <span className={styles.book_name}>{product.name}</span>
                      <span className={styles.book_author}>
                        {product.authors}
                      </span>
                      <span className={styles.book_price}>
                        $ {product.price}{" "}
                        <div className={`${styles.rating_stars} `}>
                          {product.rating}
                          <span
                            className={`fa fa-star ${styles.checked}`}
                          ></span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.promotion_container}></div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Laura Sansil
          </a>
        </footer>
      </div>
    </>
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
