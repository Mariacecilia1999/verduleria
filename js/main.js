const $ = selector => document.querySelector(selector)


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
                                          </div>
                                          <div><button>Agregar</button></div>
                                          </div>
                                          `
   }
}

const inicializador = () =>{
   mostrarFrutasVerduras(frutasVerduras)
}
window.addEventListener('load', inicializador)