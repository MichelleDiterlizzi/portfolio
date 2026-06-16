import logo from './assets/img/logo.png'

function Header() {
  return (
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
  )
}

export default Header
