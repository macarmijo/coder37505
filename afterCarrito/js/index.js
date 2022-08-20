const productos = [
    {
    id: 1,
    nombre: "Camara Cannon",
    precio: 2400,
    stock: 5,
    img: 'https://i.ibb.co/3r1VmqY/kisspng-canon-eos-77d-digital-slr-camera-canon-eos-rebel-t-5be1c3af130ce6-668393311541522351078.png'
    },
    {
    id: 2,
    nombre: "Camara Nikon",
    precio: 4500,
    stock: 10,
    img: 'https://i.ibb.co/tXkCRJ3/5a2306d7e8f110-2152834515122449519541.png'
    },
    {
    id: 3,
    nombre: "Camara Video JVC",
    precio: 2800,
    stock: 50,
    img: 'https://i.ibb.co/D8nxvbZ/kisspng-video-cameras-1080p-jvc-zoom-lens-binoculars-phone-5ae22b34e3cde0-7991595815247716369331.png'
    },
    {
    id: 4,
    nombre: "Camara video Sony",
    precio: 8000,
    stock: 5,
    img: 'https://i.ibb.co/zGxkWJG/5a229b502c5419-3296015815122174241816.png'
    },
    {
    id: 5,
    nombre: "Camara Vintage",
    precio: 10000,
    stock: 3,
    img: 'https://i.ibb.co/LY3KJgr/kisspng-camera-camera-5a92ae871df6e3-2739390515195623751227.png'
    },
    {
    id: 6,
    nombre: "Camara Polaroid",
    precio: 9000,
    stock: 15,
    img: 'https://i.ibb.co/ZMqmYwh/kisspng-instant-camera-polaroid-corporation-photography-color-polaroid-cameras-vector-material-5aae6.png'
    }
]

let storage = []

function imprimirDetalle(id, insertBox){
    let producto = productos[id-1]
    const {nombre, precio, stock, img} = producto

    insertBox.innerHTML = `<div>
                                <div class="closePopup">Salir</div>
                                <section class="product-detail">
                                    <div class="imagen">
                                        <img src="${img}" alt="">
                                    </div>
                                    <div class="descripcion-detail">
                                        <h3>${nombre}</h3>
                                        <p><strong>$ ${precio}</strong> - 6 cuotas sin interes</p>
                                        <div class="click">
                                            <span class="less">-</span>
                                            <span class="resultado">0</span>
                                            <span class="more">+</span>
                                        </div>
                                    <div class="botonCarrito">AGREGAR</div>

                                    </div>
                                </section>
                            </div>`

    const closePopup = document.querySelector('.closePopup')
    const more = document.querySelector('.more')
    const less = document.querySelector('.less')
    const resultado = document.querySelector('.resultado')
    const agragarCarrito = document.querySelector('.botonCarrito')
    let contador = 0

    more.onclick = () => {
        contador++
        contador = contador > stock ? stock : contador
        resultado.innerText = contador
    }

    less.onclick = () => {
        contador--
        //console.log(contador)
        contador = contador < 0 ? 0 : contador
        resultado.innerText = contador
    }

    closePopup.onclick = () => {
        popup.classList.add('d-none')
    }
        
    agragarCarrito.onclick = () => {
        if(contador != 0){
            //agrego al carrito
            producto.agregadoAlCarrito = contador
            storage.push(producto)
            sessionStorage.setItem('carrito', JSON.stringify(storage))

            swal({
                title: `Agregaste ${producto.agregadoAlCarrito} ${nombre} a tu carrito!`,
                icon: 'success',
                confirmButtonText: 'Cool'
            })
           
        }else{
            //no agregues al carrito - mensaje error
            swal({
                title: 'Error!',
                text: 'No podemos agregar 0 productos al carrito',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
    }
}



const mainBox = document.querySelector('.main')

//For para insertar productos al main segun mi array de objetos
for(producto of productos){
    //Uso desestructuracion para no repetir producto.propiedad
    const {id, nombre, precio, stock, img} = producto

    //console.log(id)
    mainBox.innerHTML +=  `<article class="product">
                                <div class="imagen">
                                    <img src="${img}" alt="${nombre}">
                                </div>
                                <div class="descripcion">
                                    <h3>${nombre}</h3>
                                    <div class="boton boton-${id}">Ver detalle</div>
                                    <input type='hidden' class='info-id' value="${id}"/>
                                </div>
                            </article>`

    let botonProd = document.querySelector(`.boton-${id}`)
}

const botonesVerDetalle = document.querySelectorAll('.boton')
const popup = document.querySelector('.popupDetalle')


//Como tengo un array donde todos los btoones tienen la misma clase, uso el querySelectorAll y recorro ese array dandoles un evento de onclick
for(verDetalle of botonesVerDetalle){
    verDetalle.onclick = (e) => {
        //popup.style.display = 'flex'
        popup.classList.remove('d-none')
        let id = e.target.nextElementSibling.value
        imprimirDetalle(id, popup)
    }

}