import React from "react";
import { shallow } from "enzyme";

import { Cell } from "./Cell";

describe("Одна ячейка", () => {
  const mockCallBack = jest.fn();
  const componentCell = shallow(<Cell showNumber={mockCallBack} cell="2" />);

  it("Рендер компонента", () => {
    expect(componentCell.matchesElement(<div>2</div>)).toBe(true);
  });

  test("Симуляция клика по ячейке", () => {
    componentCell.simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
