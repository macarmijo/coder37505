// FOR 

//for(inicio, hasta cuando, actualizacion){
    //El codigo que quiero repetir
//} --> HASTA una cierta CANTIDAD DE VECES
// for(let i=0; i<5; i = i+1 )
// i= i+1 -->  i++ 
// i = i +2 --> i += 2

// WHILE y Do WHILE 
// while (condicion --> sea verdadera  ){ --> una vez que la condicion me de falso --> rompo el bucle
    //resolve 
//}

// do{
    //resolve
//}while(condicion)
let i = 0;

for(i=0; i<1; i++){

}

let nombre = '' // --> GLOBAL

//FUNCIONES
function saludar() {
    //AMBIENTE LOCAL -- SCOPE LOCAL
    //console.log('Hola Maca') 
    let nombre = prompt('Ingresa tu nombre')
    let resultado = 'Hola' + nombre
    
    return resultado
}
saludar()
//console.log(saludar())

// function sumar(){
//     let resultado = 4+5

//     return resultado
// }

//console.log(sumar())
// restar()
// division()

function sumar(milanesa, bondiola){
    let resultado = milanesa + bondiola
    
    return resultado
}
let resultadoSuma = sumar(5, 4)
// 5 --> milanesa
// 4 --> bondiola


console.log(resultadoSuma)

//nombre = prompt('Ingresa tu nombre')
let saludoAmigo = saludar(nombre)

function saludar(milanesa) {
    let resultado = 'Hola ' + milanesa

    return resultado
}

//console.log(saludoAmigo)

//FUNCION ANONIMA
let suma = function(num1, num2){ 
    return num1+num2 
}
//console.log(suma(19,56))

//FUNCION FLECHA
let sumador1 = (num1, num2) => { return num1+num2 }
const sumador2 = (num1, num2) =>  num1 + num2 // RETURN IMPLICITO
//default tiene un return. 
//console.log(sumador(60,  70))

//pedirle al usuario que ingrese numeros para prender ciertas lamparitas . si ingres: 1 --> verde - ingresa 2: prenda: roja - ingresa: 3 --> amarilla. ingrese: 4 --> cierre el programa. 

// let ejemplo = prompt('ingresa un numero')
// console.log(typeof(ejemplo))

let opc = parseInt(prompt('Ingrese 1 para prender la luz verde \n Ingrese 2 para prender la luz roja \n Ingrese 3 para prender la luz amarilla \n Ingrese 4 para apagar el programa\n'))

do{
    switch(opc){
        case 1:
            console.log('prendi luz VERDE')
            opc = parseInt(prompt('Ingrese 1 para prender la luz verde \n Ingrese 2 para prender la luz roja \n Ingrese 3 para prender la luz amarilla \n Ingrese 4 para apagar el programa\n'))
            break;
        case 2: 
            console.log('prendi luz ROJA')
            opc = parseInt(prompt('Ingrese 1 para prender la luz verde \n Ingrese 2 para prender la luz roja \n Ingrese 3 para prender la luz amarilla \n Ingrese 4 para apagar el programa\n'))
            break;
        case 3: 
            console.log('prendi luz AMARILLA')
            opc = parseInt(prompt('Ingrese 1 para prender la luz verde \n Ingrese 2 para prender la luz roja \n Ingrese 3 para prender la luz amarilla \n Ingrese 4 para apagar el programa\n'))
            break;
        case 4:
            console.log('chau')
            break;
        default:
            console.log('Ingresaste CUALQUIER COSA, lee bien!')
            opc = parseInt(prompt('Ingrese 1 para prender la luz verde \n Ingrese 2 para prender la luz roja \n Ingrese 3 para prender la luz amarilla \n Ingrese 4 para apagar el programa\n'))
            break

    }
}while(opc != 4)

// while( opc!= 4 ){
//     switch(opc){
//         case 1:
//             console.log('prendi luz VERDE')
//             opc = parseInt(prompt('Ingrese 1 para prender la luz verde \n Ingrese 2 para prender la luz roja \n Ingrese 3 para prender la luz amarilla \n Ingrese 4 para apagar el programa\n'))
//             break;
//         case 2: 
//             console.log('prendi luz ROJA')
//             opc = parseInt(prompt('Ingrese 1 para prender la luz verde \n Ingrese 2 para prender la luz roja \n Ingrese 3 para prender la luz amarilla \n Ingrese 4 para apagar el programa\n'))
//             break;
//         case 3: 
//             console.log('prendi luz AMARILLA')
//             opc = parseInt(prompt('Ingrese 1 para prender la luz verde \n Ingrese 2 para prender la luz roja \n Ingrese 3 para prender la luz amarilla \n Ingrese 4 para apagar el programa\n'))
//             break;
//         default:
//             break
    
//     }
// }