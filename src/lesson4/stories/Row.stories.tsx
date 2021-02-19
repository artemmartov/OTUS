import React from "react";
import { Story } from "@storybook/react/types-6-0";
import { withKnobs, array } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Row, RowProps } from "./Row";

export default {
  title: "Components",
  component: Row,
  decorators: [withKnobs],
};

const Template: Story<RowProps> = () => (
  <Row
    row={array("Ячейки", ["", ""])}
    onClickHandler={action("onClickHandler")}
  />
);

export const RowComponent = Template.bind({});
