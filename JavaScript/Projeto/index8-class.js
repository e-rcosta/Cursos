class celular {

    constructor(){

        this.cor = 'prata'

    }

    ligar(){
        console.log("uma ligação");
        return "ligando";
    }
}

let cel = new celular();

console.log(cel.cor);

console.log(cel.ligar());