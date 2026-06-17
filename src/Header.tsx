import logo from './assets/img/logo.png'

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home">
        <img className="brand-logo" src={logo} alt="Logo personal" />
      </a>

      <nav className="nav-links" aria-label="Navegación principal">
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#estudios">Estudios</a>
        <a href="#skills">Skills</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  )
}

export default Header
