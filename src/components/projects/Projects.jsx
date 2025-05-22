import React from 'react'
import "./projects.css"
import Image from "../../assets/project.jpg"
function Projects() {
    return (
        <section id="projects">
            <div className="top-title">
                <h4>My Recent Work</h4>
                <h2>My Projects</h2>
            </div>

            <div className="container container_projects">
                <div className="project">
                    <img src={Image} alt="" />
                    <h2>Item 1</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae officiis veniam inventore dolorum! Nihil, minima!</p>
                    <div className='btns'>
                        <a className='btn'>GitHube</a>
                        <a className='btn outline'>Live Demo</a>
                    </div>
                </div>
                
                <div className="project">
                    <img src={Image} alt="" />
                    <h2>Item 1</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae officiis veniam inventore dolorum! Nihil, minima!</p>
                    <div className='btns'>
                        <a className='btn'>GitHube</a>
                        <a className='btn outline'>Live Demo</a>
                    </div>
                </div>
                <div className="project">
                    <img src={Image} alt="" />
                    <h2>Item 1</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae officiis veniam inventore dolorum! Nihil, minima!</p>
                    <div className='btns'>
                        <a className='btn'>GitHube</a>
                        <a className='btn outline'>Live Demo</a>
                    </div>
                </div>
                <div className="project">
                    <img src={Image} alt="" />
                    <h2>Item 1</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae officiis veniam inventore dolorum! Nihil, minima!</p>
                    <div className='btns'>
                        <a className='btn'>GitHube</a>
                        <a className='btn outline'>Live Demo</a>
                    </div>
                </div>
                
                <div className="project">
                    <img src={Image} alt="" />
                    <h2>Item 1</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae officiis veniam inventore dolorum! Nihil, minima!</p>
                    <div className='btns'>
                        <a className='btn'>GitHube</a>
                        <a className='btn outline'>Live Demo</a>
                    </div>
                </div>
                <div className="project">
                    <img src={Image} alt="" />
                    <h2>Item 1</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae officiis veniam inventore dolorum! Nihil, minima!</p>
                    <div className='btns'>
                        <a className='btn'>GitHube</a>
                        <a className='btn outline'>Live Demo</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects