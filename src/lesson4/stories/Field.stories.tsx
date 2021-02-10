import React from "react";
import { Story } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";
import { Field, FieldProps } from "./Field";

export default {
  title: "Components",
  component: Field,
  decorators: [withKnobs],
};

export const FieldComponent: Story<FieldProps> = () => (
  <Field
    cells={object("Данные", [
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", ""],
    ])}
    showNumber={action("showNumber")}
  />
);
