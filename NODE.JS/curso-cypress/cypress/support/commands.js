import loc from './locators'

Cypress.Commands.add('getToken', (user, passwd) =>{
    cy.request({
        method: 'POST',
        url: '/signin',
        body: {
            email: user,
            redirecionar: false,
            senha: passwd
        }
    }).its('body.token',).should('not.be.empty')
        .then(token => {
            //armazeno o token em uma variável de ambiente do cypress
            Cypress.env('token', token)
            return token
        })
})

Cypress.Commands.add('resetRest', () =>{
    cy.getToken('rosangelacosta22@gmail.com', 'rosa@2203').then(token => {
        
        cy.request({
            method: 'GET',
            url: '/reset',
            headers: { Authorization: `JWT ${token}`}
        })
    }).its('status').should('be.equal', 200)

})

Cypress.Commands.add('getContaByName', name =>{
    cy.getToken('rosangelacosta22@gmail.com', 'rosa@2203').then(token => {
    
        cy.request({
            method: 'GET',    
            url: '/contas',
            headers: { Authorization: `JWT ${token}`},
            //adicionando uma query string a consulta
            qs:{
                nome: name
            }
        })
    }).then(res => {
        return res.body[0].id
    })
})

//criar um metódo que vai sobrescrever o request usa o comando overwrit qua passa o metodo que será sobrescrito request
//recebe como parâmetro a função original do cypress passando os parâmetros a função original e seus parametros que só
// obtidos em options
Cypress.Commands.overwrite('request', (originalFn, ...options) =>{
    //a opção de verificar se está retornando apenas um parâmetro, pois é retornado um objeto que comtem todos os dados
    //da requisição    
    if(options.length === 1){
        if(Cypress.env('token')){
            console.log(options)
            //adiciona o token nos parâmetros do request
            options[0].headers = {
                Authorization: `JWT ${Cypress.env('token')}`
            }
         }
    }
     return originalFn(...options)
})


//testes funcionais
Cypress.Commands.add('login',  (user, password) => {
    cy.visit('https://barrigareact.wcaquino.me/')
    cy.get(loc.LOGIN.USER).type(user)
    cy.get(loc.LOGIN.PASSORD).type(password)
    cy.get(loc.LOGIN.BTN_LOGIN).click()
    cy.get(loc.MESSAG).should('contain', 'Bem vindo')
})

Cypress.Commands.add('resetApp', () => {
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.RESETAR).click()
})