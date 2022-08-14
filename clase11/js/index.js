//OPERADOR avanzados
//++ --> abreviada de sumar 1

contador = 0

for (let i=0; i<7; i++){
    contador = contador + 1
    contador += 1
    contador++
    //elijan su propia aventura
}

//IF TERNARIO
//resuelve el if en 1 linea !!!!! 
/*let edadUsuario = prompt('Cuantos años tenes?:') //Esto devuelve SIEMPRE un STRING
let edad = parseInt(edadUsuario)
let permiso = false

if(edad > 18){
    permiso = true
}else{
    permiso = false
}

 if(permiso){
    alert('Podes entrar')
}else{
    alert('Amdate a tu casa')
} */

function consologear(mensaje){
    console.log(mensaje)
}

// CONDICION ? codigo1 : codigo2
//edad > 18 ? consologear('podes entrar') : consologear('andate a tu casa')
//permiso ?  alert('Podes entrar'): alert('Podes entrar')

//EJEMPLO
let article 
/* article += `<article class="box-song" >
<img src="" alt="" class="img-song">
<div class="descripcion">
    <p></p>
    <p></p>
</div>
<div class="fav  ${permiso ? 'd-none' : 'd-inline-block'}">
    <svg id="${cancion.id}"  data-id="id-${cancion.artist}" class="${cancion.like ? 'liked' : 'unlike'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/></svg>
</div>
</article>` */

//Operadores LOGICOS --> los mismos que usamos dentro del if
// AND , OR
//AND : todas las cosas qu estoy comparando devuelvan TRUE para que el resultado final sea TRUE
//OR : con que AL MENOS UNA sea TRUE --> el resultado devuelve true

let carrito = []

/* if(carrito.length === 0 ){
    alert('Dejaste el carrito vacio')
} */
   
    carrito.length == 1 && alert('Dejaste el carrito vacio') 
    //SOLO lo cumple cuando es verdadero la condicion

const usuario = {
    nombre: 'Franco Lopez',
    edad: 24
}

let diaDeRegistro = usuario && usuario.edad >= 25 && new Date()
//console.log(diaDeRegistro)
usuario.fechaDeRegistro = diaDeRegistro
//console.log(usuario)

//EN caso que Algun dato del AND sea FALSE --> se devolvera falso ---> si todo es true ---> Realiza la accion que le di al final !!!

//FALSY o TRUTHY
//FALSY es la representacion booleana de falso
// valores falsy : NULL, Undefined, NAN, '', 0
if(null){
    console.log('ENTRE AL IF')
}

/* console.log( 0 || 'falsy')
console.log( null || 'falsy')
console.log( 40 || 'falsy')
console.log( undefined || 'falsy')
console.log( NaN || 'falsy')
console.log( 'hola' || 'falsy')
console.log( '' || 'falsy')


//NUllish --> NULL y UNDEFINED

console.log( 0 ?? 'nullish')
console.log( null ?? 'nullish')
console.log( 40 ?? 'nullish')
console.log( undefined ?? 'nullish')
console.log( NaN ?? 'nullish')
console.log( 'hola' ?? 'nullish')
console.log( '' ?? 'nullish')
 */

// DESESTRUCTURACION
//acceder a las propiedad de un objeto PERO con la desestructuracion lo podemos guardar en variables a utilizar. 
let producto = {
    nombre: 'Camara Nilkon',
    precio: 450,
    descripcion: 'muy buen producto',
    fechaDeCreacion: '11-12-2022',
    colores: {
        oscuros: 'negro',
        claros: 'beige',
        pasteles: 'verde pastel',
        fluor: 'amarillo Fluor'
    }
}

/* let nombre = producto.nombre
let precio = producto.precio */

let {nombre, precio} = producto

console.log(`nombre: ${nombre} y el precio es: ${precio}`) 

let {telefono} = producto // esto retorna UNDEFINES


let {colores: {fluor}} = producto

console.log(fluor);

//PUEDO CREAR UN ALIAS CUANDO DESESTRUCTURO
const item = {
    item_id: 1,
    item_product_name: 'camara video',
    item_price_unit: 10,
}

let {item_id: id,
    item_product_name: productName,
    item_price_unit: unitPrice } = item

console.log(id)


/* function desestructurar(item){

} */

/* const desestructurar = (item) => {
    let {nombre, precio} = item
    console.log(nombre, precio)
} */

const desestructurar = ( {nombre, precio} ) => {
   // let {nombre, precio} = item
    console.log(nombre, precio)
}

desestructurar(producto)

let numeros = [4, 6, 90, 54, 104, 3, 54]

/* for(numero of numeros){

} */

const [a, b,,,c] = numeros
console.log(a, b,c)

//SPREAD --> ...nombreVariable
console.log(...numeros)

let maximo = Math.max(...numeros)
console.log(maximo)

let nombres = ['Macarena', 'Esteban']
let apellidos = ['Armijo', 'Marquez']

const nombrecompleto = [...nombres, ...apellidos]
console.log(nombrecompleto)


const masProductos = {
    ...producto
}

console.log(masProductos)

function sumar(...numeros){
    console.log(numeros)
}

sumar(3, 'hola')
