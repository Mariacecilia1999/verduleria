const $ = selector => document.querySelector(selector)
const obtengoGuardado = (key) => JSON.parse(localStorage.getItem(key))
const guardoDato = (key, array) => localStorage.setItem(key, JSON.stringify(array))
const arrayProductosAgregados = []
const frutasVerduras = [
   {
     "id": 1,
     "emoji": "🍎",
     "tipo": "fruta",
     "precio": 1.0
   },
   {
     "id": 2,
     "emoji": "🍌",
     "tipo": "fruta",
     "precio": 0.5
   },
   {
     "id": 3,
     "emoji": "🍇",
     "tipo": "fruta",
     "precio": 2.0
   },
   {
     "id": 4,
     "emoji": "🍓",
     "tipo": "fruta",
     "precio": 1.2
   },
   {
     "id": 5,
     "emoji": "🥦",
     "tipo": "verdura",
     "precio": 1.5
   },
   {
     "id": 6,
     "emoji": "🥕",
     "tipo": "verdura",
     "precio": 0.8
   },
   {
     "id": 7,
     "emoji": "🌽",
     "tipo": "verdura",
     "precio": 1.0
   },
   {
     "id": 8,
     "emoji": "🥔",
     "tipo": "verdura",
     "precio": 0.7
   },
   {
     "id": 9,
     "emoji": "🍅",
     "tipo": "fruta",
     "precio": 1.3
   },
   {
     "id": 10,
     "emoji": "🥑",
     "tipo": "fruta",
     "precio": 2.5
   }
 ];
 
 

const mostrarFrutasVerduras = (arreglo) =>{
   for(const {id, emoji, precio} of arreglo){
      $('.verdurasYFrutas').innerHTML += `<div class='contenedorProducto'>
                                          <div class='estilosCarta'>
                                             <h3>${emoji}</h3>
                                             <img class='productoAgregadoImg' src='./img/carro.png'>
                                          </div>

                                          <div><button onclick='agregarFruta(${id})'>Agregar</button></div>
                                          </div>
                                          `
   }
}

const mostrarYCerrarCarrito = () =>{
  $('#Carrito').addEventListener('click', () =>{
    $('.mostrarListaDeCompras').classList.add('mostrarCarrito')
  $('#carrito').classList.add('ocultar')
  })
  $('#cerrarCarrito').addEventListener('click', () =>{
    $('.mostrarListaDeCompras').classList.remove('mostrarCarrito')
    $('#carrito').classList.remove('ocultar')
  })
}

const agregarFruta = (id) => {
  const frutaEncontrada = frutasVerduras.find(fruta => fruta.id === id);
  if (frutaEncontrada) {
    const carritoActual = obtengoGuardado('carrito') || []
    carritoActual.push(frutaEncontrada)
    guardoDato('carrito', carritoActual)
  }
  mostrarListaDeProductos(obtengoGuardado('carrito'))
}



const mostrarListaDeProductos = (datos) =>{
  $('#listaProductosAgregados').innerHTML= ''
  for(const {id, emoji, precio} of datos){
    $('#listaProductosAgregados').innerHTML += `<div class='mostrarPrecio'>
                                                <p>${emoji}</p>
                                                <span>$ ${precio}</span>
                                                </div>`
  }
}

const inicializador = () =>{
   mostrarFrutasVerduras(frutasVerduras)
   mostrarYCerrarCarrito()
   if(!(obtengoGuardado('carrito'))){
    guardoDato('carrito', arrayProductosAgregados)
   }else{
    mostrarListaDeProductos(obtengoGuardado('carrito'))
   }
}
window.addEventListener('load', inicializador)