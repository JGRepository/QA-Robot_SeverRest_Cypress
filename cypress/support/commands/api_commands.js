const emailCadastrado = 'cypress@example.com'
const produtoCadastrado = 'CypressProduto'

// -------------------------------------- API USUARIOS --------------------------------------

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
  cy.fixture('alterar_cadastro_usuario').then((alterar_cadastro_usuario) => {
    return cy.request({
      method: 'PUT',
      url: '/usuarios/' + id,
      body: alterar_cadastro_usuario
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

Cypress.Commands.add('normalizarUsuarioParaTeste', () => {
  cy.buscarUsuarioPorEmail(emailCadastrado).then((id) => {
    cy.deletarUsuario(id)
  })
})

// -------------------------------------- API PRODUTOS --------------------------------------

Cypress.Commands.add('cadastrarProduto', () => {
  return cy.cadastrarUsuario().then(() => {
    return cy.realizarLogin().then((response) => {
      const token = response.body.authorization;

      return cy.fixture('cadastro_produto').then((cadastro_produto) => {
        return cy.request({
          method: 'POST',
          url: 'produtos',
          body: cadastro_produto,
          headers: {
            Authorization: token,
          },
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(201);
          return response;
        });
      });
    });
  });
});

Cypress.Commands.add('buscarProdutoPeloNome', (produtoNome) => {
  return cy.request({
    url: `produtos?nome=${produtoNome}`,
    method: 'GET',
    failOnStatusCode: false
  }).then((response) => {

    switch (response.status) {
      case 200:

        const produto = response.body.produtos.find(p => p.nome === produtoNome);
        return produto;


      case 400:

        expect(response.body.message).to.equal('Produto não encontrado');
        return null;

      default:
        throw new Error(`Status inesperado: ${response.status}`);
    }
  });
});


Cypress.Commands.add('atualizarProduto', (id, token) => {
  cy.fixture('alterar_cadastro_produto').then((alterar_cadastro_produto) => {
    return cy.request({
      method: 'PUT',
      url: '/produtos/' + id,
      headers: {
        Authorization: token,
      },
      body: alterar_cadastro_produto
    }).then((response) => {
      expect(response.status).to.equal(200);
      return response
    })
  })
})


Cypress.Commands.add('deletarProduto', (produtoId) => {
  return cy.cadastrarUsuario().then(() => {
    return cy.realizarLogin().then((response) => {
      const token = response.body.authorization;

      return cy.request({
        method: 'DELETE',
        url: `produtos/${produtoId}`,
        headers: {
          Authorization: token,
        },
        failOnStatusCode: false,
      }).then((response) => {
        console.log(response)
        switch (response.status) {
          case 200:

            expect(response.body.message).to.equal('Registro excluído com sucesso');
            return response;

          case 400:

            expect(response.body.id).to.equal('id deve ter exatamente 16 caracteres alfanuméricos');
            return null;

          default:
            throw new Error(`Status inesperado: ${response.status}`);
        }
      });
    });
  });
});


Cypress.Commands.add('normalizarProdutoParaTeste', () => {
  return cy.buscarProdutoPeloNome(produtoCadastrado).then((produto) => {
    if (produto && produto._id) {
      return cy.deletarProduto(produto._id);
    }
    return null;
  });
});

Cypress.Commands.add('realizaLoginERetornaToken', () => {
  return cy.cadastrarUsuario().then(() => {
    return cy.realizarLogin().then((response) => {

      return response
    });
  });
});

