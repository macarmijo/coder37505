// TIPO de DATO
// Strings, number, Boolean, Objeto

let persona = {
    'nombre': '',
    'apellido': 'Machin Urbay',
    'edad': 26,
    'esBostero': true
}

//console.log(persona.nombre)
persona.nombre = 'Gustavo'
//console.log(persona)

persona.esDeRiver = false

//console.log(persona['nombre'])

// CONSTRUCTOR DE OBJETOS
function Persona(nombre, apellido, edad){
    this.name = nombre
    this.lastName = apellido
    this.age = edad
}

const persona1 = new Persona('Joaquin', 'silva', 38)
const persona2 = new Persona('Tomas', 'Bessone', 15)

persona1.otraPropiedad = 'Lo logramos'

//console.log(persona1)
//console.log(persona2)

//CONSTRUCTOR
function PersonaNueva(nombre, apellido, edad){
    this.name = nombre
    this.lastName = apellido
    this.age = edad
    this.saludar = function(){console.log('Hola '+ this.name)} // saludar() METODO
}

const personaNueva1 = new PersonaNueva('Flor', 'Andres', 20)
//console.log(personaNueva1.saludar())


//saludar es un METODO y name, lastName, age son PROPIEDADES
personaNueva1.name
personaNueva1.lastName
personaNueva1.age

personaNueva1.saludar()

class PersonaClase {
    constructor(nombre, apellido, edad) {
        this.name = nombre
        this.lastName = apellido
        this.age = edad
    }
    saludar(){
        console.log('Hola ' + this.name)
    }
    decirAdios(){
        console.log('Hasta Mañana')
    }
   
}

const personaClase1 = new PersonaClase('Bruno', 'Simone', 29)
console.log(personaClase1)

//Consigna: A partir de los ejemplos mostrados la primera clase, y en función del tipo de simulador que hayas elegido, deberás: Crear al menos un objeto para controlar el funcionamiento de tu simulador. Incorporar sus propiedades y su constructor. Invocar a ese objeto en algún momento donde el usuario realice alguna acción.Utilizar sus métodos.

function Comidas(coc, ingredientePpal, guarn, huevo, cant){
    this.coccion = coc
    this.ingredientePrincipal = ingredientePpal
    this.guarnicion = guarn
    this.aCaballo = huevo
    this.cantidad = cant
}

const milanesa = new Comidas('horno','carne', 'fritas', true, 5)
console.log(milanesa)

for(key in milanesa){
    console.log(key+': '+milanesa[key])
}



