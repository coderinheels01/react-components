import React from "react";
import { shallow } from "enzyme";
import faker from "faker";
import Label, { LabelWrapper, LabelRequired } from "./Label";

describe("Label", () => {
  let props;

  const shallowLabel = () => shallow(<Label {...props} />);

  beforeEach(() => {
    props = {
      label: faker.random.word(),
      htmlFor: faker.random.word(),
      required: faker.random.boolean()
    };
  });

  it("should render a 'LabelWrapper' ", () => {
    expect(shallowLabel().find(LabelWrapper).length).toBe(1);
  });

  it("should pass 'htmlFor' into 'LabelWrapper' ", () => {
    expect(
      shallowLabel()
        .find(LabelWrapper)
        .props()
    ).toMatchObject({
      htmlFor: props.htmlFor
    });
  });

  it("should render 'label' inside 'LabelWrapper' ", () => {
    expect(
      shallowLabel()
        .find(LabelWrapper)
        .text()
    ).toEqual(props.label);
  });

  describe("if 'required' is 'true'", () => {
    beforeEach(() => {
      props.required = true;
    });
    it("should render a 'LabelRequired' inside 'LabelWrapper' ", () => {
      expect(
        shallowLabel()
          .find(LabelWrapper)
          .find(LabelRequired).length
      ).toBe(1);
    });
  });
});
