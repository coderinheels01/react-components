import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const Navigation = ({ components }) => {
  return (
    <ul className="navigation">
      {components.map((name, i) => {
        return (
          <li key={i}>
            <NavLink
              activeStyle={{
                color: "#58c1f5",
                fontWeight: "bold",
                textDecoration: "none"
              }}
              style={{
                color: "#8a8888",
                textDecoration: "none"
              }}
              to={`/${name}`}
            >
              {name}
            </NavLink>
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
