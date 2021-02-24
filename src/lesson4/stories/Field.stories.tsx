import React from "react";
import { withKnobs, number } from "@storybook/addon-knobs";
import { Field } from "./Field";

export default {
  title: "Components",
  component: Field,
  decorators: [withKnobs],
};

export const FieldComponent = () => (
  <Field x={number("По горизонтали", 2)} y={number("По вертикали", 9)} />
);
