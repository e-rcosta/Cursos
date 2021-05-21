import loc from './locators'

Cypress.Commands.add('acessarMenuMocimentacao', () => {
    cy.get(loc.MENU.MOVIMENTACAO).click()
})

Cypress.Commands.add('inserirMovimentacao',  (descricao, valor, conta, interessado) => {
    cy.get(loc.MOVIMENTACAO.DESCRICAO).type(descricao)
    cy.get(loc.MOVIMENTACAO.VALOR).type(valor)
    cy.get(loc.MOVIMENTACAO.INTERESSADO).type(interessado)
    cy.get(loc.MOVIMENTACAO.CONTA).select(conta)
    cy.get(loc.MOVIMENTACAO.STATUS).click()
    cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
})

