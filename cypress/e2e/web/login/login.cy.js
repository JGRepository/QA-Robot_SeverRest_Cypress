/// <reference types="cypress" />

import Login from "../../../support/web/login_page_resources/index";
import Home from "../../../support/web/home_page_resources/index"

describe('Testes Página de Login', () => {
    it('Realizando Login com Sucesso', () => {
        cy.cadastrarUsuario();
        Login.euAcessoAPaginaDeLogin();
        Login.eDigitoMeuEmail('cypress@example.com');
        Login.eDigitoMinhaSenha('cypress');
        Login.eClicoNoBotaoEntrar();
        Home.estouNaAreaLogadaHome('Bem Vindo Cypress')

    });

    it('Realizando Login com Erro de Senha', () => {
        cy.cadastrarUsuario();
        Login.euAcessoAPaginaDeLogin();
        Login.eDigitoMeuEmail('cypress@example.com');
        Login.eDigitoMinhaSenha('teste');
        Login.eClicoNoBotaoEntrar();
        Login.entaoDeveApareceerMsgErro("Email e/ou senha inválidos");
        

    });


});