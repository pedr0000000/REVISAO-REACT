import { useState } from 'react'
import './App.css'

function App() {
 
  return (
  <>
  <header>
    <h1>Login</h1>
  </header>

  <main>
  <form action="">
    <div>
      <label htmlFor="">Email</label>
      <input type="email" id='email' placeholder='Digite seu email'/>
      </div>

    <div>
      <label htmlFor="">Idade</label>
      <input type="idade" id='idade' placeholder='Digite sua Idade' />
      </div>

  </form>
  </main>
  </>
  )      
}

export default App
