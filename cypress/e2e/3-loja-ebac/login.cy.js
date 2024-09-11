/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    })

    afterEach(() => {
        cy.screenshot()
    })

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('teste@testando.com')
        cy.get('#password').type('12345678')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, teste-0999')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('tes12312te@testando.com')
        cy.get('#password').type('12345678')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('exist')
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('teste@testando.com')
        cy.get('#password').type('999999999')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', "Erro: A senha fornecida para o e-mail teste@testando.com está incorreta.")
    })
})