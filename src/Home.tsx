import { FaGithub, FaLinkedin } from 'react-icons/fa'
import photo from './assets/img/foto_personal.png'
import { useTranslation } from 'react-i18next';
import './i18n';

function Home() {
  const { t } = useTranslation();

  return (
    <section className="body-section" id="sobre-mi">
      <div className="body-inner">
        <article className="body-copy">
          <p className="eyebrow">{t('hero.greeting')}</p>
          <h2>{t('hero.title')}</h2>
          <h3>{t('hero.philosophyTitle')}</h3>
          <p className="lead">
            {t('hero.paragraph1')}
            <br />
            <br />
            {t('hero.paragraph2')}
            <br />
            <br />
            {t('hero.paragraph3')}
          </p>
          <div className="hero-actions">
            <a className="cta-button" href="#contacto">{t('hero.ctaButton')}</a>
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
