import styles from "index.module.css";

export const Book = () => {
  return (
    <div className={styles.books} key={product.id}>
      <div className={styles.book_cover}>
        <img
          src={`https://covers.openlibrary.org/b/olid/${product.id}-M.jpg`}
        />
      </div>
      <div className={styles.book_details}>
        <div className={styles.details}>
          <span className={styles.book_name}>{product.name}</span>
          <span className={styles.book_author}>{product.authors}</span>
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
  );
};
