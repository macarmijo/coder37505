// getElementById('id')
// getElementsByClassName('className')
// getElementsByTagName('tagName')

const titles = document.getElementsByClassName('title')
const bienvenida = document.getElementById('bienvenida')
const like = document.getElementsByClassName('like')

//console.log(title)
//console.log(bienvenida.innerHTML)
console.log(like[0])

//innerHTML y innerText
bienvenida.innerHTML = 'Hola, <span style="color:red">cambie mi primer texto</span>'

console.log(titles)
//console.log(typeof(bienvenida.innerHTML))
//Bienvenidxa a mi pagina

//console.log(like)
const colors = ['#ff5733','#2dc818', '#16d4bb', 'yellow', 'blue']

//pasar numeros del 0 al 4
//bienvenida.style.color = colors[]
//console.log(Math.floor(Math.random()*colors.length))


//document.querySelector('.like')
//document.querySelector('#bienvenida')
const caja = document.querySelector('div')
const likes = document.querySelectorAll('.like') //devuelve un array


//caja.innerHTML = caja + '<span>Me gusta POCO</span><span>Me gusta MUCHO</span>'
let dato = {
    nombre : 'Maca',
    apellido : 'armijo'
}

caja.innerHTML += `<span class="like"> ${dato.nombre} </span><span class="like"> ${dato.apellido} </span>`

caja.innerHTML += '<span class="like">' + dato.nombre + '</span><span class="like">' + dato.apellido+ '</span>'


/* let cajasExtra = document.createElement('span')
cajasExtra.innerText = ' No me gusta NADA '
cajasExtra.className = 'like' 

caja.append(cajasExtra) */

/* for(const like of likes){
    like.style.color = colors[randomNumberSinComa]
} */

let randonNumberComa = Math.random()*colors.length
let randomNumberSinComa = Math.floor(randonNumberComa)

console.log(randomNumberSinComa)

bienvenida.style.backgroundColor = colors[randomNumberSinComa]
// Si usara randonNumberSinComa entonces cada vez que actualizo la pagina se fuarda en esa variable un numero aleatorio --> en colors[randonNumberSinComa] siempre tendre el mismo numero. En cambio si ejecuto Math.floor(Math.random()*colors.length) logro que en cada iteracion se genere un numero nuevo ! 
for(let i =0; i < likes.length; i++){
    likes[i].style.backgroundColor = colors[Math.floor(Math.random()*colors.length)]
}


