// 1 funciones para mostrar la importancia de un codigo bien escrito.
// La primer funcion es mas dificil de saber que hace, pero como se definen bien los nombres de las variables , da una idea de que es el resultado buscado. 
// La segunda funcion en cambio no tiene coherencia los nombres de las variables con lo que hace cada una. Si bien es una funcion mas facil ya que simplemente es una resta para que siempre de positivo, me resulta "mas dificil" poder leerla.

function obtenerResto (numA, numB){
    let resto = numA % numB
    let resultado

    if(resto == 0){
       return resultado = "Es par"
    }

    return resto
}

function probando(a, b){
    let c = 0;

    if(a >= b){
        c = a - b
    }else {
        c = b - a
    }

    return c
}