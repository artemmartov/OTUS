import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Field } from "./Field";

export default {
  title: "Components",
  component: Field,
  decorators: [withKnobs],
};

export const FieldComponent = () => (
  <Field />
);

// Это компонент без пропсов, а значит мы не можем указать к нему экшен.
// Можем ли мы как-то использовать экшен не вместо пропса,
// а вместо той функции, что внутри компонента? (onClickHandler)
