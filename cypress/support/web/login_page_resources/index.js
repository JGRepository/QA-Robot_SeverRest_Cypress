const el = require('./elements').ELEMENTS

class Login {
  euAcessoAPaginaDeLogin() {
    cy.visit("https://front.serverest.dev/admin/home")
  }

  eDigitoMeuEmail(email) {
    cy.get(el.email).type(email)
  }
  eDigitoMinhaSenha(senha) {
     cy.get(el.senha).type(senha)
  }

  eClicoNoBotaoEntrar() {
    cy.get(el.entrar).click()
  }
  entaoDeveApareceerMsgErro(textCompared){
    cy.get(el.errorMsg).should('be.visible').invoke('text').then((text) => {
    expect(text).to.be.equal(textCompared)
    })
    }
}

export default new Login();