import React from 'react'
import "./home.css"
import Image from "../../assets/person.png"
import { FaTelegram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLongArrowAltDown } from "react-icons/fa";
function Home() {
  return (
    <section className='home' id='home'>
      <h3>Hello, I'm</h3>
      <h1>Muslim Hashim</h1>
      <p>Front-end Develpoer</p>
      <div className="btns">
        <button className='btn outline'>Download CV</button>
        <button className='btn'>Talk with me</button>
      </div>
      <div className='image'>
        <img src={Image}/>
      </div>

      <div className='soucil_icons'>
        <a href='https://t.me/i1_muslim' target='_blank'><FaTelegram/></a>
        <a href='https://bit.ly/43rXRTH' target='_blank'><FaLinkedin/></a>
        <a href='https://instagram.com/ms0h_0/' target='_blank'><PiInstagramLogoFill/></a>
      </div>
      <div className='next_page'>
        <a href='#about'><FaLongArrowAltDown/></a>
      </div>
    </section>
  )
}

export default Home