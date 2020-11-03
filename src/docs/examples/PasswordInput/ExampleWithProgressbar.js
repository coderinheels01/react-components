import React, { useState } from "react";
import PasswordInput from "../../../components/PasswordInput";

/** PasswordInput Example with ProgressBar to display quality of the password */
const ExampleWithProgressbar = () => {
  const [password, setPassword] = useState("");

  const calculateQuality = () => {
    return password.length > 10 ? 100 : password.length * 10;
  };
  return (
    <PasswordInput
      htmlId="password-input-id"
      placeholder="Enter your passsword"
      onChange={e => {
        setPassword(e.currentTarget.value);
      }}
      quality={calculateQuality()}
    />
  );
};

export default ExampleWithProgressbar;
