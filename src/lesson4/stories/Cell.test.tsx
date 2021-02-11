import React from "react";
import { shallow } from "enzyme";

import { Cell } from "./Cell";

describe("Cell component", () => {
  const mockCallBack = jest.fn();
  let componentCell: any;

  beforeEach(() => {
    componentCell = shallow(<Cell onClickHandler={mockCallBack} cell="2" />);
  });

  it("Should render component with the correct value ", () => {
    expect(componentCell.matchesElement(<div>2</div>)).toBe(true);
  });

  it("Shoult get snapshot component", () => {
    expect(componentCell).toMatchInlineSnapshot(`ShallowWrapper {}`);
  });

  test("Click simulation", () => {
    componentCell.simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
