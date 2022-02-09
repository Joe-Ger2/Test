// Usando clases en JS.

class Carro{
    
    //constructor
    constructor(marca1, tipo1, numPuertas1){

        this.marca = marca1;
        this.tipo = tipo1;
        this.numPuertas = numPuertas1;

        this.creadoEn = 'Hoy';
        // False porque el auto esta apagado.
        this.encendido = false;
        this.gasolina = 100;

    }

    //MEtodo para encender el carro
    encenderCarro(){

        if(this.encendido){
            console.error('El carro ya estaba encendido');
        }else{
            this.encendido = true;
            console.log('El carro esta encendido');
        }
        return this;        
    }

    realizarViaje(consumo){

        if(!this.encendido) return; console.log('Carro apagado');

        if(consumo > this.gasolina) return console.log('No tiene gasolina' + this.gasolina);        
            
        this.gasolina = this.gasolina - consumo;
        return 'Le queda: ' + this.gasolina;
            
    }
}

// new para crear  instancia del objeto o clas
let carro = new Carro('Mazda', 'Sedan', 4);

console.log(carro);