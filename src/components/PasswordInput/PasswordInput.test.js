import React from "react";
import { shallow } from "enzyme";
import faker from "faker";
import PasswordInput from "./PasswordInput";
import TextInput from "../TextInput";
import ProgressBar from "../ProgressBar";
import { Link } from "react-router-dom";

describe("PasswordInput", () => {
  let props;

  const shallowPasswordInput = () => shallow(<PasswordInput {...props} />);

  beforeEach(() => {
    props = {
      label: faker.random.word(),
      value: faker.random.words(),
      minLength: faker.random.number(),
      placeholder: faker.random.words(),
      htmlId: faker.random.word(),
      quality: faker.random.number(),
      showTogglePasswordIcon: false,
      name: faker.random.word(),
      error: undefined,
      onChange: jest.fn()
    };
  });

  it("should render a div", () => {
    expect(shallowPasswordInput().find("div").length).toBe(1);
  });

  it("should render TextInput inside a div", () => {
    expect(
      shallowPasswordInput()
        .find("div")
        .find(TextInput).length
    ).toBe(1);
  });

  it("should render ProgressBar inside a TextInput", () => {
    expect(
      shallowPasswordInput()
        .find("div")
        .find(TextInput)
        .find(ProgressBar).length
    ).toBe(1);
  });

  describe("when showTogglePasswordIcon is true", () => {
    beforeEach(() => {
      props.showTogglePasswordIcon = true;
    });
    it("should render Link inside a TextInput", () => {
      expect(
        shallowPasswordInput()
          .find("div")
          .find(TextInput)
          .find(Link).length
      ).toBe(1);
    });
  });
});
