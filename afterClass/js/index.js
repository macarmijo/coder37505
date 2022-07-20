// Crear una función que reciba tres parámetros: Horas, minutos y segundos, y devolver todo pasado a segundos.

function timeToSeconds(hora, min, seg){
    // 1min - 60seg 
    // 1 hora - 60min -3600seg
    let resultadoEnSegundos = seg + min*60 + hora*3600

    return resultadoEnSegundos
}

let tiempoEnSegundos = timeToSeconds(2, 50, 33)
//alert(tiempoEnSegundos + 's')



// objetos constructor de personas
function Persona(nombre, apodo, hobbies, peliculaFav, lugarResidencia){

    //propiedades y valores - clave y valor
    this.nombre = nombre
    this.apodo = apodo
    this.hobbies = hobbies
    this.peliculaFav = peliculaFav
    this.lugarResidencia = lugarResidencia
    this.presentacion = function(){
        let mensaje = `Hola, soy ${this.nombre}, pero mis amigues me dicen ${this.apodo}.\n Soy de ${this.lugarResidencia} y mis hobbies son ${this.hobbies}`

        return mensaje
    }
}

let persona1  = new Persona('Sebastian', 'Chebi', 'Juego al poker', 'Pulp Fiction', 'Zarate')

//console.log(persona1.presentacion())

for(key in persona1){
    //console.log(persona1[key])
    if(key == 'nombre'){
        console.log('hola ' + persona1[key])
    }
}

