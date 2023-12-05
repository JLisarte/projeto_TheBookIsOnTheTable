import { EntidadeBibliografica } from "../entities/BibliographicEntity.js"

export class Revista extends EntidadeBibliografica {
  constructor(
    codigo,
    titulo,
    autor,
    anoPublicacao,
    entidadeBibliografica,
    emprestado,
    usuarioEmprestimo,
  ) {
    super(
      codigo,
      titulo,
      autor,
      anoPublicacao,
      entidadeBibliografica,
      emprestado,
      usuarioEmprestimo,
    )
  }
}
