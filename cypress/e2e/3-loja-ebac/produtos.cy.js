/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page"

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    })

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Apollo Running Short')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    })

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Apollo Running Short'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    })

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Apollo Running Short')
        cy.get('.product_title').should('contain', 'Apollo Running Short')
    })

    it.only('Deve adicionar produto ao carrinho', () => {
        let qtd = 7
        produtosPage.buscarProduto('Apollo Running Short')
        cy.wait(500)
        produtosPage.addProdutoCarrinho('34', 'Black', qtd)
        cy.get('.woocommerce-message').should('contain', qtd + ' × “Apollo Running Short” foram adicionados no seu carrinho.')
    })

})