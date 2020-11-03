import React from "react";
import TextInput from "react-components/TextInput/";

const ExampleRequired = () => {
  return (
    <TextInput
      label="First Name"
      onChange={() => {}}
      htmlId="first-name-id"
      name="firstName"
      required
      error="First name is required."
    />
  );
};

export default ExampleRequired;
