const contenedor = document.getElementById('elDiv')
const boton = document.getElementById('boton')

boton.addEventListener('click', function(evento){
    alert('Hola!')
    evento.stopPropagation()
})
contenedor.addEventListener('click', ()=> {alert('Hola!, soy el div')})