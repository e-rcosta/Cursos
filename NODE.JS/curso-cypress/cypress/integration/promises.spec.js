it('sem teste, ainda', () => {}) 

//incluimos o timeout de 1000 milesegundos para o retorno da função aguardar esse tempo e
//para o retorno ser assincrono usamos o promise
const getSomething = () => {
    return new Promise((resolve, reject) => {
            setTimeout(() =>{
                 resolve(13) 
            }, 1000)
        })
}

const system = () => {
        console.log('init')
        
        getSomething().then( some => {
                console.log(`Something is ${some}`) 
                console.log('end')
    })
}

system()