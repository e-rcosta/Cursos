function helloWorld (){
    console.log("Hello World")
}

const saudacao = () => {
    var data = new Date()
    /**
     * Verifica se a hora é menor ou igual a 12 ou 18 e retorna a saudação
     */
    return data.getHours() <= 12? "Bom dia!": data.getHours() <= 18? "Boa tarde!": "Boa Noite!"
}

helloWorld()

console.log('A saudação do momento é ' + saudacao())