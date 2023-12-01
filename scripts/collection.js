function createRow(EntidadeBibliografica) {
  const tableRow = document.createElement("tr")
  const tableTitulo = document.createElement("td")
  const tableAutor = document.createElement("td")
  const tableAnoPublicacao = document.createElement("td")
  const tableTipo = document.createElement("td")
  const tableGenero = document.createElement("td")
  const tableEmprestado = document.createElement("td")
  const tableUsuarioEmprestado = document.createElement("td")

  tableTitulo.innerText = EntidadeBibliografica.titulo
  tableAutor.innerText = EntidadeBibliografica.autor
  tableAnoPublicacao.innerText = EntidadeBibliografica.anoPublicacao
  tableTipo.innerText = EntidadeBibliografica.tipo
  tableGenero.innerText = EntidadeBibliografica.genero
  tableEmprestado.innerText = EntidadeBibliografica.emprestado ? "Sim" : "Não"
  tableUsuarioEmprestado.innerText = EntidadeBibliografica.usuarioEmprestimo

  tableRow.appendChild(tableTitulo)
  tableRow.appendChild(tableAutor)
  tableRow.appendChild(tableAnoPublicacao)
  tableRow.appendChild(tableEmprestado)
  tableRow.appendChild(tableUsuarioEmprestado)

  return tableRow
}
