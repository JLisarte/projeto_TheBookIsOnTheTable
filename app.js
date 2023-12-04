import { Store } from "./src/entities/Store.js"
import { createRowFromStorage } from "./src/js/collection.js"
//import { createItem } from "./src/js/createItem.js"
//import { localStore } from "./src/js/localStorage.js"

window.addEventListener("DOMContentLoaded", async () => {
  const myStore = new Store()

  try {
    await myStore.init()
    createRowFromStorage(myStore)
  } catch (error) {
    console.error("Ocorreu um erro durante a inicialização:", error)
  }


})
