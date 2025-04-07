/// <reference types= "cypress"/>

describe('Testes Login', () => {
    
    it.only('Login com sucesso', () => {
    
        cy.realizarLogin()
            .then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.message).to.equal("Login realizado com sucesso");
                expect(response.body.authorization).to.not.be.empty
        })
    })
});
