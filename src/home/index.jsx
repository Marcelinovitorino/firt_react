import { useState } from 'react'
import './style.css'

function Home() {
  const [count, setCount] = useState(0)

  return (

    <div className='container'>
      <form >
        <h1>Cadastro de Usuarios</h1>
        <p>
          <input type="text" name="name" placeholder='insira o seu nome' />

        </p>
        <p>
          <input type="text" name="email" placeholder='insira o seu email' />
        </p>
        <p>
          <input type="text" name="password" placeholder='insira o sua password' />
        </p>
        <button type="button">Cadastrar</button>

      </form>



    </div>
  )
}

export default Home
