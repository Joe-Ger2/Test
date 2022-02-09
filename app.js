//Ejercicio 4 CICLOS

//WHILE
let gasolina = 3;

while ( gasolina > 0){
    console.log('Gasolina restante ' + gasolina);
    gasolina--;
    
}
console.log('Ya no tiene gasolina')

//FOR

let base = 10;
let limite = 20;

for(let i = 1; i <= limite; i++){
    let res = base * i;
    console.log(base + ' x ' + i + ' = ' + res);
}
