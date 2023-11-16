import React from "react";
import "../../assets/css/main.css";
import MeMySelfAndI from "../../assets/images/myimage.jpg"

export default function Header() {

  const [section, setCurrentSection] = React.useState("one")

  function handleLinkedInClick() {
    window.open("https://www.linkedin.com/in/shane-tomasello-5334a09a/")
  }

  function handleGitHubClick() {
    window.open("https://github.com/ShaneT220")
  }

  function handleSectionClick(id: string) {
    setCurrentSection(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return (
    <section id="header">
				<header>
					<span  className="image avatar"><img src={MeMySelfAndI} alt="" /></span>
					<h1 id="logo"><a onClick={() => handleSectionClick("one")} className={section === "one" ? "active" : ""}>Shane Tomasello</a></h1>
					<p>A son asked his father (a programmer) why the sun rises in the east, and sets in the west. His response? It works, don’t touch!</p>
				</header>
				<nav id="nav">
					<ul>
						<li><a onClick={() => handleSectionClick("one")} className={section === "one" ? "active" : ""}>About</a></li>
						<li><a onClick={() => handleSectionClick("two")} className={section === "two" ? "active" : ""}>My Technical Skills</a></li>
						<li><a onClick={() => handleSectionClick("three")} className={section === "three" ? "active" : ""}>Personal Projects</a></li>
						<li><a onClick={() => handleSectionClick("four")} className={section === "four" ? "active" : ""}>Contact</a></li>
					</ul>
				</nav>
				<footer>
					<ul className="icons">
						<li><a onClick={handleLinkedInClick} className="icon brands fa-linkedin"><span className="label">Linkedin</span></a></li>
						<li><a onClick={handleGitHubClick} className="icon brands fa-github"><span className="label">Github</span></a></li>
						{/* <li><a href="#" className="icon solid fa-envelope"><span className="label">Email</span></a></li> */}
					</ul>
				</footer>
			</section>
  )
}
