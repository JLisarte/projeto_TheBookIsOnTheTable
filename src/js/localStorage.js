import { saveItem, getItem } from "../js/storageFunctions.js"

// Defina seu item ou objeto
const item = { name: "Livro", author: "Autor" }

// Salve o item no localStorage
saveItem(item)

// Para recuperar o item salvo
const retrievedItem = getItem()
console.log(retrievedItem) // Isso mostrará o item recuperado do localStorage
