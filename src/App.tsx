import './App.css'
import Header from './Header'
import Home from './Home'
import Studies from './Studies'

function App() {
  return (
    <main className="page-shell">
      {/*
        Este es el componente principal de la página.
        En React, return() devuelve lo que se pinta en pantalla.
      */}

      <Header />
      <Home />
      <Studies />
    </main>
  )
}

export default App
