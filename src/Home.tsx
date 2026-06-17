import { FaGithub, FaLinkedin } from 'react-icons/fa'
import photo from './assets/img/foto_personal.png'

function Home() {
  return (
    <section className="body-section" id="sobre-mi">
      <div className="body-inner">
        <article className="body-copy">
          <p className="eyebrow">Hola! Soy Michelle Di Terlizzi</p>
          <h2>Full Stack web developer</h2>
          <h3>Mi Filosofía</h3>
          <p className="lead">
            En un sector donde las listas de tecnologías y habilidades técnicas suelen ser de gran extensión, prefiero destacar la disciplina y la constancia como mis principales fortalezas.<br />
            <br />Con formación en diferentes lenguajes tanto backend como frontend y enfoque en arquitecturas limpias potenciadas por IA, mi objetivo no es solo picar código aislada.
            <br /><br />Mi sueño es formar parte de un equipo real, donde el factor humano importe y donde podamos construir un ambiente de cooperación y crecimiento compartido.
          </p>
          <div className="hero-actions">
            <a className="cta-button" href="#contacto">Hablemos!</a>
            <div className="social-links">
              <a className="social-link" href="https://www.linkedin.com/in/michelle-di-terlizzi/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
                <FaLinkedin aria-hidden="true" />
              </a>
              <a className="social-link" href="https://github.com/MichelleDiterlizzi" target="_blank" rel="noreferrer noopener" aria-label="GitHub">
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
  )
}

export default Home
