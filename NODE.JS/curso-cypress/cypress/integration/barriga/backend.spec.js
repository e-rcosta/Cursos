/// <reference types="cypress" />

describe('Work with basic elements', () => {
    //let token
    //executa apenas uma vez no primeiro teste
    before(() =>{
        cy.getToken('rosangelacosta22@gmail.com', 'rosa@2203')
       // .then(tkn => {
       //     token = tkn
      //  })
    })

    //é executado no início de cada teste
    beforeEach(() =>{
        //refresh na tela   
        cy.resetRest()
    })

    it('Should create an account', () => {
            cy.request({
                        url: '/contas',
                        method: 'POST',
                        //headers: { Authorization: `JWT ${token}`},
                        body: {
                            nome: 'Conta via rest'
                        }
                    }).as('response')
                    
            cy.get('@response').then(res =>{
                expect(res.status).to.be.equal(201)
                expect(res.body).to.have.property('id')
                expect(res.body).to.have.property('nome', 'Conta via rest')
            })     
    })

    it('Should update an account', () =>{
     
        cy.getContaByName('Conta para alterar')
        .then(contaId => {
            cy.request({
                url: `/contas/${contaId}`,
                method: 'PUT',
               // headers: { Authorization: `JWT ${token}`},
                body: {
                    nome: 'Conta alterada via  rest'
                }
            }).as('response')
       }) 

      cy.get('@response').its('status').should('be.to.equal', 200)
    })

    it('Should create an account with same name', () => {
        cy.request({
                    url: '/contas',
                    method: 'POST',
                   // headers: { Authorization: `JWT ${token}`},
                    body: {
                        nome: 'Conta mesmo nome'
                    },
                    /**
                     //por default o cypress identifica como erro status code diferentes de classe dos 200 e 300
                     como estamos querendo testar um cenário de falha é necessário passar no o atributo failOnStatusCode 
                     */
                    failOnStatusCode: false
                }).as('response')
                
        cy.get('@response').then(res =>{
            console.log(res)
            expect(res.status).to.be.equal(400)
            expect(res.body.error).to.be.equal('Já existe uma conta com esse nome!')
        })     
})
  
    it('Should create a tarnsaction', () => {
        cy.getContaByName('Conta para movimentacoes')
        .then(contaId => {
            cy.request({
                method: 'Post',
                url: '/transacoes',
                //headers: { Authorization: `JWT ${token}`},
                body:{
                    conta_id: contaId,
                    //moments me retorna a data atual e com o comando add({days: 1}) adiciono 1 ficando o dia seguinte ao atual
                    data_pagamento: Cypress.moment().add({days: 1}).format('DD/MM/YYYY'),
                    data_transacao: Cypress.moment().format('DD/MM/YYYY'),
                    descricao: "desc",
                    envolvido: "int",
                    status: true,
                    tipo: "REC",
                    valor: "123"
                }
                //joga o resultado da função na variável response
            }).as('response')
                       
            //faz as acertivas usando alias da variável response
            cy.get('@response').its('status').should('be.equal', 201)
            cy.get('@response').its('body.id').should('exist')
        })
    })

    it('Should get balance', () => {
        cy.request({
            method: 'GET',
            url: '/saldo',
           // headers: { Authorization: `JWT ${token}`},
            //o response é um arrey no body
        }).then(res => {
            let saldoConta
            res.body.forEach(c =>{
                if(c.conta === 'Conta para saldo') saldoConta = c.saldo
            })
            expect(saldoConta).to.be.equal('534.00')
        })

        //pega a movimentação que será alterada
        cy.request({
            method: 'GET',
            url: '/transacoes',
           // headers: { Authorization: `JWT ${token}`},
            qs: {descricao: 'Movimentacao 1, calculo saldo'}
        }).then(res => {
            //apenas para mudar o status da moviemntação
            cy.request({
                method: 'PUT',
                url: `/transacoes/${res.body[0].id}`,
                //headers: { Authorization: `JWT ${token}`},
                body:{
                    status: true,
                    data_pagamento: Cypress.moment(res.body[0].data_pagamento).format('DD/MM/YYYY'),
                    data_transacao: Cypress.moment().format('DD/MM/YYYY'),
                    descricao: res.body[0].descricao,
                    envolvido: res.body[0].envolvido,    
                    valor: res.body[0].valor,
                    conta_id: res.body[0].conta_id
                }
            }).its('status').should('be.equal',  200)

        })

        cy.request({
            method: 'GET',
            url: '/saldo',
           // headers: { Authorization: `JWT ${token}`},
            //o response é um arrey no body
        }).then(res => {
            let saldoConta
            res.body.forEach(c =>{
                if(c.conta === 'Conta para saldo') saldoConta = c.saldo
            })
            expect(saldoConta).to.be.equal('4034.00')
        })
    })

    it('Should remove a transaction', () =>{
        cy.request({
            method: 'GET',
            url: '/transacoes',
           // headers: { Authorization: `JWT ${token}`},
            qs: {descricao: 'Movimentacao para exclusao'}
        }).then(res => {
             cy.request({
                method: 'DELETE',
                url: `/transacoes/${res.body[0].id}`,
               // headers: { Authorization: `JWT ${token}`},
            }).its('status').should('be.equal', 204)
          })
    })
    
})
