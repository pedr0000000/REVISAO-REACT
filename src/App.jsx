import { useState } from 'react'
import './App.css'

function App() {
 const [email, setEmail] = useState("")
 const [senha, setSenha] = useState("")

 function handleEmail(evento) {
  setEmail(evento.target.value)
 }

function handleSenha(evento) {
 setSenha(evento.target.value)
}

function handleSumit (){
 alert(`
  Email: ${email}
  Senha: ${senha}
 `)
}

  return (
  <>
  <header>
    <h1>Login</h1>
  </header>

  <main>
  <form action="" onSubmit={handleSumit}>
    <div>
      <label htmlFor="">Email:</label>
      <input type="email" id='email' placeholder='Digite seu email' onChange={handleEmail}/>
      </div>

    <div>
      <label htmlFor="">Idade</label>
      <input type="idade" id='idade' placeholder='Digite sua Idade' onChange={handleSenha} />
      </div>
      
      <button>Entrar</button>

  </form>
  </main>
  </>
  )      
}

export default App
