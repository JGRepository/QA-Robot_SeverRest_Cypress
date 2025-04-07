/// <reference types= "cypress"/>

describe('Cadastro de Usuário', () => {
    it('tenta cadastrar um usuário que pode já existir', () => {
        cy.cadastrarUsuario().then((res) => {
          if (res.status === 201) {
            cy.log('Usuário cadastrado com sucesso');
          } else {
            cy.log('Usuário já existia');
          }
        });
      });

      
    })
