/// <reference types= "cypress"/>

describe('Teste CRUD | Busca | Alteração | Deleção | de Usuários ', () => {
    before(() => {
        cy.normalizarUsuarioParaTeste()
    });

    it('Teste CRUD', () => {
       cy.cadastrarUsuario()
       cy.buscarUsuarioPorEmail('cypress@example.com').then((id) => {
        cy.atualizarUsuario(id)
        cy.deletarUsuario(id)
       })

    })
});