const el = require('./elements').ELEMENTS

class Login {
  euAcessoAPaginaDeLogin() {
    cy.visit("https://front.serverest.dev/admin/home")
  }

  eDigitoMeuEmail(email) {
    cy.get(el.email).type(email)
  }
  
  eDigitoMeuNome(nome) {
    cy.get(el.nome).type(nome)
  }

  eDigitoMinhaSenha(senha) {
     cy.get(el.senha).type(senha)
  }
  eDigitoMinhaSenhaNoCadastro(password) {
     cy.get(el.password).type(password)
  }

  eClicoNoBotaoEntrar() {
    cy.get(el.entrar).click()
  }

  eClicoNoCheckboxDeAdmin() {
    cy.get(el.admin).click()
  }
  entaoDeveAparecerMsg(textCompared){
    cy.get(el.errorMsg).should('be.visible').invoke('text').then((text) => {
    expect(text).to.be.equal(textCompared)
    })
    }

    eClicoNoBotaoCadastrar(){
      cy.get(el.cadastrar).click()
    }
}

export default new Login();