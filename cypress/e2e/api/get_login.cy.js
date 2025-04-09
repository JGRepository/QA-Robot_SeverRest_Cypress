/// <reference types= "cypress"/>

describe('API - Testes Login', () => {
    after(() => {
        cy.normalizarUsuarioParaTeste().then((response)=>{
            expect(response.status).to.equal(200);
            expect(response.body.message).to.not.be.empty

        })
    });
    it('API - Login com sucesso', () => {
        cy.cadastrarUsuario()
        cy.realizarLogin()
            .then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.message).to.equal("Login realizado com sucesso");
                expect(response.body.authorization).to.not.be.empty
        })
    })
});
