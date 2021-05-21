/// <reference types="cypress" />

/**
 * Executa apenas esse teste
 */
it('A external test...', () => {

})

/**
 * Grupo de testes - describe
 * skip - o teste não é executado
 */
describe('Should group tests...', () => {
   describe('Shold group more specific tests...', () =>{
         it('A specifc test...', () => {

        })    
   } )
   
   describe('Shold group more specific tests 2 ...', () =>{
    it('A specifc test 2 ...', () => {

   })    
} )

    it('A internal test...', () => {

    })    
})