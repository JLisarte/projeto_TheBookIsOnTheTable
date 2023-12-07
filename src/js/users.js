import { Store } from "../entities/Store.js"

export function createRowCollection(e) {
  const tbody = document.querySelector("#tbodyUser")

  // Função para criar uma linha na tabela com os dados do acervo
  function createTableRow(usuarios) {
    const tableRow = document.createElement("tr")
    const tableCheckbox = document.createElement("input")
    tableCheckbox.type = "checkbox"
    const tableCodigo = document.createElement("td")
    const tableNome = document.createElement("td")
    const tableDataNascimento = document.createElement("td")

    tableCheckbox.setAttribute("id", usuarios.registroAcademico)
    tableCodigo.innerText = usuarios.registroAcademico
    tableNome.innerText = usuarios.nome
    tableDataNascimento.innerText = usuarios.dataNascimento

    tableRow.appendChild(tableCheckbox)
    tableRow.appendChild(tableCodigo)
    tableRow.appendChild(tableNome)
    tableRow.appendChild(tableDataNascimento)
    

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
      const storedData = e.getUsuarios() // Obtém os dados atualizados

      // Remove da lista acervo
      const indexToRemove = storedData.findIndex(
        (usuarios) => usuarios.registroAcademico === registroAcademico
      )
      if (indexToRemove !== -1) {
        storedData.splice(indexToRemove, 1)
        // Atualiza o localStorage após a remoção do item específico
        e.saveAcervo(storedData)
        console.log(`Usuário ${registroAcademico} removido`) // Ajuste para exibir o código do item removido
      }

      row.remove()
    })
  })

  const storeUsuarios = e.getUsuarios() // Obter os dados do acervo
  storeUsuarios.forEach((usuarios) => {
    createTableRow(usuarios) // Criar linha na tabela para cada item no acervo
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
