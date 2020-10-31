import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navigation = ({ components }) => {
  return (
    <ul className="navigation">
      {components.map((name, i) => {
        return (
          <li key={i}>
            <Link to={`/${name}`}>{name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

Navigation.propTypes = {
  components: PropTypes.array.isRequired
};

export default Navigation;
