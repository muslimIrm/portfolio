import { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { FiUser, FiSettings, FiFolder } from "react-icons/fi";
import { RiHome5Fill } from "react-icons/ri";
import "./nav.css";

function Nav() {
  const [activity, setActivity] = useState("#home");

  // الأقسام التي نراقبها
  const sections = ["home", "about", "skills", "services", "projects", "contact"]
  console.log(sections)
  useEffect(() => {
    const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActivity(`#${entry.target.id}`);
      }
    });
  },
  {
    threshold: 0.3, // جرب هذا الرقم بدل 0.6
  }
);
    console.log(observer)

    sections.forEach(id => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav>
      <a
        href="#home"
        className={activity === "#home" ? "activity" : ""}
        title="Home"
      >
        <RiHome5Fill />
      </a>
      <a
        href="#about"
        className={activity === "#about" ? "activity" : ""}
        title="About"
      >
        <FiUser />
      </a>
      <a
        href="#services"
        className={activity === "#services" ? "activity" : ""}
        title="Services"
      >
        <FiSettings />
      </a>
      <a
        href="#projects"
        className={activity === "#projects" ? "activity" : ""}
        title="Projects"
      >
        <FiFolder />
      </a>
      <a
        href="#contact"
        className={activity === "#contact" ? "activity" : ""}
        title="Contact"
      >
        <MdEmail />
      </a>
    </nav>
  );
}

export default Nav;
