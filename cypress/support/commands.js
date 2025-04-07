Cypress.Commands.add('cadastrarUsuario', () => { 
  cy.fixture('cadastro_usuario').then((cadastro_usuario) => {
    return cy.request({
      method: 'POST',
      url: '/usuarios',
      body: cadastro_usuario,
      failOnStatusCode: false,
    }).then((response) => {
      if (response.status === 201) {
        expect(response.status).to.eq(201);
      } else if (response.status === 400) {
        expect(response.body.message).to.eq('Este email já está sendo usado');
      } else {
        throw new Error(`Status inesperado: ${response.status}`);
      }
      return response;
    });
  });
});

Cypress.Commands.add('realizarLogin', () => {
  let token;
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



// Cypress.Commands.add('cadastrarUsuarioInvalido', (nome, email, password, administrador) => { 
//     cy.api({
//         method: 'POST',
//         url: '/usuarios',
//         body: {
//             "nome": nome,
//             "email": email,
//             "password": password,
//             "administrador": administrador
//           },
//         failOnStatusCode: false
//     }).then((response) => { return response })
// })

// Cypress.Commands.add('buscarUsuarioEspecifico', (user_id) => { 
//     cy.api({
//         method: 'GET',
//         url: `/usuarios/${user_id}`,
//         failOnStatusCode: false
//       }).then((response) => { return response })
// })

// Cypress.Commands.add('buscarTodosUsuarios', () => { 
//     cy.fixture("config.json").then((url) => {
//         cy.api({
//             method: 'GET',
//             url: `${url.servidor}${url.users}`,
//             failOnStatusCode: false
//           }).then((response) => { return response })
//     })
// })

// Cypress.Commands.add('realizarLogin', () => { 
//     cy.api({
//         method: 'POST',
//             url: '/login',
//             body: {
//                 email: Cypress.env('emailValido'),
//                 password: Cypress.env('senhaValida')
//             },
//       }).then((response) => { return response })
// })

// Cypress.Commands.add('loginInvalido', (email, password) => { 
//     cy.api({
//         method: 'POST',
//             url: '/login',
//             body: {
//                 email: email,
//                 password: password
//             },
//             failOnStatusCode: false
//       }).then((response) => { return response })
// })