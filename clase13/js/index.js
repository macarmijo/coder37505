// JS  --------------- es un programa sincronico : se ejecuta de forma lineal, esperando que cada funcion se ejecute para realizar el proximo

//Asincronismo --> me permite ejecutar funciones en paralelo al JS principal
// JS -- > 1er pedido -------------- se ejecuto . 2do pedido ------------ se ejecuto ...
//single thread --> unico hilo 
// 1er pedido , 2do pedido -----------------
// -----------------------------------------    resultado pedido 2 --- resultado pedido 1

function mostrarMensaje(mensaje){
    console.log(mensaje)
}

let time = 3000

//setTimeout(() => {} , time)

//hay funciones que frenan la ejecucion del JS como por ejemplo el alert o el prompt. 

console.log('inicio el proceso')
//alert('HOLAAAAAAAAAAAA') // bloquea

setTimeout(() => {
    mostrarMensaje('estamos en el setTimeOut')
}, time) //no bloquea

console.log('fin del proceso')

//CALL STACK --> la pila por defecto de JS
function multiplicar(a, b){
    let resultado = a*b
    return resultado
}

function elevarAlCuadrado(a){
    let resultado = multiplicar(a, a)
    console.log(resultado)
    return resultado
}

elevarAlCuadrado(5)

//PASO 1: elevarAlCuadrado(5)
//PASO 2: multiplicar(5, 5) + elevarAlCuadrado(5)
//PASO 3: conosole.log(resultado) + elevarAlCuadrado(5)
//PASO 4: elevarAlCuadrado(5)


//EVENT LOOP --> me permite la sincronizacion entre el CALL STACK con estas nuevas tareas ASINCRONICAS como el settimeout.
//CALLBACK QUEUE es la lista paralela por donde se ejecutan las tareas asincronicas y luego son enviadas al callback stack


// PROMESA --> va a "esperar" a que se resuelva el problema planteado y una vez que tenga el resultado me lo envia --> PROMETE devolverme un resultado. 
//TIpo de dato: OBJETO

const eventoAFuturo = (respuesta) => {
    let resultado = new Promise( (resolve, reject) => {
       /*  if(respuesta){
            resolve('Promesa completada')
        }else{
            reject('Promesa Rechazada')
        } */
        setTimeout(() => {
            respuesta ? resolve('Promesa completada') : reject('Promesa Rechazada')
            console.log('ya pase')
        }, time)
    })

    return resultado
}

// tiene 3 estados: pending, fullfilled(resolve) , reject
// SIEMPRE una promesa va a pasar por estado pending. 
// resolve O reject

//console.log(eventoAFuturo(false))

//.then() y .catch()
// .then() --> agarrar el valor de la respuesta si la promesa es FULLFILLED
//.catch() --> agarra el valor de la repsuesta si la promesa es RECAHZADA

// API --> 

eventoAFuturo(false)
.then((resultado) => {
    console.log(resultado)
})
.catch((error) => {
    console.log(error)
})
.finally(() => {
    //SIEMPRE SE ejecuta al final de la secuencia
})


