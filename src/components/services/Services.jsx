import React from 'react'
import { FaCode, FaPaintBrush, FaRocket } from 'react-icons/fa'
import "./services.css"

function Services() {
    return (
        <section id="services">
            <div className="top-title">
                <h4>What I Offer</h4>
                <h2>My Services</h2>
            </div>

            <div className="container container_services">
                <div className="card">
                    <FaCode className="service-icon" />
                    <h3>Web Development</h3>
                    <p>I build responsive and dynamic websites using modern technologies like HTML, CSS, JavaScript, and React.</p>
                </div>

                <div className="card">
                    <FaPaintBrush className="service-icon" />
                    <h3>UI/UX Design</h3>
                    <p>I design clean and user-friendly interfaces that enhance the user experience and visual appeal of your product.</p>
                </div>

                <div className="card">
                    <FaRocket className="service-icon" />
                    <h3>Performance Optimization</h3>
                    <p>I optimize your website for speed and efficiency, ensuring fast loading times and smooth interactions.</p>
                </div>
            </div>
        </section>
    )
}

export default Services
