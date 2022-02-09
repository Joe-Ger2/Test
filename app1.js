//FUNCIONES


function sumar(a,b){
    return a + b;
}

let total = sumar(10,20);
console.log('Total: ' + total);



function imprimirTabla(base, limite){

    for(let i = 1; i <= limite; i++){
        let res = base * i;
        console.log(base + ' x ' + i + ' = ' + res);
    }
}

imprimirTabla(2,5);