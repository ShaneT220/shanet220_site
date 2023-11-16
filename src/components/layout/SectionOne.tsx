import "../../assets/css/main.css";
import UpperImage from "../../assets/images/LakeTahoePeer.jpg"

export default function SectionOne() {
  return (
    <section id="one">
      <div className="image main" data-position="center">
        <img src={UpperImage} alt="" />
      </div>
      <div className="container">
        <header className="major">
          <h2>Welcome!</h2>
          <p>About Me</p>
        </header>
        <p>Hello! I'm Shane Tomasello, originally from New Jersey, and my journey has been one of adaptability and continuous learning. I achieved the rank of Eagle Scout in 2014, demonstrating my commitment to my home towns community and hard work. My higher educational path began in community college, where I pursued an associate's degree in Mechanical Engineering. However, my passion led me to switch gears, and I embarked on a Bachelor's degree in Computer Science at Rowan University.</p>
        <p>Throughout my academic journey, I showcased my adaptability by quickly mastering coding and graduating with a commendable 3.4 GPA in just three years. I started my career as an intern at Dado, a startup, and continued to prove myself in the tech world. Subsequently, I became a Full Stack Engineer at Kenvue, where I honed my skills in technologies like LLMs, Kubernetes, TypeScript, React, Node.js, Python, and C#. I even had the opportunity to work closely with the OpenAI API and contribute to innovative projects that earned me my first patent pending for review.</p>
        <p>Beyond my professional life, I have a passion for building things and embarking on adventures. I've constructed my own drone and enjoy working on personal coding projects in my spare time. Nature walks and planning out-of-state escapades provide the balance I need to stay motivated and inspired. In a nutshell, my journey from a mechanical engineering aspirant to a successful computer scientist has been a testament to my adaptability and passion for technology and innovation.</p>
      </div>
    </section>
  )
}