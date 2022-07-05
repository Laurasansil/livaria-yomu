import { NextPage } from "next";
import styles from "./index.module.css";

type BooksProps = {
  products: any;
  pages: number;
  category: String;
};

const Books: NextPage<BooksProps> = ({ products = [] }) => {
  const productsNode = () => {
    return (
      <div className={styles.container}>
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
                        <span className={`fa fa-star ${styles.checked}`}></span>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  return productsNode();
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

export default Books;
