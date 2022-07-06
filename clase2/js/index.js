//CONDICIONALES

let edad = 30
// comparadores <, >, >=, <=
// TIPO DE DATO --> BOOLEAN --> true o false

if (edad != 18) {
    //RESULTADO
    //console.log(edad>18) --> devuelve TRUE
    console.log('Yo se que no tenes 18 años')
}
if (edad < 18) {
    console.log('EUU, vos no podes entrar!')
}

if (edad >= 18) {
    console.log('PODES PASAR, disfruta')
} else {
    console.log('EUU, vos no podes entrar!')
}
// DISTINTO !=
if (edad < 18) {
    console.log('EUU, vos no podes entrar!')
} else if(edad == 18){
    console.log('EUU, vos podes entrar!, pero solo al piso 1')
}else {
    console.log('EUU, vos podes entrar! al piso que quieras')
}

let numero = '5';

//con numero 5 ves mensajes, sino le mandamos un mensaje de usted no puede ver este mensaje
// para comparar NECESITO ==
// === comparador ESTRICTO , no solo mira el valor sino que mira EL TIPO DE DATO
if (numero === 5) {
    console.log('Mensaje exitoso!')    
}

// el IF RECIBE (lo que va dentro de los parentesis) un BOOLEANO. 


// Si sos menor a 18 no pasas
// Si tenes entre 18 y 25 pasas al piso 1
// Si tenes mas de 25 vas al piso 2


if (edad < 18) {
    console.log("no puede pasar")
} else if(edad > 18 && edad <25) {
    // Si tengo un && --> SOLAMENTE va a ser TRUE si todas las condiciones son TRUE. 
} else {
     
}

//OR || --> VA a ser TRUE SI AL MENOS 1 de las condiciones es TRUE.
edad = 18 

if(edad == 18  && edad == 25){
     console.log('GANASTE')
}

//Quiero pedirle al usuario que me ingrese un nombre y apellido
//si ingresa ambos campos que me devuelva un mensaje de bienvenida
// SI solo ingresa el nombre --> solamente diga hola nombre
// si ingresa solo el apellido --> que solo diga hola apellido
// sino no muestra mensaje
let nombre
let apellido
const espacio = ' '

nombre = prompt('Ingresa tu nombre')
apellido = prompt('Ingresa tu apellido')

console.log(typeof(apellido))
console.log(apellido)
console.log(nombre+espacio+apellido)
//si ingresa ambos campos que me devuelva un mensaje de bienvenida
if(nombre != '' && apellido != '' && nombre != null && apellido != null) {
    alert('Hola '+nombre+espacio+
    apellido)
}else if(nombre != '' && nombre != null ) {
    alert('Hola '+nombre)
}else if(apellido != '') {
    alert('Hola '+ apellido)
}else {
   console.log('usted no tiene mensaje porque no ingreso nada :(')
}

((25+5)+(34*45*6+8))*2

if((nombre != '') && (nombre == "MACA" || nombre == 'maca')){
    console.log('Hola' + nombre)
}










