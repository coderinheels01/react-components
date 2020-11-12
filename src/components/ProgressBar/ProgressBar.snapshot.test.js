import React from "react";
import renderer from "react-test-renderer";
import ProgressBar from "./ProgressBar";

describe("ProgressBar", () => {
  let props;
  let progressBarTree;

  beforeEach(() => {
    props = {
      percent: 50,
      width: 100,
      height: 20
    };
    progressBarTree = renderer.create(<ProgressBar {...props} />);
  });

  it("render ProgressBar with 50 percent, 100 width and 20 height", () => {
    expect(progressBarTree).toMatchSnapshot();
  });
});
