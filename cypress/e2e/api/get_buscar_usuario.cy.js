/// <reference types= "cypress"/>

describe('API - Testes Busca de Usuários', () => {

    it('API - Retornar todos os usuários cadastrados', () => {

        cy.retornarTodosUsuarios()
            .then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body).to.not.be.empty
            })
    })

    it('API - Retornar Usuário de Teste', () => {
        cy.cadastrarUsuario()
        cy.buscarUsuarioPorEmail('cypress@example.com')
            .then((id) => {
                expect(id).to.not.be.undefined;
            })
    })


 });
