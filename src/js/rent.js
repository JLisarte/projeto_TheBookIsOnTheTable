import { getAcervo, getUsuarios } from "../js/localStorage.js"
import { Store } from "../entities/Store.js"

export function createRowRent() {
  const storedData = getAcervo()
  const storedUsers = getUsuarios()
  const tbody = document.querySelector("#tbodyRent")

  storedData.forEach((acervo) => {
    const tableRow = document.createElement("tr")
    const tableCheckbox = document.createElement("input")
    tableCheckbox.type = "checkbox"
    tableCheckbox.setAttribute("id", acervo.codigo)

    const tableTitulo = document.createElement("td")
    const tableAutor = document.createElement("td")
    const tableAnoPublicacao = document.createElement("td")
    const tableEmprestado = document.createElement("td")
    const tableUsuarioEmprestado = document.createElement("td")

    tableTitulo.innerText = acervo.titulo || "-"
    tableAutor.innerText = acervo.autor || "-"
    tableAnoPublicacao.innerText = acervo.anoPublicacao || "-"
    tableEmprestado.innerText = acervo.emprestado ? "Sim" : "Não"

    const selectElement = document.createElement("select")
    selectElement.disabled = true // Desabilita por padrão

    // Opção padrão para "Selecione um usuário"
    const defaultOption = document.createElement("option")
    defaultOption.disabled = true
    defaultOption.selected = true
    defaultOption.text = "Selecione um usuário"
    selectElement.appendChild(defaultOption)

    if (storedUsers && Array.isArray(storedUsers)) {
      storedUsers.forEach((usuario) => {
        const option = document.createElement("option")
        option.value = usuario.registroAcademico

        option.text = `RA: ${usuario.registroAcademico} - User: ${usuario.nome}` // Concatena o RA e o nome do usuário
        selectElement.appendChild(option)
      })
    } else {
      const option = document.createElement("option")
      option.text = "Nenhum usuário disponível"
      selectElement.appendChild(option)
    }

    // Adiciona evento de escuta para habilitar a seleção do usuário quando o checkbox é marcado
    tableCheckbox.addEventListener("click", () => {
      selectElement.disabled = !tableCheckbox.checked
    })

    tableUsuarioEmprestado.appendChild(selectElement)
    tbody.appendChild(tableRow)
    tableRow.appendChild(tableCheckbox)
    tableRow.appendChild(tableTitulo)
    tableRow.appendChild(tableAutor)
    tableRow.appendChild(tableAnoPublicacao)
    tableRow.appendChild(tableEmprestado)
    tableRow.appendChild(tableUsuarioEmprestado)
  })

  // Adiciona evento para o botão "Emprestar"
  const rentButton = document.querySelector("#rentButton")
  rentButton.addEventListener("click", () => {
    storedData.forEach((acervo) => {
      const checkbox = document.getElementById(acervo.codigo)
      const row = checkbox.parentNode.parentNode
      const select = row.querySelector("select")

      if (checkbox.checked && select.value !== "Selecione um usuário") {
        // Lógica para emprestar o item ao usuário selecionado
        console.log(
          `Item ${acervo.titulo} emprestado para o usuário ${select.value}`
        )
      }
    })
  })
}

document.addEventListener("DOMContentLoaded", async () => {
  const myStore = new Store()

  try {
    await myStore.init()
    createRowRent(myStore)
  } catch (error) {
    console.error("Ocorreu um erro durante a inicialização:", error)
  }
})
