import React from "react";
import PropTypes from "prop-types";
import TypewriterText from "./TypewriterText";

const Home = ({ name, title }) => {
  return (
    <section className="min-height">
      <div className="centered-container">
        <h1>
          <TypewriterText text={name} />
        </h1>
        <h2>{title}</h2>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
