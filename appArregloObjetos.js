// Arreglos con Objetos


let persona1 = {
    nombre: 'Joe',
    edad: 25
};

let persona2 = {
    nombre: 'Fer',
    edad: 25
};

let persona3 = {
    nombre: 'Neo',
    edad: 25
};

//Arreglo de personas
let personas = [persona1, persona2, persona3];

console.log(personas);

for (let i = 0; i < personas.length; i++ ){
    let persona = personas[i]; //variable para que pueda recorrer.
    console.log(`nombre persona ${persona.nombre} -- edad ${persona.edad}` )

}

