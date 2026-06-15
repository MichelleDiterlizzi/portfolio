import './App.css'
import logo from './assets/img/logo.png'

function App() {
  return (
    <main className="page-shell">
      {/*
        Este es el componente principal de la página.
        En React, return() devuelve lo que se pinta en pantalla.
      */}

      <header className="site-header">
        {/*
          El bloque de marca: nombre y pequeño texto de presentación.
          'href="#home"' hace que al pulsar vaya a esa sección.
        */}
        <a className="brand" href="#home">
          <img className="brand-logo" src={logo} alt="Logo personal" />
          <span>
            <strong>Desarrolladora Web</strong>
            <small>Portfolio personal</small>
          </span>
        </a>

        {/*
          Nav es la barra de enlaces del header.
          Cada <a> es un enlace interno a otra parte de la página.
        */}
        <nav className="nav-links" aria-label="Navegación principal">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#proyectos">Estudios</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#proyectos">Herramientas</a>
          <a href="#proyectos">Contacto</a>
        </nav>
      </header>
    </main>
  )
}

export default App
