import { Button, Link, Page } from "framework7-react";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = ({ f7router }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSurvey, setShowSurvey] = useState(false);

  const handleLogin = () => {
    if (!email) {
      toast.error(`Campo "email" está em branco`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    } else if (!password) {
      toast.error(`Campo "senha" está em branco`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    const userInfo = {
      email,
      password,
    };

    const users = localStorage.getItem("@users");
    if (users) {
      let usersMock = JSON.parse(users);

      const hasAccount = usersMock.find(
        (user) => user.email === userInfo.email
      );

      const passwordMatch =
        hasAccount?.password === userInfo.password ? true : false;

      if (!hasAccount || !passwordMatch) {
        toast.info(`Confira suas credenciais e tente novamente!`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }
      localStorage.setItem("@logged", email);
    }
    f7router.navigate("/survey");
  };

  return (
    <Page name="signIn" className="signIn-page">
      <div className="form">
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          className="input"
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Digite seu email"
        />

        <label className="label" htmlFor="password">
          Sua senha
        </label>
        <input
          className="input"
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Digite sua senha"
        />

        <Button onClick={handleLogin}>Login</Button>
        <p>
          Ainda não tem conta? <Link href="/signUp">Clique aqui!</Link>
        </p>
      </div>
      <ToastContainer />
    </Page>
  );
};

export default SignIn;
