/**
 * Iniciando curso de javaScript 13/08/2020
 */

var olaMundo = 'Olá Mundo - usando variáveis' 
console.log(olaMundo);
console.log(olaMundo);
console.log(olaMundo);
console.log(olaMundo);

/**
 * let tipo de variável que só existe no bloco de comando onde foi criada
 */
let a = 10;
const b = 20;
//nesse caso o operador igual compara os valores das variáveis
console.log( a == b);


/**
 * let tipo de variável que só existe no bloco de comando onde foi criada
 */
let c = 10;
//como o valor está entre aspas, ele é considerado uma string
const d = "10";
/**
 nesse caso o operador igual compara os valores das variáveis + o tipo. 
 Como estou comparando um número com uma string, mesmo os valores sendo iguais o retorno será false, 
 pois são de tipos diferentes
*/
console.log( c === d);


/**
 nesse caso o operador diferente compara se a variávél ou expressão são diferentes. 
 Compara o valor e o tipo de dados. Nesse caso como é um número e uma string o resultado é true
*/
console.log( c !== d);

/**
 nesse caso o operador diferente compara se a variávél ou expressão são diferentes. 
 Compara apenas o valor. Nesse caso como é um número e uma string o resultado é false
*/
console.log( c != d);


/**
 nesse exemplo usamos o operador lógico && (and) que compara o resultado das duas expressções, se ambas
 tiverem o mesmo resultado ele retorna true, caso contrário false 
 */
console.log( c == d && typeof d == 'string');


/**
 nesse exemplo usamos o operador lógico !! (ou) que compara o resultado das duas expressções, 
 que retornará true se alguma expressão for verdadeira. Só retornará false se ambas as 
 expressões forem falsas
 */
console.log( c == d || typeof c == 'string');

/**
 * Uso do if
 */
let cor = "amarelo";

if (cor === "verde") {

    console.log("siga");

} else if (cor === "amarelo") {
    
    console.log("atenção")

} else {

    console.log("pare");
    
} 
