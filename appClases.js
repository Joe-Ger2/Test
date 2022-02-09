
//objeto
let carro1 = {
    marca: 'Toyota',
    tipoo: 'Sedan',
    numPuertas: 3
};

//Clase
class Carro{
    
    //constructor
    constructor(marca1, tipo1, numPuertas1){

        this.marca = marca1;
        this.tipo = tipo1;
        this.numPuertas = numPuertas1;

        this.creadoEn = 'Hoy';

    }
}

// new para crear  instancia del objeto o clas
let carro2 = new Carro('Mazda', 'Sedan', 4);

console.log(carro1);
console.log(carro2);