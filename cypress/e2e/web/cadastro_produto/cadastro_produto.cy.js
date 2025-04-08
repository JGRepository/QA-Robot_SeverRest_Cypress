/// <reference types="cypress" />
import CadastroProdutos from "../../../support/web/cadastro_produtos_resources/index";
import Home from "../../../support/web/home_page_resources";


describe('Testes Página de Login', () => {
    it('Realizando Login com Sucesso', () => {
        cy.loginComSucesso()
        Home.abroAOpcaoDoMenu('cadastroProdutos')
        CadastroProdutos.euPreenchoNomeDoProduto('CypressProduto');
        CadastroProdutos.euPreenchoPrecoDoProduto('100')
        CadastroProdutos.euPreenchoDescricaoDoProduto('Produto com descrição Cypress de Teste')
        CadastroProdutos.euPreenchoQuantidadeDoProduto('1000')
        CadastroProdutos.euRealizoUploadDeImagem()
        CadastroProdutos.euClicoNoBotaoCadastrar()
    });
});