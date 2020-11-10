import React from "react";
import { shallow } from "enzyme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import EyeIcon from "../EyeIcon";

describe("EyeIcon", () => {
  const shallowRenderComponent = () => shallow(<EyeIcon />);

  it("should render one FontAwesomeIcon ", () => {
    expect(shallowRenderComponent().find(FontAwesomeIcon).length).toBe(1);
  });

  it("should pass 'faEye' as 'icon' into FontAwesomeIcon", () => {
    expect(
      shallowRenderComponent()
        .find(FontAwesomeIcon)
        .props().icon
    ).toBe(faEye);
  });
});
