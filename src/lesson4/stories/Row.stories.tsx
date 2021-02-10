import React from "react";
import { Story } from "@storybook/react/types-6-0";
import { withKnobs, array } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { showNumber } from "./Field";
import { Row, RowProps } from "./Row";

export default {
  title: "Components",
  component: Row,
  decorators: [withKnobs],
};

const Template: Story<RowProps> = () => (
  <Row row={array("Ячейки", ["", "", ""])} showNumber={action("showNumber")} />
);

export const RowComponent = Template.bind({});
