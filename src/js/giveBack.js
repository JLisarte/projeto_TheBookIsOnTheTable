import { getAcervo, saveAcervo } from "../js/localStorage.js"

export function createRowGiveBack() {
  const storedData = getAcervo()
  const tbody = document.querySelector("#tbodyGb")

  storedData.forEach((acervo) => {
    const tableRow = document.createElement("tr")
    const tableCheckbox = document.createElement("input")
    tableCheckbox.type = "checkbox"
    tableCheckbox.setAttribute("id", acervo.codigo)

    const tableTitulo = document.createElement("td")
    const tableEmprestado = document.createElement("td")
    const tableUsuarioEmprestado = document.createElement("td")

    tableTitulo.innerText = acervo.titulo || "-"
    tableEmprestado.innerText = acervo.emprestado ? "Sim" : "Não"
    tableUsuarioEmprestado.innerText = acervo.usuarioEmprestimo || "-"

    tableRow.appendChild(tableCheckbox)
    tableRow.appendChild(tableTitulo)
    tableRow.appendChild(tableEmprestado)
    tableRow.appendChild(tableUsuarioEmprestado)
    tbody.appendChild(tableRow)
  })

  const gbButton = document.querySelector(".gbButton")
  gbButton.addEventListener("click", () => {
    const checkboxes = document.querySelectorAll(
      "#tbodyGb input[type='checkbox']:checked"
    )

    checkboxes.forEach((checkbox) => {
      const acervo = storedData.find((item) => item.codigo === checkbox.id)

      if (acervo) {
        acervo.emprestado = false
        acervo.usuarioEmprestimo = "" // Limpa o usuário emprestado ao devolver
        saveAcervo(storedData)
        console.log(`Item ${acervo.titulo} devolvido`)
      }
    })
  })
}

document.addEventListener("DOMContentLoaded", async () => {
  createRowGiveBack()
})
