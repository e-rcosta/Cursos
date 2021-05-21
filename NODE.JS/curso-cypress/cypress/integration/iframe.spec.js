// <reference types="cypress" />

describe('Work with iFrames', () => {
    
    it('Deve preencher campo de texto', () =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#frame1').then(iframe => {
            const body = iframe.contents().find('body')
            cy.wrap(body).find('#tfield')
                .type('funciona?')
                //para campos do tipo text field então deve usar have.value, quando é campo de text usa-se contain
                .should('have.value', 'funciona?')
        })
    })

    it('Deve testar frame diretamente', () =>{
        cy.visit('https://wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click()
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Click OK!')
        })
    })
})