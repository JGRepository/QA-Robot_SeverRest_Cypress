/// <reference types= "cypress"/>

describe('Testes Busca de Usuários', () => {

    it('Retornar todos os usuários cadastrados', () => {

        cy.retornarTodosUsuarios()
            .then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body).to.not.be.empty
            })
    })

    it('Retornar Usuário de Teste', () => {
        cy.cadastrarUsuario()
        cy.buscarUsuarioPorEmail('cypress@example.com')
            .then((id) => {
                expect(id).to.not.be.undefined;
            })
    })


 });
