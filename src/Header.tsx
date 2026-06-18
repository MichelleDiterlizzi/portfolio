import { useEffect, useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { useTranslation } from 'react-i18next'; // 1. Importas el hook
import './i18n';

const navItems = [
    { href: '#sobre-mi', label: 'nav.aboutMe' },
    { href: '#estudios', label: 'nav.studies' },
    { href: '#skills', label: 'nav.skills' },
    { href: '#contacto', label: 'nav.contact' },
]

function Header() {
    const [activeSection, setActiveSection] = useState('#sobre-mi')

    useEffect(() => {
        const sections = navItems.map((item) => document.querySelector(item.href))

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`)
                    }
                })
            },
            {
                rootMargin: '-40% 0px -45% 0px',
                threshold: 0.1,
            }
        )

        sections.forEach((section) => {
            if (section) observer.observe(section)
        })

  

        return () => observer.disconnect()
    }, [])
    // 3. Creas la función para cambiar de idioma
        const { t, i18n } = useTranslation();
        const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };
    return (
        <header className="site-header">
            <a className="brand" href="#sobre-mi">
                <div className="brand-logo">
                    <DotLottieReact
                        src="https://lottie.host/24297145-5fd2-475a-9b89-1358f24bec5c/83Cw8DGa7T.lottie"
                        stateMachineId="StateMachine1"
                        loop
                        autoplay
                    />
                </div>
            </a>

            <nav className="nav-links" aria-label="Navegación principal">
                {navItems.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        className={activeSection === item.href ? 'active' : ''}
                    >
                        {t(item.label)}
                    </a>
                ))}
            </nav>
            <div className="language-selector" style={{ display: 'flex', gap: '10px', marginLeft: '20px' }}>
                <button onClick={() => changeLanguage('es')} 
                style={{ opacity: i18n.language.startsWith('es') ? 1 : 0.5, cursor: 'pointer', background: 'none', border: 'none', color: '#fff' }} >ES</button>
                <button onClick={() => changeLanguage('en')} style={{ opacity: i18n.language.startsWith('en') ? 1 : 0.5, cursor: 'pointer', background: 'none', border: 'none', color: '#fff' }}>EN</button>
            </div>
        </header>
    )
}

export default Header
