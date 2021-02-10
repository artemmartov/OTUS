import React from "react";
// import './Cell.css'

export interface CellProps {
  cell: string;
  showNumber: (value: string) => void;
}

export const Cell: React.FC<CellProps> = ({ cell, showNumber }) => {
  return (
    <div className="cell" onClick={() => showNumber(cell)}>
      {cell}
    </div>
  );
};
