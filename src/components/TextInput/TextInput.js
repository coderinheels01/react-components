import React from "react";
import PropTypes from "prop-types";
import Label from "../Label";
import styled from "styled-components";

export const TextInputWrapper = styled.div`
  margin-bottom: 16;
`;

export const TextInputInner = styled.input(props => ({
  border: props.error ? "solid 1px red" : ""
}));

export const Error = styled.div`
  color: red;
`;

const TextInput = ({
  htmlId,
  label,
  required = false,
  name,
  type = "text",
  placeholder,
  children,
  onChange,
  value,
  error,
  ...props
}) => (
  <TextInputWrapper>
    <Label htmlFor={htmlId} label={label} required={required} />
    <TextInputInner
      id={htmlId}
      type={type}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      error={error}
      {...props}
    />
    {children}
    {error && <Error>{error}</Error>}
  </TextInputWrapper>
);

TextInput.propTypes = {
  /** HTML id for tying label and input together. Used for testing purpose*/
  htmlId: PropTypes.string.isRequired,

  /** Input label */
  label: PropTypes.string.isRequired,

  /** Function to call on change */
  onChange: PropTypes.func.isRequired,

  /** Mark input with asterisk if it is required */
  required: PropTypes.bool,

  /** Input name */
  name: PropTypes.string,

  /** Input type */
  type: PropTypes.oneOf(["text", "password", "number"]),

  /** Placeholder to display when empty */
  placeholder: PropTypes.string,

  /** Child components to display next to the input*/
  children: PropTypes.node,

  /** Input value*/
  value: PropTypes.any,

  /** Error string to display when error occured*/
  error: PropTypes.string
};

export default TextInput;
