import React from "react";
import TextInput from "react-components/TextInput/";

/** Optional Input example */

const ExampleOptional = () => {
  return (
    <TextInput
      label="First Name"
      onChange={() => {}}
      htmlId="first-name-id"
      name="firstName"
    />
  );
};

export default ExampleOptional;
