import React from 'react'
import "./about.css"
import Img from "../../assets/about.jpg"
import { FaBarsProgress } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { PiMedalFill } from "react-icons/pi";
function About() {
  return (
    <section id="about" className="about">
      <div className="top-title">
        <h4>Get know me</h4>
        <h2>About Me</h2>
      </div>

      <div className="container container_about">
        <div className="image">
          <img src={Img} alt="" />
        </div>
        <div className="content">
          <div className="cards">
            <div className="card">
              <PiMedalFill/>
              <h3>experience</h3>
              <p>4+ years working</p>
            </div>
            <div className="card">
              <FaBarsProgress/>
              <h3>Projects</h3>
              <p>69+ completed</p>
            </div>
            <div className="card">
              <IoPersonSharp/>
              <h3>Clients</h3>
              <p>121+ worldwide</p>
            </div>
          </div>

          <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus magnam asperiores earum ratione animi officiis rerum, architecto fuga cupiditate.</p>
          <a href="contact" className="btn">Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About