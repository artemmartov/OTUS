import React from "react";
// import './Cell.css'

export interface CellProps {
  cell: string;
  onClickHandler: (value: string) => void;
}

export const Cell: React.FC<CellProps> = ({ cell, onClickHandler }) => {
  return (
    <div className="cell" onClick={() => onClickHandler(cell)}>
      {cell}
    </div>
  );
};
