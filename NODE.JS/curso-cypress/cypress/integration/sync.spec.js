/// <reference types="cypress" />

describe('Esperas...', () =>{
       
        //executa apenas uma vez no primeiro teste
        before(() =>{
                cy.visit('https://wcaquino.me/cypress/componentes.html')
        })

        //é executado no início de cada teste
        beforeEach(() =>{
            //refresh na tela   
            cy.reload()
        })

        it('Deve aguardar elemento está disponível', () =>{
            //acertiva que garante que esse elemento não existe
            cy.get('#novoCampo').should('not.exist')
            cy.get('#buttonDelay').click() 
            cy.get('#novoCampo').should('not.exist')
            cy.get('#novoCampo').should('exist')
            cy.get('#novoCampo').type('funciona')    
        })
       
        it('Deve fazer retrys', () =>{
            cy.get('#buttonDelay').click() 
            //quando passa as acertivas encadeadas o cypress vai ficar executando até que todas as acertivas estejam corretas
            cy.get('#novoCampo')
                .should('exist')
                .type('funciona')
        })

        it('Uso do find', () =>{
            cy.get('#buttonList').click()
            //procura nos elementos se existe o Item 1
            cy.get('#lista li')
                .find('span')
                .should('contain', 'Item 1')

            cy.get('#lista li span')
                .should('contain', 'Item 2')    
        })

        it('Uso do timeout', () =>{
            //cy.get('#buttonDelay').click() 
            //passei apenas 1 segundo para verificar se o campo exist, isso causa um erro, pois o tempo para exibição é de 3 segundos
            //cy.get('#novoCampo', { timeout: 1000 }).should('exist')

            //cy.get('#buttonList').click()
            //wait é uma espera fixa, não é tão aconselhado
            //cy.wait(5000)
            //cy.get('#lista li span', { timeout: 30000})
            //     .should('contain', 'Item 2')
            
            cy.get('#buttonList').click()
            cy.get('#lista li span')
                    //quando ele identifica que existe 1 elemento já satistaz a condição, mesmo que possuam 2 elementos
                    .should('have.length', 1)
            cy.get('#lista li span')        
                    .should('have.length', 2)
        })

        it('Click retry', () =>{
            cy.get('#buttonCount')
                .click()
                .click()
                .should('have.value', 111)
        })

        //diferença entre should e then - o then retorna o elemento html
        it.only('Should vs Then', () =>{
            cy.get('#buttonList').then($el =>{
                expect($el).to.have.length(1)
                cy.get('#buttonList')
            })
        })
})


