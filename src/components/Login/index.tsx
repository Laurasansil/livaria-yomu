import { NextPage } from "next";
import styles from "./index.module.css";
import Image from "next/image";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const auth = useContext(AuthContext);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.log("cliquei");
    if (email && password) {
      const isLogged = await auth.login(email, password);
      if (!isLogged) {
        return window.alert("Verifique seu usuário ou senha");
      }
      router.push("/");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.login_box}>
          <div className={styles.login_form}>
            <button
              className={styles.backButton}
              onClick={() => {
                router.push("/");
              }}
            >
              Voltar
            </button>
            <div className={styles.login_form_box}>
              <span className={styles.title}>Boas vindas a Yomu!</span>
              <span className={styles.subtitle}>
                Por favor digite seu login!
              </span>
              <form id="login-form" className={styles.form_login}>
                <label className={styles.label}>Email</label>
                <input
                  type="text"
                  value={email}
                  className={styles.input}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="   Digite seu E-mail"
                />
                <label className={styles.label}>Senha</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.input}
                  placeholder="   ••••••••"
                />
              </form>
              <a className={styles.link}>Esqueci minha senha</a>
              <button className={styles.login_button} onClick={handleLogin}>
                Entrar
              </button>
              <span className={styles.sign_up}>
                Não tem uma conta?{" "}
                <a className={styles.link} href="signUp">
                  Cadastre-se
                </a>
              </span>
            </div>
            <span className={styles.copyright}> © Laura Silva</span>
          </div>
          <div className={styles.login_image}>
            <Image
              src="/images/bookclub.gif"
              alt="Vercel Logo"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export async function userData() {
  const response = await fetch("https://backend.dev/user");
  const user = await response.json();

  return {
    props: {
      user,
    },
  };
}

export default Login;
