export class EntidadeBibliografica {
  constructor(codigo, titulo, autor, anoPublicacao, entidadeBibliografica) {
    this.codigo = codigo
    this.titulo = titulo
    this.autor = autor
    this.anoPublicacao = anoPublicacao
    this.entidadeBibliografica = entidadeBibliografica
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
