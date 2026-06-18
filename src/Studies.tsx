import { useTranslation } from 'react-i18next'
import './Studies.css'
import { useState, useEffect, useRef } from 'react'

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

const sampleStudies = [
  {
    id: 'dam',
    school: 'Institut Obert de Catalunya',
    studyHours: 1500,
    practiceHours: 500,
  },
  {
    id: 'bootcamp',
    school: 'IT Academy ',
    studyHours: 500,
    practiceHours: 160,
  },
];

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

    const { t } = useTranslation();

    return (
        <section className="studies-section" id="estudios">
            <div className="studies-shell">
                <h2 className="studies-title">{t('title.studies')}</h2>

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
                                    <h3 className="study-title">{t(`studies.${s.id}.title`)}</h3>
                                    <h4 className="study-school">{s.school}</h4>
                                    <time className="study-date">{t(`studies.${s.id}.date`)}</time>
                                    <p className="study-desc">{t(`studies.${s.id}.description`)}</p>

                                    <div className="study-hours-grid">
                                        <div className="study-hours-card">
                                            <div className="study-hours-circle">
                                                <span className="study-hours-value"><AnimatedCounter value={s.studyHours} duration={700} isActive={i === index} /> h</span>
                                            </div>
                                            <p className="study-hours-label">{t(`studies.labels.studyHours`)}</p>
                                        </div>
                                        <div className="study-hours-card">
                                            <div className="study-hours-circle">
                                                <span className="study-hours-value"><AnimatedCounter value={s.practiceHours} duration={700} isActive={i === index} /> h</span>
                                            </div>
                                            <p className="study-hours-label">{t(`studies.labels.practiceHours`)}</p>
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