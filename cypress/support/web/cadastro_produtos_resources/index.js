const el = require('./elements').ELEMENTS

class CadastroProdutos {


  euPreenchoNomeDoProduto(produto) {
    cy.get(el.produto).type(produto)
  }

  euPreenchoPrecoDoProduto(preco) {
    cy.get(el.preco).type(preco)
  }

  euPreenchoDescricaoDoProduto(descricao) {
    cy.get(el.descricao).type(descricao)
  }

  euPreenchoQuantidadeDoProduto(quantidade) {
    cy.get(el.quantidade).type(quantidade)
  }
  euRealizoUploadDeImagem() {
    cy.get(el.imagem).attachFile('casdastro_produto_livro_teste.webp')
  }
  euClicoNoBotaoCadastrar(){
    cy.get(el.cadastrar).click()
  }
}

export default new CadastroProdutos();