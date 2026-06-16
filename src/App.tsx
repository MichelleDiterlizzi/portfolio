import './App.css'
import Header from './Header'
import Home from './Home'

function App() {
  return (
    <main className="page-shell">
      {/*
        Este es el componente principal de la página.
        En React, return() devuelve lo que se pinta en pantalla.
      */}

      <Header />
      <Home />
    </main>
  )
}

export default App
