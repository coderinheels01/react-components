import React from "react";
import { shallow } from "enzyme";
import faker from "faker";
import TextInput, {
  TextInputInner,
  TextInputWrapper,
  Error
} from "./TextInput";
import Label from "../Label";

describe("TextInput", () => {
  let props;

  const shallowTextInput = () => shallow(<TextInput {...props} />);

  beforeEach(() => {
    props = {
      htmlId: faker.random.word(),
      label: faker.random.word(),
      required: false,
      name: "",
      type: "text",
      placeholder: faker.random.words(),
      children: undefined,
      onChange: jest.fn(),
      value: faker.random.word(),
      error: undefined
    };
  });

  it("should render a TextInputWrapper", () => {
    expect(shallowTextInput().find(TextInputWrapper).length).toBe(1);
  });

  it("should render a Label inside TextInputWrapper", () => {
    expect(
      shallowTextInput()
        .find(TextInputWrapper)
        .find(Label).length
    ).toBe(1);
  });

  it("should render a TextInputInner inside TextInputWrapper", () => {
    expect(
      shallowTextInput()
        .find(TextInputWrapper)
        .find(TextInputInner).length
    ).toBe(1);
  });

  it("should pass htmlId as htmlFor, label and required props into Label", () => {
    expect(
      shallowTextInput()
        .find(TextInputWrapper)
        .find(Label)
        .props()
    ).toMatchObject({
      htmlFor: props.htmlId,
      label: props.label,
      required: props.required
    });
  });

  it("should pass htmlId as id, type, name, onChange, placeholder and error props into Label", () => {
    expect(
      shallowTextInput()
        .find(TextInputWrapper)
        .find(TextInputInner)
        .props()
    ).toMatchObject({
      id: props.htmlId,
      type: props.type,
      name: props.name,
      onChange: props.onChange,
      placeholder: props.placeholder,
      error: props.error
    });
  });

  describe("when error is defined", () => {
    beforeEach(() => {
      props.error = "some error";
    });
    it("should render an Error inside TextInputWrapper", () => {
      expect(
        shallowTextInput()
          .find(TextInputWrapper)
          .find(Error).length
      ).toBe(1);
    });
  });
});
