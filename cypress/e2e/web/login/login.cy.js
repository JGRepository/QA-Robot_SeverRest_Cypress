/// <reference types="cypress" />

import Login from "../../../support/web/login_page_resources/index";

describe('Testes Página de Login', () => {
    it('Realizando Login com Sucesso', () => {
        cy.cadastrarUsuario();
        Login.euAcessoAPaginaDeLogin();
        Login.eDigitoMeuEmail('cypress@example.com');
        Login.eDigitoMinhaSenha('cypress');
        Login.eClicoNoBotaoEntrar();

    });


});