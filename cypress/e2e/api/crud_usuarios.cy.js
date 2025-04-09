/// <reference types= "cypress"/>

describe('API - Teste CRUD | Busca | Alteração | Deleção | de Usuários ', () => {
    before(() => {
        cy.normalizarUsuarioParaTeste().then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body.message).to.not.be.empty
        })
      })

    it('API - Teste CRUD', () => {
       cy.cadastrarUsuario()
       cy.buscarUsuarioPorEmail('cypress@example.com').then((id) => {
        expect(id).to.not.be.empty
        cy.atualizarUsuario(id).then((response) =>{
            expect(response.status).to.equal(200);
            expect(response.body.message).to.equal('Registro alterado com sucesso');
        })
        
        cy.deletarUsuario(id).then((response) =>{
            expect(response.status).to.equal(200);
            expect(response.body.message).to.equal('Registro excluído com sucesso');
        })
    
       })

    })
});