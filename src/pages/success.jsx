import { Button, Page } from "framework7-react";

const SuccessPage = ({ f7router }) => {
  const LogOut = () => {
    localStorage.clear();
  };

  return (
    <Page name="success" className="success-page">
      <img alt="nyc-logo" src="nyc-logo.jpeg" width={200} height={200} />
      <h1>Obrigado por responder nosso questionário!</h1>
      <br />
      <h1>
        Sua ajuda melhora a qualidade dos nossos produtos e ajuda você a ter uma
        melhor experiência conosco!
      </h1>
      <Button onClick={LogOut} className="button">
        Sair
      </Button>
    </Page>
  );
};

export default SuccessPage;
