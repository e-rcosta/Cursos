
/// <reference types="cypress" />

import loc from '../../support/locators'
import '../../support/commandsContas'
import '../../support/comandsTransacao'

describe('Slould test ate a funcional', () => {
    //executa apenas uma vez no primeiro teste
    before(() =>{
        cy.login('rosangelacosta22@gmail.com', 'rosa@2203')
    
    })

    beforeEach(() => {
        cy.get(loc.MENU.HOME).click()
        cy.resetApp()
    })

    it('Should create an account', () =>{
        cy.acessarMenuConta()
        cy.inserirConta('Nova Conta')
        cy.get(loc.MESSAG).should('contain', 'Conta inserida com sucesso!')
    })

    it('Should update an account', () =>{
        cy.acessarMenuConta()
        cy.alterarConta('Conta para alterar','Nova Conta alterada')
        cy.get(loc.MESSAG).should('contain', 'Conta atualizada com sucesso!')
    })

    it('Slould not create an account with the same name', () =>{
        cy.acessarMenuConta()
        cy.inserirConta('Conta mesmo nome')
        cy.get(loc.MESSAG).should('contain', 'code 400')
    })

    it('Should create a transaction', () => {
        cy.acessarMenuMocimentacao()
        cy.inserirMovimentacao('Deposito', '100', 'Conta para movimentacoes', 'Rosangela')
        cy.get(loc.MESSAG).should('exist','Movimentação inserida com sucesso!')

        cy.get(loc.EXTRATO.LINHAS).should('have.length', 7)
        cy.xpath(loc.EXTRATO.FN_XP_BUSCA_ELEMENTO('Deposito', '100')).should('exist')
    })

    it('Should get balance', () => {
        cy.get(loc.MENU.HOME).click()
        cy.xpath(loc.SALDO.FN_XP_SALDO_CONTA('Conta para saldo')).should('contain', '534,00')

        cy.get(loc.MENU.EXTRATO).click()
        cy.xpath(loc.EXTRATO.FN_XP_ALTERAR_ELEMENTO('Movimentacao 1, calculo saldo')).click()
        
        cy.get(loc.MOVIMENTACAO.DESCRICAO).should('have.value', 'Movimentacao 1, calculo saldo')
        cy.wait(4000)
             
        cy.get(loc.MOVIMENTACAO.STATUS).click()
        cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
        cy.get(loc.MESSAG).should('contain', 'sucesso!')

        cy.get(loc.MENU.HOME).click()
        cy.xpath(loc.SALDO.FN_XP_SALDO_CONTA('Conta para saldo')).should('contain', '4.034,00')
    })

    it('Should remove a transaction', () => {
        cy.get(loc.MENU.EXTRATO).click()
        cy.xpath(loc.EXTRATO.FN_XP_REMOVER_ELEMENTO('Movimentacao para exclusao')).click()
        cy.get(loc.MESSAG).should('contain', 'sucesso!')
    })
})