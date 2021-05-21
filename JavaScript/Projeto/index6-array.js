
let carros = ["Polo", "Gol", "Jeta", "Amaroque", 10, new Date(), function(){}];

console.log(carros);
console.log(carros.length);
console.log(carros[5].toLocaleDateString('pt-BR'));
console.log(carros[5].getFullYear());

//função anonima
carros.forEach(function(value, index){
    console.log(index, value);
})