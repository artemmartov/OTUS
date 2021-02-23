import React from "react";
import { mount } from "enzyme";
import { Field } from "./Field";

describe("Field component", () => {
  const wrapper = mount(<Field x={4} y={6} />);

  it("Should found 2 elements with the specified class", () => {
    expect(wrapper.find(".cell").length).toBe(24);
  });

  it("Should found 2 rows with the specified class", () => {
    expect(wrapper.find(".row").length).toBe(6);
  });

  it("Should found 2 elements with 1", () => {
    expect(wrapper.findWhere((el) => el.html() === "1").length).toBe(6);
  });
});
