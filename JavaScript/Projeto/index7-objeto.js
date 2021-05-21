let celular = function(){

    this.cor = 'prata';

    this.ligar = function()
    {

        console.log("uma ligação");
        return "ligando";
    }
}

let cel = new celular();

console.log(cel.cor);

console.log(cel.ligar());