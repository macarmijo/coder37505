const canciones = [
    {
    id: 1,
    title: "Breezeblocks",
    artist: "alt-J",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/d/d0/Alt-J_-_An_Awesome_Wave.png",
    like: false
    },
    {
    id: 2,
    title: "Stronger than me",
    artist: "Amy winehouse",
    imgSrc: "https://lastfm.freetls.fastly.net/i/u/ar0/ea22d65947e3445d98b82c1904045007",
    like: false
    },
    {
    id: 3,
    title: "Tarot",
    artist: "Bad Bunny",
    imgSrc: "https://i.scdn.co/image/ab67616d0000b27349d694203245f241a1bcaa72",
    like: false
    },
    {
    id: 4,
    title: "Simpathy for the devil",
    artist: "The Rolling Stones",
    imgSrc: "http://www.losrestosdelconcierto.com/wp-content/uploads/2019/08/the-rolling-stones.jpg",
    like: false
    }
]

let container = document.querySelector('.container')
//querySelector va a agarrar 1 solo elemento --> El primero que encuentre
let article = ""
let svgs = []
// if ternario --> condicion ? codigo1 : codigo2
function imprimirCanciones(){
    for(cancion of canciones){
       article += `<article class="box-song" >
                        <img src="${cancion.imgSrc}" alt="" class="img-song">
                        <div class="descripcion">
                            <p>${cancion.title}</p>
                            <p>${cancion.artist}</p>
                        </div>
                        <div class="fav">
                            <svg id="${cancion.id}"  data-id="id-${cancion.artist}" class="${cancion.like ? 'liked' : 'unlike'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/></svg>
                        </div>
                    </article>`
    }
    
    container.innerHTML += article

    svgs = document.querySelectorAll('svg');
    
}



//agarra todos los elementos de svg para poder laburarlos.
//queryselector puede recibir id, class o nombre de etiqueta
let resultadoFavoritos = document.querySelector('.resultados');
let recuperoStorage = localStorage.getItem('favoritos');
let favoritos = [];
//condicion si hay datos dentro del storage 
if (recuperoStorage != null){
    favoritos = JSON.parse(recuperoStorage);

    favoritos.map(favorito => {
        let idFav = favorito.id
        canciones[idFav - 1].like = true
        
        resultadoFavoritos.innerHTML += `
            <article class="box-song" id="id-${favorito.id}" >
                <img src="${favorito.imgSrc}" alt="" class="img-song">
                <div class="descripcion">
                    <p>${favorito.title}</p>
                    <p>${favorito.artist}</p>
                </div>  
            </article>`

        console.log(canciones[idFav - 1].like)
    })

    imprimirCanciones()

    for(svg of svgs){
       
        let artista = svg.attributes[1].value.split('-')
        console.log(artista)
    }

    mostrarYGuardarCanciones();
}
//no hay datos dentro del storage
else{ 
    //console.log("hola");
    imprimirCanciones()
    mostrarYGuardarCanciones();
}

// const  cancionesFav = JSON.parse(localStorage.getItem('canciones'))  || []

//funcio para llenar el storage
function mostrarYGuardarCanciones(){
    console.log(svgs)
    for(svg of svgs){
        svg.onclick = (e)=>{
            let element = e.target.parentElement;

            
            //element.classList.toggle('like');
            let id = element.attributes.id.value;
            let track = canciones.find(e => e.id == id);
            //antes de pushear el track voy a verificar si esta repetrido con un if
            //Si existe el track en el storage 
            if(favoritos.includes(track)){
                canciones[track.id -1].like = false
                console.log("Cancion repedita");
                element.classList.remove('liked');
                //tengo que buscar donde esta el track por dentro del array que guarda la info del stora
                //con indexoff
                let trackASacar = favoritos.indexOf(track);
                favoritos.splice(trackASacar,1);
                //cuando quiero agarrar algo por queryselector si uso el atributo id no puedo pasarle el numero !!!
                let trackRepetido = document.querySelector(`#id-${track.id}`);
                //console.log(resultadoFavoritos)
                resultadoFavoritos.removeChild(trackRepetido);
            }else{
                console.log("no se repitio");
                canciones[track.id -1].like = true
                element.classList.add('liked');
                favoritos.push(track);

                resultadoFavoritos.innerHTML += `
                                <article class="box-song" id="id-${track.id}" >
                                    <img src="${track.imgSrc}" alt="" class="img-song">
                                    <div class="descripcion">
                                        <p>${track.title}</p>
                                        <p>${track.artist}</p>
                                    </div>  
                                </article>`
            }
            
            localStorage.setItem('favoritos',JSON.stringify(favoritos));
    
    
        }
    }
}