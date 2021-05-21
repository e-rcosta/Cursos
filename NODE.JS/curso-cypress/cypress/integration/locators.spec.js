/// <reference types="cypress" />

describe('Work with basic elements', () => {
    //executa apenas uma vez no primeiro teste
    before(() =>{
            cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    //é executado no início de cada teste
    beforeEach(() =>{
        //refresh na tela   
        cy.reload()
    })
    it('using jquery selector', () =>{
        cy.get(':nth-child(1) > :nth-child(3) > [type="button"]')
        cy.get('table#tabelaUsuarios tbody tr:eq(0) td:nth-child(3) > input').click()
        //a busca procura pelo evento onclick que contenha a palavra Francisco através do uso do * igual a contem
        cy.get("[onclick*='Francisco']")
        cy.get("#tabelaUsuarios td:contains('Doutorado'):eq(0) ~ td:eq(3) > input")
        cy.get("#tabelaUsuarios tr:contains('Doutorado'):eq(0) td:eq(6) > input")
    })

    it('using xpath', () =>{
        cy.xpath('//input')
        cy.xpath("//input[contains(@onclick, 'Francisco')]")
        //o exemplo abaixo mostra a opção de ficar subindo e decendo entre o código usando o .. como é feita a nevejação do DOS
        cy.xpath("//table[@id='tabelaUsuarios']//td[contains(., 'Francisco')]/..//Input[@type='text']")
        cy.xpath("//td[contains (.,'Usuario A')]/following-sibling::td[contains (., 'Mestrado')]/..//input[@type='text']").type('funciona')
    })
})