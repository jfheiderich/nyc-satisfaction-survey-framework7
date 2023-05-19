import { Link, Page } from "framework7-react";

const SuccessPage = () => {
  const logOut = () => {
    localStorage.clear();
  };

  return (
    <Page className="success-page">
      <img alt="nyc-logo" src="nyc-logo.jpeg" width={200} height={200} />
      <h1>Obrigado por responder nosso questionário!</h1>
      <br />
      <h1>
        Sua ajuda melhora a qualidade dos nossos produtos e ajuda você a ter uma
        melhor experiência conosco!
      </h1>
      <Link className="button">Sair</Link>
    </Page>
  );
};

export default SuccessPage;
