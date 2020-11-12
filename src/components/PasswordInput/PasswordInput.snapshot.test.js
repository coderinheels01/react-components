import React from "react";
import renderer from "react-test-renderer";
import PasswordInput from "./PasswordInput";

describe("PasswordInput", () => {
  let passwordInputTree;
  let props;
  describe("render PasswordInput without EyeIcon", () => {
    beforeEach(() => {
      props = {
        value: "test value",
        minLength: 8,
        placeholder: "test placeholder",
        htmlId: "test-html-id",
        quality: 20,
        name: "test name",
        error: "some error",
        onChange: jest.fn()
      };
      passwordInputTree = renderer.create(<PasswordInput {...props} />);
    });

    it("should render PasswordInput without showPassword icon", () => {
      expect(passwordInputTree).toMatchSnapshot();
    });

    afterEach(() => {
      passwordInputTree.unmount();
    });
  });
});
