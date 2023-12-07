import { Store } from "../entities/Store.js"

export function createRowCollection(e) {
  const tbody = document.querySelector("#tbody")

  function createTableRow(acervo) {
    const tableRow = document.createElement("tr")
    const tableCheckbox = document.createElement("input")
    tableCheckbox.type = "checkbox"
    tableCheckbox.className = "checkbox"
    const tableCodigo = document.createElement("td")
    const tableTitulo = document.createElement("td")
    const tableAutor = document.createElement("td")
    const tableAnoPublicacao = document.createElement("td")
    const tableTipo = document.createElement("td")
    const tableGenero = document.createElement("td")
    const tableEmprestado = document.createElement("td")
    const tableUsuarioEmprestado = document.createElement("td")

    tableCheckbox.setAttribute("id", acervo.codigo)
    tableCodigo.innerText = acervo.codigo
    tableTitulo.innerText = acervo.titulo
    tableAutor.innerText = acervo.autor
    tableAnoPublicacao.innerText = acervo.anoPublicacao
    tableTipo.innerText = acervo.entidadeBibliografica
    tableGenero.innerText = acervo.genero || " - "
    tableEmprestado.innerText = acervo.emprestado ? "Sim" : "Não"
    tableUsuarioEmprestado.innerText = acervo.usuarioEmprestimo || " - "

    tableRow.appendChild(tableCheckbox)
    tableRow.appendChild(tableCodigo)
    tableRow.appendChild(tableTitulo)
    tableRow.appendChild(tableAutor)
    tableRow.appendChild(tableAnoPublicacao)
    tableRow.appendChild(tableTipo)
    tableRow.appendChild(tableGenero)
    tableRow.appendChild(tableEmprestado)
    tableRow.appendChild(tableUsuarioEmprestado)

    tbody.appendChild(tableRow)
  }

  const deleteButton = document.querySelector("#deleteButton")
  deleteButton.addEventListener("click", () => {
    const checkboxes = document.querySelectorAll(
      "input[type='checkbox']:checked"
    )
    checkboxes.forEach((checkbox) => {
      const row = checkbox.parentNode.parentNode
      const codigo = checkbox.id
      const storedData = e.getAcervo() 

      const indexToRemove = storedData.findIndex(
        (item) => item.codigo === codigo
      )
      if (indexToRemove !== -1) {
        storedData.splice(indexToRemove, 1)
        
        e.saveAcervo(storedData)
        console.log(`Item ${codigo} removido`) 
      }

      row.remove()
    })
  })

  const storeAcervo = e.getAcervo() 
  storeAcervo.forEach((acervo) => {
    createTableRow(acervo) 
  })
}

document.addEventListener("DOMContentLoaded", async () => {
  const myStore = new Store()

  try {
    await myStore.init()
    createRowCollection(myStore)
  } catch (error) {
    console.error("Ocorreu um erro durante a inicialização:", error)
  }
})
