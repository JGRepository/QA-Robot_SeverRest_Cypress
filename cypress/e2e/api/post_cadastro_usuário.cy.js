/// <reference types= "cypress"/>

describe('Cadastro de Usuário', () => {
  before(() => {
    cy.normalizarUsuarioParaTeste().then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.message).to.not.be.empty
    })
  })
  
  
  
  it('Cadastro Usuário', () => {
    cy.cadastrarUsuario().then((res) => {
      if (res.status === 201) {
        cy.log('Usuário cadastrado com sucesso');
      } else {
        cy.log('Usuário já existia');
      }
    });
  });
  
});
