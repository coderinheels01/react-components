import React from "react";
import renderer from "react-test-renderer";
import TextInput from "./TextInput";

describe("TextInput", () => {
  let props;
  let textInputTree;

  describe("TextInput with type text", () => {
    beforeEach(() => {
      props = {
        htmlId: "test html id ",
        label: "test label",
        required: true,
        name: "test name",
        type: "text",
        placeholder: "test placeholder",
        children: <div />,
        onChange: jest.fn(),
        value: "test value",
        error: "some error"
      };
      textInputTree = renderer.create(<TextInput {...props} />);
    });

    it("render TextInput of type text", () => {
      expect(textInputTree).toMatchSnapshot();
    });

    afterEach(() => {
      textInputTree.unmount();
    });
  });

  describe("TextInput with type password", () => {
    beforeEach(() => {
      props = {
        htmlId: "test html id ",
        label: "test label",
        required: true,
        name: "test name",
        type: "password",
        placeholder: "test placeholder",
        children: <div />,
        onChange: jest.fn(),
        value: "test value",
        error: "some error"
      };
      textInputTree = renderer.create(<TextInput {...props} />);
    });

    it("render TextInput of type password", () => {
      expect(textInputTree).toMatchSnapshot();
    });
    afterEach(() => {
      textInputTree.unmount();
    });
  });
});
