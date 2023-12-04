import { biblioteca } from "./addItem.js";

export function setItem() {
  localStorage.setItem("itemBiblioteca", JSON.stringify(biblioteca));
}

export function getItem() {
localStorage.getItem("itemBiblioteca");
}

