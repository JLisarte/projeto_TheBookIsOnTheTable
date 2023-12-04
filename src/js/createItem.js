import { getItem } from "./localStorage.js";
import { createRowFromStorage } from "./collection.js";

export function createItem() {
  const items = getItem();
  items.forEach(item => {
    createRowFromStorage(item);
  });
} 


