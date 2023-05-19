import React, { useEffect } from "react";
import { Page, Link, Block } from "framework7-react";
import { users } from "../usersMock";

const HomePage = () => {
  useEffect(() => {
    localStorage.setItem("@users", JSON.stringify(users));
    if (localStorage.getItem("@logged")) {
      //navigation to "/survey"
    }
  });

  return (
    <Page name="home" className="home-page">
      <Block className="home-page__container ">
        <img alt="nyc-logo" src="nyc-logo.jpeg" width={200} height={200} />
        <p>Pesquisa de satisfação NYC</p>
        <Link href="/signUp" className="button">
          Cadastrar
        </Link>
        <Link href="/signIn" className="button">
          Entrar
        </Link>
      </Block>
    </Page>
  );
};
export default HomePage;
