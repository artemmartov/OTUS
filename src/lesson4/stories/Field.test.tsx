import React from "react";
import { mount, shallow } from "enzyme";
import { Field } from "./Field";

describe("Field component", () => {
  let component: any;
  const wrapper = mount(<Field x={4} y={6} />);
  const setUp = () => shallow(<Field x={4} y={6} />);

  const componentDidMountSpy = jest.spyOn(Field.prototype, "componentDidMount");
  const componentWillUnmountSpy = jest.spyOn(
    Field.prototype,
    "componentWillUnmount"
  );
  const componentDidUpdate = jest.spyOn(Field.prototype, "componentDidUpdate");

  beforeEach(() => {
    component = setUp();
  });

  it("Should found 2 elements with the specified class", () => {
    expect(wrapper.find(".cell").length).toBe(24);
  });

  it("Should found 2 rows with the specified class", () => {
    expect(wrapper.find(".row").length).toBe(6);
  });

  it("Should found 2 elements with 1", () => {
    expect(wrapper.findWhere((el) => el.html() === "1").length).toBe(6);
  });

  it("Should coming correct props", () => {
    expect(wrapper.props()).toEqual({
      x: 4,
      y: 6,
    });
  });

  describe("Lyfecicle methods", () => {
    it("Should called componentDidMount once", () => {
      expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
    });

    it("Should not call componentWillUnmount whem component just mounted", () => {
      expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
      expect(componentWillUnmountSpy).toHaveBeenCalledTimes(0);
    });

    it("Should called componentDidUpdate", () => {
      component.setProps();
      expect(componentDidUpdate).toHaveBeenCalled();
    });

    it("Should call componentWillUnmount", () => {
      component.unmount();
      expect(componentWillUnmountSpy).toHaveBeenCalledTimes(1);
    });
  });
});
