import { Store } from "../entities/Store.js"
//import { getItem } from "../js/localStorage.js"

export function createRowFromStorage(e) {
  const storedData = e.getAcervo()

  const tbody = document.querySelector("#tbody")

  storedData.forEach((acervo) => {
    const tableRow = document.createElement("tr")
    const tableCodigo = document.createElement("td")
    const tableTitulo = document.createElement("td")
    const tableAutor = document.createElement("td")
    const tableAnoPublicacao = document.createElement("td")
    const tableTipo = document.createElement("td")
    const tableGenero = document.createElement("td")
    const tableEmprestado = document.createElement("td")
    const tableUsuarioEmprestado = document.createElement("td")

    tableCodigo.innerText = acervo.codigo
    tableTitulo.innerText = acervo.titulo
    tableAutor.innerText = acervo.autor
    tableAnoPublicacao.innerText = acervo.anoPublicacao
    tableTipo.innerText = acervo.entidadeBibliografica
    tableGenero.innerText = acervo.genero
    if (acervo.genero == undefined) {
      tableGenero.innerText = " - "
    }
    tableEmprestado.innerText = acervo.emprestado ? "Sim" : "Não"
    tableUsuarioEmprestado.innerText = acervo.usuarioEmprestimo

    tbody.appendChild(tableRow)
    tableRow.appendChild(tableCodigo)
    tableRow.appendChild(tableTitulo)
    tableRow.appendChild(tableAutor)
    tableRow.appendChild(tableAnoPublicacao)
    tableRow.appendChild(tableTipo)
    tableRow.appendChild(tableGenero)
    tableRow.appendChild(tableEmprestado)
    tableRow.appendChild(tableUsuarioEmprestado)
  })

  
}
