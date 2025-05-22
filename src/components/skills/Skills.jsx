import React from 'react'
import './skills.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaDatabase } from 'react-icons/fa'

const dataSkills = [
    {
        name: 'HTML',
        category: 'Markup',
        icon: <FaHtml5 className="skill-icon" />
    },
    {
        name: 'CSS',
        category: 'Styling',
        icon: <FaCss3Alt className="skill-icon" />
    },
    {
        name: 'JavaScript',
        category: 'Frontend Logic',
        icon: <FaJs className="skill-icon" />
    },
    {
        name: 'React',
        category: 'Framework',
        icon: <FaReact className="skill-icon" />
    },
    {
        name: 'Node.js',
        category: 'Backend',
        icon: <FaNodeJs className="skill-icon" />
    },
    {
        name: 'Python',
        category: 'Scripting',
        icon: <FaPython className="skill-icon" />
    },
    {
        name: 'Git',
        category: 'Version Control',
        icon: <FaGitAlt className="skill-icon" />
    },
    {
        name: 'SQL',
        category: 'Database',
        icon: <FaDatabase className="skill-icon" />
    },
]

function Skills() {
    return (
        <section className="skills" id='skills'>
            <div className="top-title">
                <h4>What skills I have</h4>
                <h2>My Experience</h2>
            </div>

            <div className="container container_skills">
                {dataSkills.map((skill, index) => (
                    <div className='skill' key={index}>
                        <div className="icon">
                            {skill.icon}
                        </div>
                        <div className='info'>
                            <h4>{skill.name}</h4>
                            <small>{skill.category}</small>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills
