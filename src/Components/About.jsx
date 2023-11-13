/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import gitIcon from "../images/git.png";
import gitHubIcon from "../images/github-2.png";
import pythonIcon from "../images/python.png";
import cppIcon from "../images/c-plus-plus.png";
import javaIcon from "../images/java.png";
import vscIcon from "../images/visual-studio-code.png";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a third year student pursuing BTech in Computer Science at Manipal University."

const desc="I am passionate about solving problems in new creative ways to drive innovation. I am a quick learner and a team player. I am always looking for opportunities to learn and grow.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
//"HTML","CSS","JavaScript","SQL","Backend development","Graphic design"

const skillDesc = "I am familiar with the following languages and tools:" 
/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */


const About = () => {
  return (
    <section className="padding" id="about">
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Me</h2>
        <p className="large">{description}</p>
        <p className="large">{desc}</p>
        <hr />
        <p className="large">{skillDesc}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <img className="logo" src={pythonIcon} alt={imageAltText}/>
          <img className="logo" src={cppIcon} alt={imageAltText}/>
          <img className="logo" src={javaIcon} alt={imageAltText}/>
          <img className="logo" src={gitIcon} alt={imageAltText}/>
          <img className="logo" src={gitHubIcon} alt={imageAltText}/>
          <img className="logo" src={vscIcon} alt={imageAltText}/>
          
        </div>
        <hr/>
      </div>
    </section>
  );
};

export default About;
