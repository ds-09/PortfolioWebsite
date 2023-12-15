import React from "react";
import PropTypes from "prop-types";

const Home = ({ name, title }) => {
  return (
    <section className="min-height">
      <div className="centered-container">
        <h1>{name}</h1>
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
