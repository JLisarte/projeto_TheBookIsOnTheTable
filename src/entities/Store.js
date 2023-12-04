import { Biblioteca } from "./Library.js"

export class Store {
  constructor() {
    this.acervo = []
    this.usuarios = []
    
  }

  async init() {
    try {
      await this.fetchAcervoData(
        "https://api-biblioteca-mb6w.onrender.com/acervo"
      )
      await this.fetchUsuariosData(
        "https://api-biblioteca-mb6w.onrender.com/users"
      )
    } catch (error) {
      console.error("Ocorreu um erro durante a inicialização da Store:", error)
      throw error
    }
  }

  async fetchAcervoData(acervoUrl) {
    try {
      const response = await fetch(acervoUrl)
      if (!response.ok) {
        throw new Error("Erro ao buscar os dados do acervo")
      }
      this.acervo = await response.json()
      console.log("Dados do Acervo:", this.acervo)
    } catch (error) {
      console.error("Ocorreu um erro ao buscar os dados do acervo:", error)
      throw error
    }
  }

  async fetchUsuariosData(usuariosUrl) {
    try {
      const response = await fetch(usuariosUrl)
      if (!response.ok) {
        throw new Error("Erro ao buscar os dados dos usuários")
      }
      this.usuarios = await response.json()
      console.log("Dados dos Usuários:", this.usuarios)
    } catch (error) {
      console.error("Ocorreu um erro ao buscar os dados dos usuários:", error)
      throw error
    }
  }

  getAcervo() {
    return this.acervo
  }
  
  buscarItemNaBiblioteca(item) {
    const biblioteca = new Biblioteca()
    return biblioteca.buscarItem(item)
  }
}


