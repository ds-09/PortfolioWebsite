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
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a third year student pursuing BTech in Computer Science and Engineering at Manipal University.I am passionate about solving problems in new creative ways to drive innovation. I seek opportunities to expand my skillset and .";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "python","C++","java","HTML","CSS","JavaScript","SQL","git",
  "visual-studio-code",
  "Figma","github-2",
  "Backend development",
  "Graphic design"
];

const skillDesc = "I am familiar with the following languages and tools:" 
/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */


const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
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
          {skillsList.map((skill) => (
            <img key={skill} className="logo" src={require(`../images/${skill}.png`).default} alt={skill} />
          ))}
        </div>
        <hr />
      </div>
    </section>
  );
};

export default About;
