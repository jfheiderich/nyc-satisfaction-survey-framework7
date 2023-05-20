import { Button, Link, Page } from "framework7-react";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = ({ f7router }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createAccount = () => {
    if (!name) {
      toast.error(`Campo "nome" está em branco`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    } else if (!email) {
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

    const newUser = {
      name,
      email,
      password,
    };

    const users = localStorage.getItem("@users");

    if (users) {
      let usersMock = JSON.parse(users);
      const isUserUsed = usersMock.find((user) => user.email === newUser.email);
      if (isUserUsed) {
        toast.info(`Este email já está em uso`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }
      usersMock.push(newUser);
      const usersUpdated = JSON.stringify(usersMock);

      localStorage.setItem("@users", usersUpdated);
    }
    f7router.navigate("/signIn");
  };

  return (
    <Page name="signUp" className="signUp-page">
      <div className="form">
        <label className="label" htmlFor="name">
          Seu nome
        </label>
        <input
          className="input"
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          className="input"
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
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
        />

        <Button onClick={createAccount}>Cadastrar</Button>
        <p>
          Já tem um conta? <Link href="/survey">Clique aqui!</Link>
        </p>
      </div>
      <ToastContainer />
    </Page>
  );
};

export default SignUp;
