import { EntidadeBibliografica } from "../entities/BibliographicEntity.js"

export class Revista extends EntidadeBibliografica {
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
