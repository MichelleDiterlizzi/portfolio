import './Skills.css'
import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaJsSquare,
    FaPhp,
    FaJava,
    FaLaravel,
    FaDocker,
    FaPython,
    FaGitAlt,
    FaGithub,
    FaTerminal,
    FaCode,
} from 'react-icons/fa'
import { SiTailwindcss, SiMongodb, SiTypescript } from 'react-icons/si'
import { DiMysql } from 'react-icons/di'

const frontend = [
    { icon: FaHtml5, name: 'HTML' },
    { icon: FaCss3Alt, name: 'CSS' },
    { icon: FaReact, name: 'React' },
    { icon: FaJsSquare, name: 'JavaScript' },
    { icon: SiTailwindcss, name: 'Tailwind' },
]

const backend = [
    { icon: FaPhp, name: 'PHP' },
    { icon: FaJava, name: 'Java' },
    { icon: FaLaravel, name: 'Laravel' },
    { icon: DiMysql, name: 'MySQL' },
    { icon: SiMongodb, name: 'MongoDB' },
]

const learning = [
    { icon: FaDocker, name: 'Docker' },
    { icon: SiTypescript, name: 'TypeScript' },
    { icon: FaPython, name: 'Python' },
]

const tools = [
    { icon: FaGitAlt, name: 'Git' },
    { icon: FaGithub, name: 'GitHub' },
    { icon: FaCode, name: 'VS Code' },
    { icon: FaTerminal, name: 'Terminal' },
]

function Skills() {
    const groups = [
        { title: 'Frontend', items: frontend },
        { title: 'Backend', items: backend },
        { title: 'Aprendiendo', items: learning },
        { title: 'Herramientas', items: tools },
    ]

    return (
        <section className="skills-section" id="skills">
            <div className="skills-shell">
                <h2 className="skills-title">Skills</h2>
                <div className="skills-grid">
                    {groups.map((group) => (
                        <article className="skill-card" key={group.title}>
                            <h3>{group.title}</h3>
                            <div className="skills-icons">
                                {group.items.map((item) => {
                                    const Icon = item.icon
                                    return (
                                        <div className="skill-icon-box" key={item.name}>
                                            <Icon />
                                            <span>{item.name}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills