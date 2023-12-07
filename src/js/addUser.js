import { Usuario } from "../entities/User.js"
import { getUsuarios, saveUsuarios } from "../js/localStorage.js"

const formAddUser = document.getElementById("my-form")
const inputNome = document.getElementById("name")
const inputRegistroAcademico = document.getElementById("ra")
const inputDataNascimento = document.getElementById("birthDate")

formAddUser.addEventListener("submit", (e) => {
  e.preventDefault()
  const nome = inputNome.value
  const registroAcademico = inputRegistroAcademico.value
  const dataNascimento = inputDataNascimento.value

  formAddUser.reset()

  const user = new Usuario(nome, registroAcademico, dataNascimento)

  const storedUsers = getUsuarios() || []

  storedUsers.push(user)

  saveUsuarios(storedUsers)

  console.log("Usuário Adicionado")
})
