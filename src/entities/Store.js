import { 
  getAcervo, 
  saveAcervo, 
  getUsuarios, 
  saveUsuarios 
} from "../js/localStorage.js"

export class Store {
  constructor() {
    this.acervo = []
    this.usuarios = []
  }

  async init() {
    try {
      const localStorageAcervo = getAcervo()
      const localStorageUsuarios = getUsuarios()

      if (localStorageAcervo.length > 0 && localStorageUsuarios.length > 0) {
        this.acervo = localStorageAcervo
        this.usuarios = localStorageUsuarios
        console.log("Dados do acervo e usuários obtidos do localStorage")
      } else {
        await this.fetchAcervoData(
          "https://api-biblioteca-mb6w.onrender.com/acervo"
        )
        await this.fetchUsuariosData(
          "https://api-biblioteca-mb6w.onrender.com/users"
        )
        saveAcervo(this.acervo)
        saveUsuarios(this.usuarios)
        console.log("Dados do acervo e usuários salvos no localStorage")
      }

      console.log("Store inicializada com sucesso")
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
      console.log("Dados do Acervo API:", this.acervo)
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
      console.log("Dados dos Usuários API:", this.usuarios)
    } catch (error) {
      console.error("Ocorreu um erro ao buscar os dados dos usuários:", error)
      throw error
    }
  }

  getAcervo() {
    return this.acervo
  }

  saveAcervo(acervo) {
    this.acervo = acervo
    saveAcervo(acervo)
  }

  getUsuarios() {
    return this.usuarios
  }

  saveUsuarios(usuarios) {
    this.usuarios = usuarios
    saveUsuarios(usuarios)
  }

  buscarItemNaBiblioteca(item) {
    const biblioteca = new biblioteca()
    return biblioteca.buscarItem(item)
  }
}

