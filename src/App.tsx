import './App.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import logo from './assets/img/logo.png'
import photo from './assets/img/foto_personal.png'

function App() {
  return (
    <main className="page-shell">
      {/*
        Este es el componente principal de la página.
        En React, return() devuelve lo que se pinta en pantalla.
      */}

      <header className="site-header">
        <a className="brand" href="#home">
          <img className="brand-logo" src={logo} alt="Logo personal" />
        </a>

        <nav className="nav-links" aria-label="Navegación principal">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#proyectos">Estudios</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#proyectos">Herramientas</a>
          <a href="#proyectos">Contacto</a>
        </nav>
      </header>

      <section className="body-section" id="sobre-mi">
        <div className="body-inner">
          <article className="body-copy">
            <p className="eyebrow">Hola! Soy Michelle Di Terlizzi</p>
            <h2>Full Stack web developer</h2>
            <h3>Mi Filosofía</h3>
            <p className="lead">
              En un sector donde las listas de tecnologías y habilidades técnicas suelen ser de gran extensión, prefiero destacar la disciplina y la constancia como mis principales fortalezas.<br></br>
              <br></br>Con formación en diferentes lenguajes tanto backend como frontend y enfoque en arquitecturas limpias potenciadas por IA, mi objetivo no es solo picar código aislada.
              <br></br><br></br>Mi sueño es formar parte de un equipo real, donde el factor humano importe y donde podamos construir un ambiente de cooperación y crecimiento compartido.
            </p>
            <div className="hero-actions">
              <a className="cta-button" href="#contactar">Hablemos!</a>
              <div className="social-links">
                <a className="social-link" href="https://www.linkedin.com/in/michelle-di-terlizzi/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
                  <FaLinkedin aria-hidden="true" />
                </a>
                <a className="social-link" href="https://github.com/" target="_blank" rel="noreferrer noopener" aria-label="GitHub">
                  <FaGithub aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>

          <aside className="photo-panel" aria-label="Foto personal">
            <div className="photo-glow-ring">
              <img className="profile-photo" src={photo} alt="Foto personal" />
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default App
