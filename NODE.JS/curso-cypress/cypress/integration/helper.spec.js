/// <reference types="cypress" />

describe('Helpres...', () =>{
    it('Wrap', () =>{
        const obj = {nome: 'User', idade: 20}
        expect(obj).to.have.property('nome')
        //para poder usar o should que é um comando do cypress em um objeto comum, podemos usar o wrap que encapsula o pbjeto ao cypress
        cy.wrap(obj).should('have.property', 'nome')

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        //cy.get('#formNome').type('funciona?')
        cy.get('#formNome').then($el => {
            cy.wrap($el).type('funciona via cypress')
        })

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(10) 
            }, 500)
        })

        cy.get('#buttonSimple').then(() => console.log('Encontrei o priemiro botão'))
        //nesse caso o cypress não está gerenciando a execução, então ele escreve o valor antes de encontrar o primeiro botão
        promise.then(num => console.log(num))
        //Quando encapsulamos a promise com wrap o cypress gerencia a execução
        cy.wrap(promise).then(ret => console.log(ret))
        cy.get('#buttonList').then(() => console.log('Encontrei o segundo botão'))

        //com o then ele considera o return, mesmo em tendo passado o valor 1 no final ele vai considerar o 2 devido o return
        cy.wrap(1).then(num => {
            return 2
        }).should('be.equal', 2)

        //com o should ele não considere o return
        cy.wrap(1).should(num => {
            return 2
        }).should('be.equal', 1)

    })

    it.only('Its...', () =>{
        const obj = {nome: 'User', idade: 20}
        cy.wrap(obj).should('have.property', 'nome', 'User')
        cy.wrap(obj).its('nome').should('be.equal', 'User')

        const obj2 = {nome: 'User', idade: 20, endereco: { rua: 'dos bobos'}}
        cy.wrap(obj2).its('endereco').should('have.property', 'rua')
        cy.wrap(obj2).its('endereco').its('rua').should('contain', 'bobos')
        //forma melhor
        cy.wrap(obj2).its('endereco.rua').should('contain', 'bobos')

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.title().its('length').should('be.equal', 20)

    } )
})