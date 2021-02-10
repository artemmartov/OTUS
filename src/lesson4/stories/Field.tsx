import React from "react";

import { Row } from "./Row";

export interface FieldProps {
  cells: string[][];
  showNumber: (value: string) => void;
}

export const showNumber = (value: string) => {
// eslint-disable-next-line no-console
  console.log("string", value);
};

export const Field: React.FC<FieldProps> = ({ cells, showNumber }) => {
  return (
    <div>
      {cells.map((cell, index) => {
        return <Row key={index} row={cell} showNumber={showNumber} />;
      })}
    </div>
  );
};
