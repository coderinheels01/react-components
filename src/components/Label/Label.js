import React from "react";
import PropTypes from "prop-types";

/** Label with required field display and  html*/
const Label = ({ label, htmlFor, required }) => {
  return (
    <label style={{ display: "block" }} htmlFor={htmlFor}>
      {label} {required && <span style={{ color: "red" }}> * </span>}
    </label>
  );
};

Label.propTypes = {
  /** Label text */
  label: PropTypes.string.isRequired,

  /** HTML id for associated input*/
  htmlFor: PropTypes.string.isRequired,

  /** Display red asterisk if required is true */
  required: PropTypes.bool
};

export default Label;
