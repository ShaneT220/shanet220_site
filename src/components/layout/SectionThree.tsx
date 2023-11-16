import "../../assets/css/main.css";
import dsaimage from "../../assets/images/srnvrd7vfeeq5qpxnabq.webp"
import mivusgif from "../../assets/images/milvus.gif"
import androidcompass from "../../assets/images/android-compass.gif"
import typescriptReact from "../../assets/images/typescript-in-react.png"

export default function SectioThree() {
  return (
    <section id="three">
      <div className="container">
        <h3>Personal Projects</h3>
        <p>Explore my personal coding journey—a collection of diverse projects cultivated over the years. From broadening my knowledge to crafting scripts for practical tasks, this section showcases my passion for coding, experimenting with DSA related material, and a repository for the projects close to my heart.</p>
        <div className="features">
          <article>
            <a onClick={() => window.open("https://github.com/ShaneT220/JAVA")} className="image"><img src={dsaimage} alt="" /></a>
            <div className="inner">
              <h4>DSA Related Materials</h4>
              <p>Dive into the heart of my coding journey with a focus on Data Structures and Algorithms, predominantly written in Java during my college years. This section features labs assigned during my academic pursuits, serving as a testament to my solid understanding of foundational concepts. Consistently revisiting these labs underscores my continuous dedication to mastering DSA principles and honing my programming skills.</p>
            </div>
          </article>
          <article>
            <a onClick={() => window.open("https://github.com/ShaneT220/Milvus_And_OpenAI")} className="image"><img src={mivusgif} alt="" /></a>
            <div className="inner">
              <h4>Vector Database and AI Technologies</h4>
              <p>Dive into the realm of Vector Database and AI Technologies, where I embarked on an experimental journey with the open-source relational vector database, Milvus. This personal project involved training an OpenAI Language Model (LLM) using data scraped from law transcripts. Within this repository, you'll find the scrapped data, a Docker file for creating the vector database environment, a Python script for populating the database, and a unique script for transforming the data into a chatbot. While I bring extensive experience with OpenAI and numerous projects, this endeavor holds a special place as one of my earliest and most personal explorations.</p>
            </div>
          </article>
          <article>
            <a onClick={() => window.open("https://github.com/ShaneT220/Android-Compass")} className="image"><img src={androidcompass} alt="" /></a>
            <div className="inner">
              <h4>Android Compass Project</h4>
              <p>Explore my Android Compass Project, a successful venture where I set out to create a functional compass for personal use on my mobile device. Although the app is designed for an older phone model, it served as an insightful experiment in utilizing Android Studio and Java to develop a practical application. This project not only fulfilled its initial goal but also provided valuable insights into mobile app development using contemporary tools. Disclaimer: The displayed image may not accurately represent the appearance of the compass I created, as an actual image is currently unavailable. However, the provided image serves as a close representation of the app's visual design and functionality.</p>
            </div>
          </article>
          <article>
            <a onClick={() => window.open("https://github.com/ShaneT220/Restaurant-order-example")} className="image"><img src={typescriptReact} alt="" /></a>
            <div className="inner">
              <h4>Restaurant Order Webpage</h4>
              <p>Presenting my senior project, the Restaurant Order Webpage—a dynamic TypeScript and React application that I spearheaded in both design and implementation, leveraging my unique expertise in React within the team. This platform enables users to effortlessly search for restaurants, craft their own dining establishments, and curate menus seamlessly. Supported by a robust Python API on the backend, this project showcases my proficiency in full-stack development and commitment to creating user-friendly applications.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}