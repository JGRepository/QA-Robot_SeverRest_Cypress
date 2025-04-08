const el = require('./elements').ELEMENTS

class Home {

    estouNaAreaLogadaHome() {
        cy.get(el.home).should('be.visible')
    }

    abroAOpcaoDoMenu(opcao){
        if (opcao === 'cadastroProdutos') {
            
            cy.get(el.cadastrarProdutos).should('be.visible').click()
        }
        else{
            console.log("Nao achamos a opção desejada")
        }
    }
}

export default new Home();