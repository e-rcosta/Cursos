function calc (x1, x2, operador){

    return eval(`${x1} ${operador} ${x2}`)
  
}


let resultado = calc (6, 2, "/");

console.log(resultado);