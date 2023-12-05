export function getAcervo() {
  return JSON.parse(localStorage.getItem("acervo")) || []
}

export function saveAcervo(acervo) {
  localStorage.setItem("acervo", JSON.stringify(acervo))
}
