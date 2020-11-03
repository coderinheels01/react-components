import React from "react";
import TextInput from "../../../components/TextInput";

const ExamplePlaceholder = () => {
  return (
    <TextInput
      label="First Name"
      onChange={() => {}}
      htmlId="first-name-id"
      name="firstName"
      placehoder="Enter First Name"
    />
  );
};
export default ExamplePlaceholder;
