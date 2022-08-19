const formulario = document.querySelector('#formulario')
const mensajeError = document.querySelector('.errorFormulario')
const contrasena = document.querySelector('input[type="password"]')
//console.log(contrasena)

//para formulario usamos SUBMIT --> una vez que envio la informacion con un input del tipo submit
formulario.addEventListener('submit', validar)

function validar(e){
    e.preventDefault()
    console.log(e)
    let formArray = e.target
    console.log(e)

    let usuario = formArray[0]
    let contrasena = formArray[1]

    //console.log(mensajeError)

    if(usuario.value.length < 5){
        mensajeError.style.display = 'block'
        mensajeError.innerText = '* Error! El usuario debe tener mas de 5 caracteres!!'
        mensajeError.style.color = 'red'
    }else{
        mensajeError.style.display = 'none'
    }

    //contrase.value cuando tiene informacion en el input --> me deberia dar true .. como lo niego con ! --> FALSE
    // contrasena.value NO tiene informacion en su input --> false PERO ! lo niego --> TRUE
    if(!contrasena.value){
        //resolver lo que esta aca adentro SI Y SOLO SI esa comparacion es TRUE
        mensajeError.style.display = 'block'
        mensajeError.innerText = '* Error! la contraseña no puede estar vacia'
        mensajeError.style.color = 'red'
    }
    
}

/* formulario.addEventListener('submit', function validar(){

}) */

/* formulario.onsubmit = () => {

}  */

let less = document.querySelector(".less")
let more = document.querySelector(".more")
let resultado = document.querySelector('.resultado')
let contador = 0

more.onclick = (e) => {
    //console.log(e)
    //contador = contador + 1
    contador += 1
    resultado.innerText = contador
}

less.addEventListener('click', function(e){
    console.log(e)
    //contador = contador - 1
    contador -= 1
    resultado.innerText = contador
})

let doubleClick = document.querySelector('.doubleClick')
//console.log(doubleClick)

doubleClick.ondblclick = (e) => {
    console.log(doubleClick)
    console.log(doubleClick.children[1])
    //span
    doubleClick.children[0].classList.toggle('notShow')
    //iframe
    doubleClick.children[1].classList.toggle('show')

    //cuando hago doble click apraezca la imagen y cuando vuelvo a hac er doble click, desaparezca --> display: none -- display: block
}

const sweetAlert = document.querySelector('.sweetAlert')
const notification = document.querySelector('.notification')
const luxonHTML = document.querySelector('.luxon')

sweetAlert.onclick = (e) => {
    swal({
        title: "STOP! Antes de pasar a lo siguiente",
        text: "estas seguro que queres eliminar la imagen?",
        icon: "success", //success, info, error, warning
        buttons: ["Cancel", "Do it!"]
    })
    .then((result) => {
        console.log(result)
        //Cuando dan click en Cancel --> NULL
        //cuando dan click en Confirm --> TRUE
        if(result){
            swal({
                title: "Imagen Borrada",
                icon: "success", //success, info, error, warning
            })
        }
    })
}


notification.onclick = e => {
    Toastify({
        text: "Esto es una notificacion",
        style: {
          background: 'green',
            color: 'black'
        },
        position: 'left',
        gravity: 'bottom',
        duration: 2000,
        stopOnFocus: true,
        destination: 'https://www.youtube.com/watch?v=l5Ek_HoQwwg',
        close: true
      }).showToast();
}

const DateTime = luxon.DateTime

/* aHORA SI, puedo ejecutar ejemplos de luxon */