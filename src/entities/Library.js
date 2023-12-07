import { Store } from "../entities/Store.js"

export class Biblioteca {
  constructor(users, items) {
    this.acervo = items
    this.usuarios = users
  }

  adicionarItem(item) {
    this.acervo.push(item)
  }

  adicionarUser(user) {
    this.usuarios.push(user)
  }

}
