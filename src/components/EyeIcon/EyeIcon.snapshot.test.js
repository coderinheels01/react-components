import React from "react";
import renderer from "react-test-renderer";
import EyeIcon from "./EyeIcon";

describe("EyeIcon Snapshot test", () => {
  const eyeIconTree = () => renderer.create(<EyeIcon />);

  it("should render a FontAwesome eye icon", () => {
    expect(eyeIconTree()).toMatchSnapshot();
  });
});
