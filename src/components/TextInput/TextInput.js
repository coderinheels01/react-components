import React from "react";
import PropTypes from "prop-types";
import Label from "../Label";

const TextInput = ({
  htmlId,
  label,
  required = false,
  name,
  type = "text",
  placehoder,
  children,
  onChange,
  value,
  error,
  ...props
}) => {
  return (
    <div style={{ marginBottom: 16 }}>
      <Label htmlFor={htmlId} label={label} required={required} />
      <input
        id={htmlId}
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placehoder}
        style={error && { border: "solid 1px red" }}
        {...props}
      />
      {children}
      {error && (
        <div className="error" style={{ color: "red" }}>
          {error}
        </div>
      )}
    </div>
  );
};

TextInput.propTypes = {
  /** HTML id for tying label and input together. Used for testing purpose*/
  htmlId: PropTypes.string.isRequired,

  /** Input label */
  label: PropTypes.string.isRequired,

  /** Function to call on change */
  onChange: PropTypes.func.isRequired,

  /** Mark input with asterisk if it is required */
  required: false,

  /** Input name */
  name: PropTypes.string,

  /** Input type */
  type: PropTypes.oneOf(["text", "password", "number"]),

  /** Placeholder to display when empty */
  placehoder: PropTypes.string,

  /** Child components to display next to the input*/
  children: PropTypes.node,

  /** Input value*/
  value: PropTypes.any,

  /** Error string to display when error occured*/
  error: PropTypes.string
};

export default TextInput;
