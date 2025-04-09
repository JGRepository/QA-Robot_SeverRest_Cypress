const el = require('./elements').ELEMENTS

class ListaProduto {

    pesquisoPeloNomeDoProduto(nomeProduto) {
        cy.xpath(`//td[contains(., "${nomeProduto}")]`).should('be.visible');
      }

}

export default new ListaProduto();