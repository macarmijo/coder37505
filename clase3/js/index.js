// FOR --> repeticion HASTA un cierto numero
// WHILE --> Repeticion HASTA que se cumpla una Condicion VERDADERA

//  i = 0; i < 5;  i = i+ 1
for(let i = 0; i < 5; i += 2){
    console.log('Estas en la posicion '+ i)
}
// `Estas en la posicion ${i}` --> interpolar
// 'Estas en la posicion '+ i --> concatenar
//i++ --> ES LO MISMO --> i=i+1
// i = i + 2 --> i += 2

// let numeroRepeticiones = parseInt(prompt('Ingrese la cantidad de veces que quiere repetir  este codigo'))

// let numRepeticiones = parseInt(numeroRepeticiones)
let valores = 0;

// for(i = 0 ; i < numeroRepeticiones; i++){
//     valores += i*2
//     //valores = valores + i*2
// }

//console.log(valores)

// 1 ciclo --> valores = 0
// 2 ciclo --> i=1 - valores = 0 ---> valores = 2
// 3 ciclo --> i=2 - valores = 2 ---> valores = 6
// 4 ciclo --> i=3 - valores = 6 ---> valores = 12
// 1 ciclo --> valores = 0
// 2 ciclo --> valores = 2
// 3 ciclo --> valores = 4
//--- FIn del ciclo--

//NaN --> is not a number !!!


for(i=0; i<10; i++){
    if(i == 5){
        continue
    }
   // console.log(i)
}


// WHILE - DO while y SWITCH
// pedirle al usuario que ingrese las palabras que quiera ver en pantalla - siendo ESC la palabra para cortar este bucle;
// let palabrasAMostrar = prompt('Ingrese las palabras que quiera ver en pantalla - Ingrese ESC cuando quiera terminar!')
let cadena = 'a'
console.log(cadena)
// while(palabrasAMostrar != 'ESC'){
//     cadena = cadena + palabrasAMostrar

//     palabrasAMostrar = prompt('Ingresa otra palabra')
// }

// console.log(cadena)

//DO WHILE
let palabrasAMostrar

do{
    cadena = cadena + palabrasAMostrar

    palabrasAMostrar = prompt('Ingresa otra palabra')
}while(palabrasAMostrar != 'ESC')

console.log(cadena)

// SWITCH
switch(numero){
    case 1:
        //le digo que hacer
        break;
    case 2: 
        // le digo que hacer
        break;
    default:
        break;
}


