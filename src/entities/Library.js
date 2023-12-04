import { Store } from "../entities/Store.js"

export class Biblioteca {
  constructor(users, items) {
    this.acervo = items
    this.usuarios = users
  }

  adicionarItem(newItem) {
    //newItem = Store.getAcervo()
    this.acervo.push(newItem)
  }

  listarAcervo() {
    const body = document.getElementById("#tbody")
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
