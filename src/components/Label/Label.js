import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/** Label with required field display and  html*/
const Label = ({ label, htmlFor, required }) => {
  const LabelWrapper = styled.label`
    display: block;
  `;
  const LabelRequired = styled.span`
    color: red;
  `;
  return (
    <LabelWrapper htmlFor={htmlFor}>
      {label}
      {required && <LabelRequired> * </LabelRequired>}
    </LabelWrapper>
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
