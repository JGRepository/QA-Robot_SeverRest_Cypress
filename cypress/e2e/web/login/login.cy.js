/// <reference types="cypress" />

import Login from "../../../support/web/login_page_resources/index";
import Home from "../../../support/web/home_page_resources/index"

describe('WEB - Testes Página de Login', () => {
    beforeEach(() => {
        cy.normalizarUsuarioParaTeste()
    });
    it('WEB - Realizando Login com Sucesso', () => {
        cy.cadastrarUsuario();
        Login.euAcessoAPaginaDeLogin();
        Login.eDigitoMeuEmail('cypress@example.com');
        Login.eDigitoMinhaSenha('cypress');
        Login.eClicoNoBotaoEntrar();
        Home.estouNaAreaLogadaHome('Bem Vindo Cypress')

    });

    it('WEB - Realizando Login com Erro de Senha', () => {
        cy.cadastrarUsuario();
        Login.euAcessoAPaginaDeLogin();
        Login.eDigitoMeuEmail('cypress@example.com');
        Login.eDigitoMinhaSenha('teste');
        Login.eClicoNoBotaoEntrar();
        Login.entaoDeveAparecerMsg("Email e/ou senha inválidos");


    });

    it('WEB - Realizando Cadastro', () => {
        Login.euAcessoAPaginaDeLogin();
        Login.eClicoNoBotaoCadastrar()
        Login.eDigitoMeuNome('Cypress');
        Login.eDigitoMeuEmail('cypress@example.com');
        Login.eDigitoMinhaSenhaNoCadastro('cypress');
        Login.eClicoNoCheckboxDeAdmin();
        Login.eClicoNoBotaoCadastrar()
        Login.entaoDeveAparecerMsg('Cadastro realizado com sucesso')


    });


});