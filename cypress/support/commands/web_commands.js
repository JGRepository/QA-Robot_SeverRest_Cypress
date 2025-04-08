import Login from "../web/login_page_resources/index";
import Home from "../web/home_page_resources/index"

Cypress.Commands.add('loginComSucesso', () => {
  cy.cadastrarUsuario();
  Login.euAcessoAPaginaDeLogin();
  Login.eDigitoMeuEmail('cypress@example.com');
  Login.eDigitoMinhaSenha('cypress');
  Login.eClicoNoBotaoEntrar();
  Home.estouNaAreaLogadaHome('Bem Vindo Cypress');
});
