import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <h1> Herve Loic</h1>
          <h2>Notre Mission</h2>
          <p>
              <strong>INNOVER POUR UNE CROISSANCE DURABLE ET INCLUSIVE.</strong>
              Intégrer le développement durable, c'est faire de votre modèle économique un levier
              de performance durable, conjuguant rentabilité, responsabilité et résilience. En tant
              que société à mission, nous vous accompagnons dans la conception et la mise en
              œuvre de votre stratégie de communication en matière de développement durable,
              afin de renforcer votre image de marque auprès de vos consommateurs et parties
              prenantes
          </p>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
