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
