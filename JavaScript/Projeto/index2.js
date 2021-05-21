let cor = "azul";

switch (cor) {
    case "verde":
        console.log("siga")
        break;

    case "amarelo":
        console.log("atenção")
        break;
    
    case "vermelho":
        console.log("para")
        break;    

    default:
        console.log("Sinal quebrado");
}

/**
 * Exibe a tabuada da variavel n
 * esse recurso do javascript é templat string
 */
let n = 5;

for (let i = 1; i <= 10; i++) {
    
    console.log(`${i} X ${n} = ${i*n}`);
}