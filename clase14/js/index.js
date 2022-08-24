//AJAX

// Javascript asincrono --> permite que mi web funcione de forma asincronica

//Tipo de peticiones POST GET PUT y DELETE
//POST se usa para enviar info
//GET se usa para obtener info
//PUT crear o modificar un recurso EN el servidor
//DELETE elimina un recurso del servidor

const main = document.querySelector('.main')
let url = 'http://hp-api.herokuapp.com/api/characters/id' 
//url es el ENDPOINT ! 

fetch(url)
    .then((response) => {
        //console.log(response.json()) // esto es una promesa por eso necesito OTRO .then para obtener la informacion que estoy buscando
        return response.json()
    })
    .then((json) => {
        console.log(json)
        //let personajes = json.results
        let personajes = json

        personajes.forEach(personaje => {
            const {name, image, house} = personaje
            
            main.innerHTML += `<article class="product">
                                    <div class="imagen">
                                        <img src="${image}" alt="${name}">
                                    </div>
                                    <div class="descripcion">
                                        <h3>${name}</h3>
                                        <p>${house}</p>
                                        <div class="boton">Ver detalle</div>
                                        <input type='hidden' class='info-id' value="${name}"/>
                                    </div>
                                </article>`

        })
    })
    .catch((error) => console.log(error))

// API -- > pueden armar sus propias apis
// enviar datos del formulario via POST
// a que ruta acceder --> arman COMO USTDS quieren esas rutas por ejemplo con el dato del ID

