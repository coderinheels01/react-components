import React, { useState } from "react";
import PasswordInput from "../../../components/PasswordInput";

const ExampleWithEyeIcon = () => {
  const [password, setPassword] = useState("");

  const calculateQuality = () => {
    return password.length > 10 ? 100 : password.length * 10;
  };
  return (
    <PasswordInput
      onChange={e => {
        setPassword(e.currentTarget.value);
      }}
      value={password}
      htmlId="password-input"
      name="passwordInput"
      quality={calculateQuality()}
      placeholder="Enter your password"
      showTogglePasswordIcon
    />
  );
};

export default ExampleWithEyeIcon;
