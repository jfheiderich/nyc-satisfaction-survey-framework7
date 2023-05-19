import React from "react";
import {
  Page,
  Navbar,
  NavTitle,
  NavTitleLarge,
  Link,
  Toolbar,
  Block,
  Button,
} from "framework7-react";

const HomePage = () => (
  <Page name="home" className="home-page">
    <Block className="home-page__container ">
      <img alt="nyc-logo" src="nyc-logo.jpeg" width={200} height={200} />
      <p>Pesquisa de satisfação NYC</p>
      <Link href="/signUp" className="button">
        Cadastrar
      </Link>
      <Link href="/signIn" className="button">
        Login
      </Link>
    </Block>
    {/* Top Navbar */}
    {/* <Navbar>
      <NavTitle>Pesquisa de Satisfação</NavTitle>
      <NavTitleLarge>Pesquisa de Satisfação</NavTitleLarge>
    </Navbar> */}
    {/* Toolbar */}
    {/* <Toolbar bottom>
      <Link>Left Link</Link>
      <Link>Right Link</Link>
    </Toolbar> */}
    {/* Page content */}
    {/* <Block>
      <p>Here is your blank Framework7 app. Let's see what we have here.</p>
    </Block> */}
  </Page>
);
export default HomePage;
