import React from "react";
import renderer from "react-test-renderer";
import Label from "./Label";

describe("Label snapshot test", () => {
  let props;
  let labelTree;

  describe("when required props is false", () => {
    beforeEach(() => {
      props = {
        label: "test label ",
        htmlFor: "test-html-id",
        required: false
      };
      labelTree = renderer.create(<Label {...props} />);
    });
    it("should not create 'LabelRequired' ", () => {
      expect(labelTree).toMatchSnapshot();
    });
    afterEach(() => {
      labelTree.unmount();
    });
  });

  describe("when required props is true", () => {
    beforeEach(() => {
      props = {
        label: "test label ",
        htmlFor: "test-html-id",
        required: true
      };
      labelTree = renderer.create(<Label {...props} />);
    });
    it("should not create 'LabelRequired' ", () => {
      expect(labelTree).toMatchSnapshot();
    });
    afterEach(() => {
      labelTree.unmount();
    });
  });
});
