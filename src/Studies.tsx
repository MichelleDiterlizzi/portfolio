import './Studies.css'
import { useState, useEffect, useRef } from 'react'

type Study = {
    title: string
    school: string
    date: string
    description: string
    studyHours: number
    practiceHours: number
    studyLabel: string
    practiceLabel: string
}

const AnimatedCounter = ({ value, duration = 1000, isActive }: { value: number; duration?: number; isActive: boolean }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!isActive) return
        
        setCount(0)
        const startTime = Date.now()
        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            setCount(Math.floor(value * progress))
        }, 16)

        return () => clearInterval(interval)
    }, [value, duration, isActive])

    return <span>{count}</span>
}

const sampleStudies: Study[] = [
    {
        title: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)',
        school: 'Institut Obert de Catalunya',
        date: '2025 - En curso',
        description: 'Formación oficial en modalidad online mediante un alto grado de autonomía y disciplina. Enfocada en adquirir una base profunda en arquitectura de software y sistemas, desarrollando proyectos en diferentes entornos como Windows y Linux. Todo ello impulsado por una sólida vocación y capacidad para la autoformación continua.',
        studyHours: 1500,
        practiceHours: 500,
        studyLabel: 'Horas de estudio',
        practiceLabel: 'Horas de práctica',
    },
    {
        title: 'BootCamp FullStack Developer',
        school: 'IT Academy ',
        date: '2024-2025',
        description: 'Formación intensiva con un alto volumen de horas de programación práctica, centrada en el uso de arquitecturas, APIs y bases de datos. Esta base técnica me aporta una gran agilidad en el código y me facilita comprender la teoría de DAM con un excelente rendimiento.',
        studyHours: 500,
        practiceHours: 160,
        studyLabel: 'Horas de estudio',
        practiceLabel: 'Horas de práctica',
    },
]

function Studies() {
    const [index, setIndex] = useState(0)
    const circleRefs = useRef<Map<number, HTMLLIElement | null>>(new Map())
    const items = sampleStudies // reemplaza por tus estudios reales

    const prev = () => setIndex((i) => (i - 1 + items.length) % items.length)
    const next = () => setIndex((i) => (i + 1) % items.length)
    const goTo = (i: number) => setIndex(i)

    useEffect(() => {
        circleRefs.current.forEach((circle, idx) => {
            if (!circle) return
            const circleElements = circle.querySelectorAll('.study-hours-circle') as NodeListOf<HTMLDivElement>
            if (idx === index) {
                circleElements.forEach(el => el.classList.add('visible'))
            } else {
                circleElements.forEach(el => el.classList.remove('visible'))
            }
        })
    }, [index])

    if (!items || items.length === 0) return null

    return (
        <section className="studies-section" id="proyectos">
            <div className="studies-shell">
                <h2 className="studies-title">Estudios</h2>

                <div className="slider">
                    <button className="slider-btn prev" onClick={prev} aria-label="Anterior">
                        ‹
                    </button>

                    <div className="slides-wrapper">
                        <ul
                            className="slides"
                            style={{ transform: `translateX(-${index * 100}%)` }}
                        >
                            {items.map((s, i) => (
                                <li
                                    key={i}
                                    className={`slide ${i === index ? 'active' : ''}`}
                                    aria-hidden={i === index ? 'false' : 'true'}
                                    ref={(el) => {
                                        if (el) {
                                            circleRefs.current.set(i, el)
                                        } else {
                                            circleRefs.current.delete(i)
                                        }
                                    }}
                                >
                                    <h3 className="study-title">{s.title}</h3>
                                    <time className="study-date">{s.date}</time>
                                    <p className="study-desc">{s.description}</p>

                                    <div className="study-hours-grid">
                                        <div className="study-hours-card">
                                            <div className="study-hours-circle">
                                                <span className="study-hours-value"><AnimatedCounter value={s.studyHours} duration={700} isActive={i === index} /> h</span>
                                            </div>
                                            <p className="study-hours-label">{s.studyLabel}</p>
                                        </div>
                                        <div className="study-hours-card">
                                            <div className="study-hours-circle">
                                                <span className="study-hours-value"><AnimatedCounter value={s.practiceHours} duration={700} isActive={i === index} /> h</span>
                                            </div>
                                            <p className="study-hours-label">{s.practiceLabel}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button className="slider-btn next" onClick={next} aria-label="Siguiente">
                        ›
                    </button>
                </div>

                <div className="dots">
                    {items.map((_, i) => (
                        <button
                            key={i}
                            className={`dot ${i === index ? 'active' : ''}`}
                            onClick={() => goTo(i)}
                            aria-label={`Ir al estudio ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Studies