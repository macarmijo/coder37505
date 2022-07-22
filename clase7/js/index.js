// TIPOS de datos
// String (Todo aquello que este entre comillas), numerico, booleano (true o false), objetos, array
//OBJETO
let objeto1 = {
    'propiedad': 'valor',
    'propiedad2': 2,
    'propiedad3': true,
    'metodo': function(){
        console.log('hola')
    }
}

objeto1.propiedad
objeto1.metodo()

const peliculasFavoritas = ['Thor', 'Buscando a Nemo', 'Lilo y Sticht']

//si yo quiero acceder a 'Thor'
//peliculasFavoritas[0] // --> El array SIEMPRE arranca en 0. 

for (let i=0; i<peliculasFavoritas.length; i++){
   // console.log(peliculasFavoritas[i])
}

//BUCLES --> while, do while, switch, for of, for in, foreach

// CALLBACK --> un callback es una funcion que retorna otra funcion O recibe otra funcion como PARAMETRO

function sumar(num1, num2){
    return num1+num2
}
function restar(num1, num2){
    return num1-num2
}
function dividir(num1, num2){
    return num1/num2
}
function multiplicar(num1, num2){
    return num1*num2
}

        //calculadora(restar   , 56  , 90)
function calculadora(operacion, num1, num2){
    let resultado = operacion(num1, num2)
    //console.log(resultado) 
    return resultado
}

calculadora(restar, 56,90)

const numeros = [1,2,5,7,2,8]
numeros.push(6)
let total = 0

function porCadaUno(array, operacion){
    for (const e of array){
        contador(e)
    }
}
function contador(num){
    //total += num
    total = total + num

    return total
}

//console.log(porCadaUno(numeros, contador))
numeros.forEach((elemento) => console.log(elemento))

numeros.forEach( function(elemento){
    console.log(elemento)
})

function element (elemento){
    console.log(elemento)
}

numeros.forEach(element)

//FIND
const peliculas = [
    {'nombre': 'Elvis', 'duracion': 110},
    {'nombre': 'ET', 'duracion': 120},
    {'nombre': 'Jurassic Park', 'duracion': 200},
    {'nombre': 'Peli super larga', 'duracion': 250}
]

const encontrePeli = peliculas.find( (e) => e.duracion > 120)

console.log(encontrePeli)

const cursos = [
    1,
    {'nombre': 'HTML+CSS', 'precio': 1200},
    {'nombre': 'REACT', 'precio': 4000},
    {'nombre': 'UX/UI', 'precio': 5000}
]

//const cursosActualizados = cursos.map((e)=>console.log(e))
//console.log(cursosActualizados)

//MATH
// DATE

const fecha = new Date()
console.log(fecha.getMonth()) 
// get month , arranca a contar en 0 . Enero es 0 - Diciembre es 11



