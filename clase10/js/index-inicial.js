const canciones = [
    {
    id: 1,
    title: "Breezeblocks",
    artist: "alt-J",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/d/d0/Alt-J_-_An_Awesome_Wave.png",
    agregadoALista: false,
    youtubeSrc: ""
    },
    {
    id: 2,
    title: "Stronger than me",
    artist: "Amy winehouse",
    imgSrc: "https://lastfm.freetls.fastly.net/i/u/ar0/ea22d65947e3445d98b82c1904045007",
    agregadoALista: false,
    youtubeSrc: ""
    },
    {
    id: 3,
    title: "Tarot",
    artist: "Bad Bunny",
    imgSrc: "https://i.scdn.co/image/ab67616d0000b27349d694203245f241a1bcaa72",
    agregadoALista: false,
    youtubeSrc: ""
    },
    {
    id: 4,
    title: "Simpathy for the devil",
    artist: "The Rolling Stones",
    imgSrc: "http://www.losrestosdelconcierto.com/wp-content/uploads/2019/08/the-rolling-stones.jpg",
    agregadoALista: false,
    youtubeSrc: ""
    }
]

let container = document.querySelector('.container')
//querySelector va a agarrar 1 solo elemento --> El primero que encuentre
let article = ""

for(cancion of canciones){
    console.log(cancion)
   article += `<article class="box-song" >
                    <img src="${cancion.imgSrc}" alt="" class="img-song">
                    <div class="descripcion">
                        <p>${cancion.title}</p>
                        <p>${cancion.artist}</p>
                    </div>
                    <div class="fav">
                        <svg id="${cancion.id}" class="unlike" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/></svg>
                    </div>
                </article>`
}

container.innerHTML += article

let svgs = document.querySelectorAll('svg')
// querySelector puede recibir ID, CLass o por nombre de etiqueta
let favoritos = []

for (svg of svgs){
    svg.onclick = (e) => {
        console.log(e)
        let element = e.target.parentElement
        element.classList.toggle('like')
        let id = element.attributes.id.value
        
        
        let track = canciones.find(e => e.id == id)
        console.log(track)
        favoritos.push(track)
       
        localStorage.setItem('favoritos', favoritos)

    }
}

//LOCAL STORAGE y SESSION STORAGE
//localstorage vive hasta que lo borramos --> SIN CONEXION CON UN SERVIDOR
//Session Storage --> vive hasta que cerramos el navegador

localStorage.setItem('Nombre', 'Maca') //ejecutando una funcion - mejor dicho un metodo del objeto localStorage

localStorage.setItem('Apellido', 'Armijo')
localStorage.setItem('dni', '213817491')
//Clave es un string y el valor no necesita ser un string
//el valor puede ser cualquier tipo de dato --- SIII puede recibir objetos.
//console.log(localStorage)

for(let i = 0 ; i < localStorage.length; i++){
    let clave = localStorage.key(i)
    //console.log(`para la clave: ${clave}, el valor es: ${localStorage.getItem(clave)}`)
}

let recuperoStorage = localStorage.getItem('Nombre')
//console.log(recuperoStorage) // DEVUELVE un STRING

//Si quiero guardar algo en session --
sessionStorage.setItem('ejemplo', 'GAnamos')
let resucperoSession = sessionStorage.getItem('ejemplo')
//console.log(resucperoSession)

localStorage.removeItem('Nombre') //esto elimina los datos de UNA determinada KEY
localStorage.clear() // esto borra TODO del storage

//JSON --> formato basado en TEXTO PLANO
//convertidor de objeto en string y viceversa para manipular tipos de datos como loq ue tengo en el storage

const formatoJSON = JSON.stringify(canciones[0])
console.log(typeof(formatoJSON)) // string
console.log(typeof(canciones[0])) // objeto

localStorage.setItem('canciones', formatoJSON)

recuperoStorage = JSON.parse(localStorage.getItem('canciones'))
//console.log(recuperoStorage)
// cada vez que voy a buscar algo al storage, NECESITO convertirlo con JSON.parse -- cuando guardo algo en el storage lo convierto en string antes de guardarlo con JSON.stringify


