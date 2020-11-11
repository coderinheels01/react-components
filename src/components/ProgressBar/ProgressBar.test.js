import React from "react";
import { shallow } from "enzyme";
import faker from "faker";
import ProgressBar, {
  ProgressBarPercent,
  ProgressBarWrapper
} from "./ProgressBar";

describe("ProgressBar", () => {
  let props;

  const shallowProgressBar = () => shallow(<ProgressBar {...props} />);

  beforeEach(() => {
    props = {
      percent: faker.random.number(),
      width: faker.random.number(),
      height: faker.random.number()
    };
  });

  it("should render a ProgressBarWrapper", () => {
    expect(shallowProgressBar().find(ProgressBarWrapper).length).toBe(1);
  });

  it("should pass width into ProgressBarWrapper", () => {
    expect(
      shallowProgressBar()
        .find(ProgressBarWrapper)
        .props()
    ).toMatchObject({ width: props.width });
  });

  it("should render ProgressBarPercent inside ProgressBarWrapper", () => {
    expect(
      shallowProgressBar()
        .find(ProgressBarWrapper)
        .find(ProgressBarPercent).length
    ).toBe(1);
  });

  it("should pass height and percent into ProgressBarPercent ", () => {
    expect(
      shallowProgressBar()
        .find(ProgressBarWrapper)
        .find(ProgressBarPercent)
        .props()
    ).toMatchObject({
      height: props.height,
      percent: props.percent
    });
  });
});
