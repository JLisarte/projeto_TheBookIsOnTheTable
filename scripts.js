class EntidadeBibliografica {
  constructor(titulo, autor, anoPublicacao, codigo) {
    this.titulo = titulo
    this.autor = autor
    this.anoPublicacao = anoPublicacao
    this.codigo = codigo
    this.emprestado = false
    this.usuarioEmprestimo = null
  }

  emprestar(usuario) {
    if (this.emprestado == true) {
      console.log("Está emprestado")
    } else {
      this.emprestado = true
      this.usuarioEmprestimo = usuario
    }
  }

  devolver() {
    if (this.emprestado == false) {
      console.log("Não está emprestado")
    } else {
      this.emprestado = false
      this.usuarioEmprestimo = null
    }
  }
}

class Livro extends EntidadeBibliografica {
  constructor(
    titulo,
    autor,
    anoPublicacao,
    codigo,
    emprestado,
    usuarioEmprestimo,
    genero
  ) {
    super(titulo, autor, anoPublicacao, codigo, emprestado, usuarioEmprestimo)
    this.genero = genero
  }
}

const generoLivro = {
  ACAO: "Acao",
  SUSPENSE: "Suspense",
  COMEDIA: "Comedia",
  TERROR: "Terror",
}

class Revista extends EntidadeBibliografica {
  constructor(
    titulo,
    autor,
    anoPublicacao,
    codigo,
    emprestado,
    usuarioEmprestimo
  ) {
    super(titulo, autor, anoPublicacao, codigo, emprestado, usuarioEmprestimo)
  }
}

class Usuario {
  constructor(nome, registroAcademico, dataNascimento) {
    this.nome = nome
    this.registroAcademico = registroAcademico
    this.dataNascimento = dataNascimento
  }
}

class Biblioteca {
  constructor(users, items) {
    this.acervo = items
    this.usuarios = users
  }

  adicionarItem(item) {
    this.acervo.push(item)
  }

  listarAcervo() {
    const body = document.getElementById("#tbody")

    this.acervo.forEach((element) => {
      console.log(element)
      const newRow = createRow(element)
      body.appendChild(newRow)
    })
  }

  adicionarUser(user) {
    this.usuarios.push(user)
  }

  emprestarItem(cod, user) {
    const item = this.acervo.find((element) => element.codigo === cod)
    if (!item) {
      console.log("Item não encontrado")
      return
    }
    item.emprestar(user)
  }

  devolverItem(cod) {
    const item = this.acervo.find((element) => element.codigo === cod)
    if (!item) {
      console.log("Item não encontrado")
      return
    }
    item.devolverItem()
  }
}

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

const biblioteca = new Biblioteca([], [])

const formAddItem = document.getElementById("my-form")

const inputTitulo = document.getElementById("title")
const inputAutor = document.getElementById("author")
const inputAnoPublicacao = document.getElementById("publicationYear")
const inputType = document.getElementById("type")
const inputGenero = document.getElementById("genre")

formAddItem.addEventListener("submit", (e) => {
  e.preventDefault()
  const titulo = inputTitulo.value
  const autor = inputAutor.value
  const anoPublicacao = inputAnoPublicacao.value
  const tipo = inputType.value
  const genero = inputGenero.value

  console.log(tipo)
  console.log(typeof tipo)
  if(tipo === "book") {
    item = new Livro(titulo, autor, anoPublicacao, tipo, genero)
    biblioteca.adicionarItem(item)
  } else if (tipo === "magazine") {
    item = new Revista(titulo, autor, anoPublicacao, tipo)
    biblioteca.adicionarItem(item)
  }
})

// inputType.addEventListener("change", () => {
//   const tipo = inputType.value
//   const option_genre = document.getElementById("option_genre")
//   if (tipo === "book") {
//     option_genre.style.display = "block"
//   } else {
//     option_genre.style.display = "none"
//   }
// })