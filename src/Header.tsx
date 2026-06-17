import { useEffect, useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const navItems = [
    { href: '#sobre-mi', label: 'Sobre mí' },
    { href: '#estudios', label: 'Estudios' },
    { href: '#skills', label: 'Skills' },
    { href: '#contacto', label: 'Contacto' },
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
                        {item.label}
                    </a>
                ))}
            </nav>
        </header>
    )
}

export default Header
