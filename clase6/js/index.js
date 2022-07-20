// TIpo de datos
// string(cadena de texto), number, booleano (TRUE o FALSE), objeto, array

const array = ['maca', 1 , true]

//console.log(array[0]) //--Z el array SIEMPRE arranca con posicion 0

const alumnxs = ['Gregorio', 'Martin', 'Oscar']
alumnxs.push('Gustavo')
alumnxs.push('Melisa')
alumnxs.push('Esteban')
alumnxs.pop()
//console.log(alumnxs.length)
alumnxs.unshift('Estebanquito')
alumnxs.shift()
//console.log(alumnxs)

//HARCODEAR el codigo ---> porque sabes cuantos datos tiene el array, lo agregas a mano. 
/* for (let i=0; i < alumnxs.length ; i++){
    console.log('nombre: '+ alumnxs[i])
} */ 
/* for(alumnx in alumnxs){
    console.log(alumnxs[alumnx])
} */

let alumnxsTexto = alumnxs.join(' ')
//console.log(alumnxsTexto)

let fecha = '2022/04/30' //--string
let fechaArray = fecha.split('/') //--array
//console.log(fechaArray[0])


function Persona(nombre, apellido, dni, fechaNacimiento){
    this.nombre = nombre
    this.apellido = apellido
    this.dni = dni
    this.fechaNacimiento = fechaNacimiento
}

const persona1 = new Persona('Franco', 'Lopez', '38756940', '05-10-1994')
const persona2 = new Persona('Ivan', 'Bonno', '38867345', '15-03-1994')
const persona3 = new Persona('Martin', 'Tomola', '36098563', '25-07-1994')
const persona4 = new Persona('Martina', 'Tomole', '36048563', '26-07-1994')

alumnxs.push(persona1)
alumnxs.push(persona2)
alumnxs.push(persona3)
alumnxs.push('Jorge')
alumnxs.push('Marta')
alumnxs.push(persona4)

//console.log(alumnxs)
//console.log('dni: '+ alumnxs[5].dni)

// Quiero que de este array poder imprimir los nombres y dni de aquellos tipo de dato OBJETO!

let personas = []
//typeof() - bucle 
for(let i=0; i < alumnxs.length; i++){
    console.log(typeof(alumnxs[i]))
    if(typeof(alumnxs[i]) == 'object' ){
        personas.push(alumnxs[i])
    }
}

// franco , dni: 387590002
/* for(let i=0; i < personasArray.length; i++){
    //interpolar --> accion --> TEMPLATE STRING
    console.log(`Soy ${personasArray[i].nombre} y mi dni es ${personasArray[i].dni}`)
}
 */

//console.log(alumnxs)

/* for(let i=0; i<alumnxs.length ;i++){
    
    let tipoDeDato = typeof(alumnxs[i])
    console.log('estoy en la iteracion n°:'+i+ ' y el tipo de dato es un: '+tipoDeDato)
    
    if(tipoDeDato =='object'){
        console.log('Nombre: '+ alumnxs[i].nombre+' DNI: '+ alumnxs[i].dni)
    }
} */

console.log(personas)
for(persona of personas){
    console.log(`Soy ${persona.nombre} y mi dni es ${persona.dni}`)
}


