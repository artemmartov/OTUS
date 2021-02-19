import React from "react";
import { Cell } from "./Cell";

export interface RowProps {
  row: string[];
  onClickHandler: (value: string) => void;
}

export const Row: React.FC<RowProps> = ({ row, onClickHandler }) => {
  return (
    <div className="row">
      {row.map((cell, index) => (
        <Cell
          cell={`${index + 1}`}
          key={index}
          onClickHandler={onClickHandler}
        />
      ))}
    </div>
  );
};
