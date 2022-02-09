// OBJETOS

function describirPersona(p){
    // En lugar de ('), es el simbolo que esta con el cerrar llave.
    console.log(`${p.nombre} tiene una edad de ${p.edad} y mide ${p.estatura}`);

}

//declarar objeto persona
let persona = {
    nombre: 'Joe',
    edad: 25,
    estatura: 1.68
}
describirPersona(persona);

