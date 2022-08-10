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
let resultadosFav = document.querySelector('.resultados')
let recuperoStorage = localStorage.getItem('favoritos')
let favoritos = []

/* HAY DATOS dentro del storage */
if(recuperoStorage != null){
    favoritos = JSON.parse(recuperoStorage)
    console.log(favoritos)
    mostrarYGuardarCanciones()

}else{ /* NO hay datos dentro del storage */
    mostrarYGuardarCanciones()
}

// querySelector puede recibir ID, CLass o por nombre de etiqueta

function mostrarYGuardarCanciones(){
    for (svg of svgs){
        svg.onclick = (e) => {
            
            let element = e.target.parentElement
            //element.classList.toggle('like')
            let id = element.attributes.id.value
            let track = canciones.find(e => e.id == id)
            console.log(track)
            
            //antes de pushear el track voy a verificar si esta repetido
            //Si existe el track en el storage
            if(favoritos.includes(track)){
                console.log('cancion repetida')
                element.classList.remove('like')
                //tengo que buscar donde esta el track por dentro del array que guarda la info del storage
                //Con indexOf y splice
                let trackASacar = favoritos.indexOf(track)
                favoritos.splice(trackASacar, 1)
                    // cuando quiero agarrar algo por queryselector si uso el atributo ID NO PUEDO pasarle un NUMERO . !!!

                let trackRepetido = document.querySelector(`#id-${track.id}`)
                resultadosFav.removeChild(trackRepetido)

            }else{
                console.log('no se repitio')
                element.classList.add('like')
                favoritos.push(track)

                resultadosFav.innerHTML += `<article class="box-song" id="id-${track.id}">
                        <img src="${track.imgSrc}" alt="" class="img-song">
                        <div class="descripcion">
                            <p>${track.title}</p>
                            <p>${track.artist}</p>
                        </div>
                    </article>`
            }
            
            localStorage.setItem('favoritos', JSON.stringify(favoritos))

        }
    }
}