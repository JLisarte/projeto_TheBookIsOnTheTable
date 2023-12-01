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
