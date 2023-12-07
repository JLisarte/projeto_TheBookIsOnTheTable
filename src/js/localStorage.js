
export function getAcervo() {
  return JSON.parse(localStorage.getItem("acervo")) || []
}

export function saveAcervo(acervo) {
  localStorage.setItem("acervo", JSON.stringify(acervo))
}

export function getUsuarios() {
  return JSON.parse(localStorage.getItem("usuarios")) || []
}

export function saveUsuarios(usuarios) {
  localStorage.setItem("usuarios", JSON.stringify(usuarios))
}