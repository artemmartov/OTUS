import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Cell, CellProps } from "./Cell";

export default {
  title: "Components",
  component: Cell,
  decorators: [withKnobs],
} as Meta;

const Template: Story<CellProps> = () => (
  <Cell
    onClickHandler={action("onClickHandler")}
    cell={text("Значение", "1")}
  />
);

export const CellComponent = Template.bind({});
