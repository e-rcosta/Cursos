let agora = new Date();

//Dia
console.log(agora.getDate());
//Mês - essa variável é um arrey que começa do 0, logo o valor mostrado será o mês atual -1
console.log(agora.getMonth());
//Ano
console.log(agora.getFullYear());
//no formato do pais do seu cliente
console.log(agora.toLocaleDateString('pt-BR')) 

