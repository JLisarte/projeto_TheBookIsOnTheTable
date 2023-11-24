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
    genero,
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
    usuarioEmprestimo,
  ) {
    super(titulo, autor, anoPublicacao, codigo, emprestado, usuarioEmprestimo)
  }
}

class Usuario {
  constructor(
    nome,
    registroAcademico,
    dataNascimento,
  ) {
    this.nome = nome;
    this.registroAcademico = registroAcademico;
    this.dataNascimento = dataNascimento;
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
    this.acervo.forEach(element => {
      console.log(element)
    });
  }
  
  adicionarUser(user){
    this.usuarios.push(user)
  }

  emprestarItem(cod,user){
    const item = this.acervo.find(
      element => element.codigo === cod
    )
    if(!item) {
      console.log("Item não encontrado");
      return
    }
    item.emprestar(user)
  }

  devolverItem(cod){
    const item = this.acervo.find(
      element => element.codigo === cod
    )
    if (!item) {
      console.log("Item não encontrado")
      return
    }
    item.devolverItem()
  }
}

