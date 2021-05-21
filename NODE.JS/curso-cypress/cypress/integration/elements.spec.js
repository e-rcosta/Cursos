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

        it('Text', () =>{
                cy.get('body').should('contain', 'Cuidado')
                cy.get('span').should('contain', 'Cuidado')
                cy.get('.facilAchar').should('contain', 'Cuidado')
                cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
        })

        it('Links', () => {
                cy.get('[href="#"]').click()
                //# usado para pode capturar o resultado de um id
                cy.get('#resultado').should('have.text', 'Voltou!')
        })

        it.only('TextFields', () => {
            cy.get('#formNome')
                .type('Cypress Test')
                .should('have.value', 'Cypress Test')
            
            //para esse caso tivemos que acrescentar uma \ ficando \\: pois o cypress estava confundindo os caracteres \:
            //foi necessário devido nesse exemplo o id possuir o :
            cy.get('#elementosForm\\:sugestoes')
                .type('textarea')
                .should('have.value', 'textarea')    

            cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
                .type('???')    

            cy.get('[data-cy=dataSobrenome]')
                .type('Teste123456{backspace}{backspace}')

            cy.get('#elementosForm\\:sugestoes')
                .clear()    
                .type('Erro{selectall}Acerto', { delay: 100})
                .should('have.value', 'Acerto')        
        })
})

