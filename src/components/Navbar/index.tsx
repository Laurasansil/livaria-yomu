import { route } from "next/dist/server/router";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import styles from "./index.module.css";

export const Navbar = () => {
  const auth = useContext(AuthContext);
  const router = useRouter();

  function handleClickLogin() {
    router.push("/");
    auth.login;
  }
  return (
    <header className={styles.header}>
      <div className={styles.header_links}>
        <a href="index.tsx" onClick={() => router.push("/home")}>
          Yomu
        </a>
        <a href="home.tsx" onClick={() => router.push("/landingPage")}>
          about us
        </a>
        <a href="categories.tsx">categorias</a>
        <button className={styles.book_cart}>Carrinho (0) </button>
      </div>

      <div className={styles.header_user_container}>
        {auth.user ? (
          <>
            <div className={styles.user_icon}>
              <Image
                src="/images/user.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </div>
            <>
              <a
                className={styles.user_name}
                onClick={() => router.push("/profile")}
              >
                {auth.user.name}
              </a>
              <button onClick={auth.logout}>Sair</button>
            </>
          </>
        ) : (
          <>
            <button className={styles.login_button} onClick={handleClickLogin}>
              Entrar
            </button>

            <button
              className={styles.signUp_button}
              onClick={() => router.push("/signUp")}
            >
              Cadastrar
            </button>
          </>
        )}
      </div>
    </header>
  );
};
