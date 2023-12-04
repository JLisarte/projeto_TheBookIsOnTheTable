import { item } from "./addItem.js";
import { API } from "./store.js";

export function createItem() {
  const newItem = { ...item };
  API.adicionarItem(newItem);
  return newItem;
} 

