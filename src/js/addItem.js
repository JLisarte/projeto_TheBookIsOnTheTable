import { Livro } from "../entities/Book.js"
import { Revista } from "../entities/Magazine.js"
import { Biblioteca } from "../entities/Library.js"
import { saveAcervo, getAcervo } from "../js/localStorage.js"

const formAddItem = document.getElementById("my-form")
const inputTitulo = document.getElementById("title")
const inputAutor = document.getElementById("author")
const inputAnoPublicacao = document.getElementById("publicationYear")
const inputType = document.getElementById("type")
const inputGenero = document.getElementById("genre")


export const biblioteca = new Biblioteca([], [])

formAddItem.addEventListener("submit", (e) => {
  e.preventDefault()
  const createId = Date.now()
  let sliceid = createId.toString().slice(-3)
  const codigo = sliceid
  const titulo = inputTitulo.value
  let sliceTitle = titulo.toString().slice(0, 1)
  const tituloShort = sliceTitle.toUpperCase()
  const autor = inputAutor.value
  const anoPublicacao = inputAnoPublicacao.value
  const entidadeBibliografica = inputType.value
  let sliceType = inputType.value.toString().slice(0, 1)
  const tipoShort = sliceType.toUpperCase()
  const genero = inputGenero.value
  let sliceGenre = inputGenero.value.toString().slice(0, 1)
  const generoShort = sliceGenre.toUpperCase()

  formAddItem.reset()

  let idMagazine = `${tipoShort}${tituloShort}${codigo}`
  let idBook = `${tipoShort}${generoShort}${codigo}`

  let item

  if (entidadeBibliografica === "Livro") {
    item = new Livro(
      idBook,
      titulo,
      autor,
      anoPublicacao,
      entidadeBibliografica,
      genero
    )

    biblioteca.adicionarItem(item)
    console.log(
      `Livro Adicionado - código: ${tipoShort}${tituloShort}${codigo}`
    )
  } else if (entidadeBibliografica === "Revista") {
    item = new Revista(
      idMagazine,
      titulo,
      autor,
      anoPublicacao,
      entidadeBibliografica
    )
    biblioteca.adicionarItem(item)
    console.log(`Revista Adicionada - código: ${codigo}`)
  }

  localStorage.setItem("itemBiblioteca", JSON.stringify(item))
  // Salvar novo item na lista do localStorage
  const storedAcervo = getAcervo() || [] // Obter lista do localStorage
  storedAcervo.push(item) // Adicionar o novo item à lista
  saveAcervo(storedAcervo) // Salvar a lista atualizada no localStorage

  console.log(biblioteca)
})

inputType.addEventListener("change", () => {
  const tipo = inputType.value
  if (tipo === "Livro") {
    option_genre.style.display = "block"
  } else {
    option_genre.style.display = "none"
  }
})


