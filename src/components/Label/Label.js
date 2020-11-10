import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const LabelWrapper = styled.label`
  display: block;
`;
export const LabelRequired = styled.span`
  color: red;
`;

/** Label with required field display and  html*/
const Label = ({ label, htmlFor, required }) => (
  <LabelWrapper htmlFor={htmlFor}>
    {label}
    {required && <LabelRequired> * </LabelRequired>}
  </LabelWrapper>
);

Label.propTypes = {
  /** Label text */
  label: PropTypes.string.isRequired,

  /** HTML id for associated input*/
  htmlFor: PropTypes.string.isRequired,

  /** Display red asterisk if required is true */
  required: PropTypes.bool
};

export default Label;
