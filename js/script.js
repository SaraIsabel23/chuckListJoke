// Capturar boton <button id="fetchJoke">Obtener Chiste</button>-ok
// Al clickar hacemos fetch y traemos un chiste -ok
// Crear listado de chiste en DOM.-ok
// Guardar esos chistes en localStorage.-ok
// Si recargamos página, mantener chistes guardados en localStorage-ok
// Crear un boton que borre todos los chistes, o un boton que borre cada chiste. casi ok
// Desapareciendo así del DOM y del localStorage
//## Pistas e ideas

//La idea podría ser la siguiente 
//- Manejador de click en el botón "Obtener Chiste"
//- Una función para obtener un chiste de Chuck Norris desde la API
//- Una función para renderizar la lista de chistes en el DOM
//- Una función para guardar la lista de chistes en localStorage
//- Una función para cargar la lista de chistes desde localStorage

//revisar si fuera necesario `JSON.stringify` y `JSON.parse` para los datos del localStorage

const fetchJoke = document.getElementById("fetchJoke")
const jokeList = document.getElementById("jokeList")


function obtenerChistesGuardados() {
  const chistesGuardados = localStorage.getItem("misChistes")
  if (!chistesGuardados) return []
  return JSON.parse(chistesGuardados)
}

function guardarChistes(listaDeChistes) {
  localStorage.setItem("misChistes", JSON.stringify(listaDeChistes))
}


function eliminarChiste(chiste, elementoHTML) {
  
  const chistes = obtenerChistesGuardados()
  const indice = chistes.indexOf(chiste)

  if (indice !== -1) {
    chistes.splice(indice, 1)
    guardarChistes(chistes)
  }

  
  elementoHTML.remove()
}


function mostrarChistes() {
  
}


function traerChistes() {
  return fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error en la petición: ${response.status}`)
      }
      return response.json()
    })
    .then((data) => data.value)
}

fetchJoke.addEventListener("click", () => {
  traerChistes()
    .then((chisteNuevo) => {
      const chistes = obtenerChistesGuardados()
      chistes.push(chisteNuevo)
      guardarChistes(chistes)

      añadirChisteAlDOM(chisteNuevo)
    })
    .catch((error) => {
      console.error("Hubo un error:", error)
    })
})


function añadirChisteAlDOM(chiste) {
  const li = document.createElement("li")

  const texto = document.createElement("span")
  texto.textContent = chiste

  const btn = document.createElement("button")
  btn.textContent = "Eliminar"
  btn.classList.add("delete-btn")

  btn.addEventListener("click", () => {
    eliminarChiste(chiste, li)
  })

  li.appendChild(texto)
  li.appendChild(btn)
  jokeList.appendChild(li)
}