const emailCadastrado = 'cypress@example.com'

Cypress.Commands.add('cadastrarUsuario', () => {
  cy.fixture('cadastro_usuario').then((cadastro_usuario) => {
    return cy.request({
      method: 'POST',
      url: '/usuarios',
      body: cadastro_usuario,
      failOnStatusCode: false,
    }).then((response) => {
      if (response.status === 201) {
        expect(response.status).to.equal(201);
        expect(response.body.message).to.equal('Cadastro realizado com sucesso');
      } else if (response.status === 400) {
        expect(response.body.message).to.equal('Este email já está sendo usado');
      } else {
        throw new Error(`Status inesperado: ${response.status}`);
      }
      return response;
    });
  });
});

Cypress.Commands.add('realizarLogin', () => {
  cy.fixture('login').then((login) => {
    cy.request({
      method: 'POST',
      url: '/login',
      body:
        login
      ,
    }).then((response) => {
      return response
    })
  })
})



Cypress.Commands.add('retornarTodosUsuarios', () => {

  cy.request({
    method: 'GET',
    url: `/usuarios`,
    failOnStatusCode: false
  }).then((response) => {
    return response
  })
})


Cypress.Commands.add('buscarUsuarioPorEmail', (email) => {
  return cy.retornarTodosUsuarios().then(response => {
    const usuario = response.body.usuarios.find(u => u.email === email);
    return usuario?._id;
  });
});


Cypress.Commands.add('atualizarUsuario', (id) => {
  cy.fixture('cadastro_usuario').then((cadastro_usuario) => {
    return cy.request({
      method: 'PUT',
      url: '/usuarios/' + id,
      body: cadastro_usuario
    }).then((response) => {
      return response
    })
  })
})

Cypress.Commands.add('deletarUsuario', (id) => {
  cy.request({
    url: 'usuarios/' + id,
    method: 'DELETE',
    failOnStatusCode: false
  }).then((response) => {
    return response
  })
})

Cypress.Commands.add('normalizarUsuarioParaTeste',() => {
  cy.buscarUsuarioPorEmail(emailCadastrado).then((id) => {
  cy.deletarUsuario(id)
})
})