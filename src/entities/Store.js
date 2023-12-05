import { getAcervo, saveAcervo } from "../js/localStorage.js"

export class Store {
  constructor() {
    this.acervo = []
    this.usuarios = []
  }

  async init() {
    try {
      const localStorageAcervo = getAcervo()

      if (!localStorageAcervo || localStorageAcervo.length === 0) {
        await this.fetchAcervoData(
          "https://api-biblioteca-mb6w.onrender.com/acervo"
        )
        saveAcervo(this.acervo) // Salvar itens no localStorage
      } else {
        this.acervo = localStorageAcervo
        console.log("Dados do Acervo do localStorage:", this.acervo)
      }

      await this.fetchUsuariosData(
        "https://api-biblioteca-mb6w.onrender.com/users"
      )

      console.log("Inicialização da Store concluída.")
    } catch (error) {
      console.error("Ocorreu um erro durante a inicialização da Store:", error)
      throw error
    }
  }

  getAcervo() {
    return this.acervo
  }

  async fetchAcervoData(acervoUrl) {
    try {
      const response = await fetch(acervoUrl)
      if (!response.ok) {
        throw new Error("Erro ao buscar os dados do acervo")
      }
      this.acervo = await response.json()
      console.log("Dados do Acervo da API:", this.acervo)

      // Salvar dados no localStorage após obter da API
      localStorage.setItem("acervo", JSON.stringify(this.acervo))
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

  buscarItemNaBiblioteca(item) {
    const biblioteca = new Biblioteca()
    return biblioteca.buscarItem(item)
  }
}

