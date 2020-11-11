import React, { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput";
import EyeIcon from "../EyeIcon";
import ProgressBar from "../ProgressBar";
import { Link } from "react-router-dom";

/** Password input with show/hide password icon*/
const PasswordInput = ({
  label = "Password",
  value,
  minLength = 8,
  placeholder,
  htmlId,
  quality,
  showTogglePasswordIcon = false,
  name,
  error,
  onChange
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <TextInput
        label={label}
        type={showPassword ? "text" : "password"}
        value={value}
        minLength={minLength}
        placeholder={placeholder}
        htmlId={htmlId}
        name={name}
        onChange={onChange}
        error={error}
        required
      >
        {showTogglePasswordIcon && (
          <Link onClick={() => setShowPassword(!showPassword)}>
            <EyeIcon />
          </Link>
        )}
        <ProgressBar percent={quality} width={150} height={8} />
      </TextInput>
    </div>
  );
};

PasswordInput.propTypes = {
  /** Label text of the password input box*/
  label: PropTypes.string,

  /** Password value */
  value: PropTypes.any,

  /** Maximum length of password input box*/
  minLength: PropTypes.number,

  /** Default message if Input is empty */
  placeholder: PropTypes.string,

  /**HTML ID for the input */
  htmlId: PropTypes.string,

  /** ProgressBar percentage to display quality of the password*/
  quality: PropTypes.number,

  /** Flag to show or hide eye icon to show/hide visibility of password*/
  showTogglePasswordIcon: false,

  /** Password Input name */
  name: PropTypes.string,

  /** Error string to display */
  error: PropTypes.node,

  /** Function to call when input value changes*/
  onChange: PropTypes.func.isRequired
};

export default PasswordInput;
