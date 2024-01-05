/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

const projectList = [
  {
    title: "Client Management System",
    description:
      "An interactive desktop application for efficient client management. Allows admins to add, view, update, print and delete client records.",
    url: "https://github.com/ds-09/Client-Management-System",
  },
  {
    title: "BlogPost",
    description:"An interactive website to post blogs. It features creation of new blogs, editing and deleting existing blogs.",
    url: "https://github.com/ds-09/BlogPost",
  },
  
  {
    title: "Minesweeper",
    description: "A replica of the classic game Minesweeper featuring an interactive GUI.",
    url: "https://github.com/ds-09/Minesweeper",
  },
  
  {
    title: "Portfolio Site",
    description:"My portfolio website showcasing my diverse skill set and projects",
    url: "https://github.com/ds-09/PortfolioWebsite",
  },
  {
    title: "Hues",
    description: "A visually engaging artwork sales platform incorporating frontend design elements. Also features a basic backend functionality for user authentication.",
    url: "https://github.com/ds-09/HUES-Website",
  }

];

const Portfolio = () => {
  return (
    <section className="padding">
    
      <div id="portfolio">
        <h2 style={{ textAlign: "center", paddingTop: "5rem"}}>Projects</h2>
        
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
           ))}
        </div>

      </div>
      <div id="research">
        <h2 style={{ textAlign: "center", paddingTop: "5rem" }}>Research Work</h2>
        <div>
          <div className="Rcontainer">
              <div className="Rbox">
                <a href="https://drive.google.com/file/d/1v7UrVAqtZf3MezOQYetKQzMOpQmI0iI3/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <h7 >Sentiment Analysis of Book Reviews: A Transfer Learning Approach</h7>
                </a>
              </div>
          </div>
          
        </div>
      </div>
    </section>
    
  );
};

export default Portfolio;
