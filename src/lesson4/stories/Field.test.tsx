import React from "react";
import { mount } from "enzyme";
import { Field } from "./Field";

describe("Компонент со всеми полями", () => {
  const mockCallBack = jest.fn();
  const wrapper = mount(
    <Field cells={[[""], [""]]} showNumber={mockCallBack} />
  );

  it("В компоненте Field найдено 2 ячейки", () => {
    expect(wrapper.find(".cell").length).toBe(2);
  });

  it("В компоненте Field найдено 2 строчки по горизонтали", () => {
    expect(wrapper.find(".row").length).toBe(2);
  });

  it("В компоненте Field найдено 2 ячейки c цифрой 1", () => {
    expect(wrapper.findWhere((el) => el.html() === "1").length).toBe(2);
  });
});
