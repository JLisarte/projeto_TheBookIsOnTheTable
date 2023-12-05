import { EntidadeBibliografica } from "../entities/BibliographicEntity.js"

export class Livro extends EntidadeBibliografica {
  constructor(
    codigo,
    titulo,
    autor,
    anoPublicacao,
    entidadeBibliografica,
    genero,
    emprestado,
    usuarioEmprestimo,
  ) {
    super(
      codigo,
      titulo,
      autor,
      anoPublicacao,
      entidadeBibliografica,
      genero,
      emprestado,
      usuarioEmprestimo,
    )
    this.genero = genero
  }
}
