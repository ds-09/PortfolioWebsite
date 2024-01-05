import React from "react";
import gitIcon from "../images/git.png";
import gitHubIcon from "../images/github-2.png";
import pythonIcon from "../images/python.png";
import javaIcon from "../images/java.png";
import vscIcon from "../images/visual-studio-code.png";
import cppIcon from "../images/s.png";
import canvaIcon from "../images/canva.png";
import figmaIcon from "../images/figma.png";
import htmlIcon from "../images/html.png";
import cssIcon from "../images/css.png";
import jsIcon from "../images/javascript.png";
import sqlIcon from "../images/mysql.png";
import dockerIcon from "../images/docker.png";
import reactIcon from "../images/react.png";
import bootstrapIcon from "../images/bootstrap.png";


const imageAltText = "purple and blue abstract background";

const description =
  "I'm a third year student pursuing BTech in Computer Science at Manipal University."

const desc="I am passionate about solving problems in new creative ways to drive innovation. I am a quick learner and a team player. I am always looking for opportunities to learn and grow.";

const skillDesc = "I am familiar with the following languages and tools:" 


const About = () => {
  return (
    <section className="Apadding" id="about">
      <div
        style={{
          backgroundColor: "white",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "black" }} >About Me</h2>
        <p className="large">{description}</p>
        <p className="large">{desc}</p>
        <hr />
        <p className="large">{skillDesc}</p>

        <div id="image-container">
          <img className="logo" src={pythonIcon} alt={imageAltText}/>
          <img className="logo" src={cppIcon} alt={imageAltText}/>
          <img className="logo" src={javaIcon} alt={imageAltText}/>
          
          <img className="logo" src={htmlIcon} alt={imageAltText}/>
          <img className="logo" src={cssIcon} alt={imageAltText}/>
          <img className="logo" src={bootstrapIcon} alt={imageAltText}/>
          <img className="logo" src={jsIcon} alt={imageAltText}/>
          <img className="logo" src={reactIcon} alt={imageAltText}/>

          <img className="logo" src={sqlIcon} alt={imageAltText}/>

          <img className="logo" src={gitIcon} alt={imageAltText}/>
          <img className="logo" src={gitHubIcon} alt={imageAltText}/>
          <img className="logo" src={vscIcon} alt={imageAltText}/>

          <img className="logo" src={dockerIcon} alt={imageAltText}/>
          <img className="logo" src={canvaIcon} alt={imageAltText}/>
          <img className="logo" src={figmaIcon} alt={imageAltText}/>

        </div>
      </div>
    </section>
  );
};

export default About;
