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
