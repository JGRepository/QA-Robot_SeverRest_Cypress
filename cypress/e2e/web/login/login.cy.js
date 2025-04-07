/// <reference types="cypress" />

import Login from "../../../support/web/login_page_resources/index";

describe('Testes Página de Login', () => {
    it('Realizando Login com Sucesso', () => {
        Login.euAcessoAPaginaDeLogin();
        cy.pause(); // pausa aqui
        Login.eDigitoMeuEmail('cypress@example.com');
        Login.eDigitoMinhaSenha('cypress');
        Login.eClicoNoBotaoEntrar();

    });
});