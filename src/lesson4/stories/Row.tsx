import React from "react";
import { Cell } from "./Cell";

export interface RowProps {
  row: string[];
  showNumber: (value: string) => void;
}

export const Row: React.FC<RowProps> = ({ row, showNumber }) => {
  return (
    <div className="row">
      {row.map((cell, index) => (
        <Cell cell={`${index + 1}`} key={index} showNumber={showNumber} />
      ))}
    </div>
  );
};
