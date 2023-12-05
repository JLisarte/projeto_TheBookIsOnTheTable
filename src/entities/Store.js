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
      const apiData = await this.fetchAcervoData(
        "https://api-biblioteca-mb6w.onrender.com/acervo"
      )

      if (localStorageAcervo && localStorageAcervo.length > 0) {
        // Filtrar apenas os itens da API que não estão presentes no localStorage
        const newItemsFromAPI = apiData.filter((apiItem) => {
          return !localStorageAcervo.some(
            (localItem) => localItem.id === apiItem.id
          ) // Use uma propriedade única para identificar os itens
        })

        this.acervo = [...localStorageAcervo, ...newItemsFromAPI] // Adiciona apenas os novos itens ao acervo
        saveAcervo(this.acervo)
        
      } else {
        this.acervo = apiData // Define a lista do localStorage como a lista da API, se não houver nada no localStorage
        saveAcervo(this.acervo) // Salva os itens da API no localStorage
      }

      await this.fetchUsuariosData(
        "https://api-biblioteca-mb6w.onrender.com/users"
      )
      saveUsuarios(this.usuarios)

      console.log("Inicialização da Store concluída.")
    } catch (error) {
      console.error("Ocorreu um erro durante a inicialização da Store:", error)
      throw error
    }
  }

  getAcervo() {
    return this.acervo
  }

  getUsuarios() {
    return this.usuarios
  }


  async fetchAcervoData(acervoUrl) {
    try {
      const response = await fetch(acervoUrl)
      if (!response.ok) {
        throw new Error("Erro ao buscar os dados do acervo")
      }
      const acervoAPI = await response.json()
      console.log("Dados do Acervo da API:", acervoAPI)

      return acervoAPI
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

