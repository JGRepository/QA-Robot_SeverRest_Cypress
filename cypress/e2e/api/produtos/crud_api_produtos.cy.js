/// <reference types= "cypress"/>

describe('API - Teste CRUD | Busca | Alteração | Deleção | de Produtos ', () => {
    
    before(() => {
        cy.log('Verifica se existe algum produto cadastrado e excluí para não ocorrer duplicidades / erros')
        cy.normalizarProdutoParaTeste()
    });

    it('Teste CRUD API Produtos ', () => {
        
        cy.cadastrarProduto()
        cy.log('Cria Produto')

        cy.realizaLoginERetornaToken().then((token)=>{
            cy.log('Faz Login')

            cy.buscarProdutoPeloNome('CypressProduto').then((response)=>{
                cy.log('Pega ID do Produto')

                    cy.atualizarProduto(response._id, token.body.authorization)
                    cy.log('Faz Atualizaçao do Produto pegando o json do fixtures')

                    cy.deletarProduto(response._id)
                    cy.log('Exlcui o item criado')

                })
        })

    })
});
