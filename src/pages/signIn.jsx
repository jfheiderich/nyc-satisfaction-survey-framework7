import { Block, Button, Link, Page } from "framework7-react";
import React, { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Page className="signIn-page">
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

        <Button>Login</Button>
        <p>
          Ainda não tem conta? <Link href="">Clique aqui!</Link>
        </p>
      </div>
    </Page>
  );
};

export default SignIn;
