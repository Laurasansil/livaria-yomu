import styles from "./index.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        © Powered by Laura Sansil
      </a>
    </footer>
    //achar o ; que fica aparecendo no browser
  );
};
