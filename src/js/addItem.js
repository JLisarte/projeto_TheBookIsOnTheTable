import { Livro } from "../entities/Book.js"
import { Revista } from "../entities/Magazine.js"
import { Biblioteca } from "../entities/Library.js"

const formAddItem = document.getElementById("my-form")
const inputTitulo = document.getElementById("title")
const inputAutor = document.getElementById("author")
const inputAnoPublicacao = document.getElementById("publicationYear")
const inputType = document.getElementById("type")
const inputGenero = document.getElementById("genre")
const option_genre = document.getElementById("option_genre")

export const biblioteca = new Biblioteca([], [])

formAddItem.addEventListener("submit", (e) => {
  e.preventDefault()
  const titulo = inputTitulo.value
  const autor = inputAutor.value
  const anoPublicacao = inputAnoPublicacao.value
  const tipo = inputType.value
  const genero = inputGenero.value

  let item

  if (tipo === "book") {
    item = new Livro(titulo, autor, anoPublicacao, tipo, genero)
    biblioteca.adicionarItem(item)
    console.log(`Livro Adicionado`)
  } else if (tipo === "magazine") {
    item = new Revista(titulo, autor, anoPublicacao, tipo)
    biblioteca.adicionarItem(item)
    console.log(`Revista Adicionado`)
  }

  console.log(biblioteca)
})

inputType.addEventListener("change", () => {
  const tipo = inputType.value
  if (tipo === "book") {
    option_genre.style.display = "block"
  } else {
    option_genre.style.display = "none"
  }
})


