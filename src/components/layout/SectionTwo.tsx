import "../../assets/css/main.css";
import javalogo from "../../assets/images/icons8-java.svg"
import gptlogo from "../../assets/images/icons8-chatgpt-32.png"
import typescriptlogo from "../../assets/images/icons8-typescript.svg"
import javascriptlogo from "../../assets/images/icons8-javascript.svg"
import nodejslogo from "../../assets/images/icons8-nodejs.svg"
import csharplogo from "../../assets/images/icons8-c.svg"
import reactlogo from "../../assets/images/reactlogo.svg"
import pythonlogo from "../../assets/images/icons8-python.svg"
import webpacklogo from "../../assets/images/icons8-webpack-48.png"
import azurelogo from "../../assets/images/icons8-azure-48.png"
import awslogo from "../../assets/images/icons8-amazon-web-services-48.png"
import llmlogo from "../../assets/images/icons8-ai-50.png"
import kubelogo from "../../assets/images/icons8-kubernetes-48.png"


export default function SectioTwo() {
  return (
    <section id="two">
      <div className="container">
        <h3>My Technical Skills</h3>
        <p>Languages</p>
        <ul className="feature-icons">
          <li>
            <div className="icon-placemant">
              <img src={javalogo} style={{paddingBottom: "5%"}} width="80%" height="100%"/>
            </div>
            JAVA
          </li>
          <li>
            <div className="icon-placemant">
              <img src={typescriptlogo} style={{paddingBottom: "5%"}} width="80%" height="100%"/>
            </div>
            TypeScript
          </li>
          <li>
            <div className="icon-placemant">
              <img src={javascriptlogo} style={{paddingBottom: "5%"}} width="80%" height="100%"/>
            </div>
            JavaScript
          </li>
          <li>
            <div className="icon-placemant">
              <img src={csharplogo} style={{paddingBottom: "5%"}} width="80%" height="100%"/>
            </div>
            C#
          </li>
          <li className="icon solid fa-database">SQL</li>
          <li>
            <div className="icon-placemant">
              <img src={pythonlogo} style={{paddingBottom: "5%"}} width="80%" height="100%"/>
            </div>
            Python
          </li>
        </ul>
        <p>Technologies</p>
        <ul className="feature-icons">
          <li>
            <div className="icon-placemant">
              <img src={azurelogo} style={{paddingBottom: "5%"}} width="80%" height="80%"/>
            </div>
            Azure
          </li>
          <li>
            <div className="icon-placemant">
              <img src={awslogo} style={{paddingBottom: "5%"}} width="80%" height="80%"/>
            </div>
            AWS
          </li>
          <li>
            <div className="icon-placemant">
              <img src={reactlogo} style={{paddingBottom: "5%"}} width="100%" height="100%"/>
            </div>
            React
          </li>
          <li>
            <div className="icon-placemant">
              <img src={kubelogo} style={{paddingBottom: "5%"}} width="80%" height="80%"/>
            </div>
            Kubernetes
          </li>
          <li>
            <div className="icon-placemant">
              <img src={gptlogo} style={{paddingBottom: "5%"}} width="80%" height="80%"/>
            </div>
            OpenAI
          </li>
          <li>
            <div className="icon-placemant">
              <img src={webpacklogo} style={{paddingBottom: "5%"}} width="80%" height="80%"/>
            </div>
            Webpack
          </li>
          <li>
            <div className="icon-placemant">
              <img src={llmlogo} style={{paddingBottom: "5%"}} width="80%" height="80%"/>
            </div>
            LLM's
          </li>
          <li>
            <div className="icon-placemant">
              <img src={nodejslogo} style={{paddingBottom: "5%"}} width="80%" height="100%"/>
            </div>
            NodeJS
          </li>
        </ul>
      </div>
    </section>
  )
}