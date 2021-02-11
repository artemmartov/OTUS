import React from "react";

import { Row } from "./Row";

export interface FieldProps {
  cells: string[][];
  onClickHandler: (value: string) => void;
}

export const onClickHandler = (value: string) => {
  // eslint-disable-next-line no-console
  console.log("string", value);
};

export const Field: React.FC<FieldProps> = ({ cells, onClickHandler }) => {
  return (
    <div>
      {cells.map((cell, index) => {
        return <Row key={index} row={cell} onClickHandler={onClickHandler} />;
      })}
    </div>
  );
};
