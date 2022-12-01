import React from "react";
import Cell from "./Cell";

export default function Row({ row, updateTable, showHint, setShowHint }) {
  return (
    <div className="grid-row">
      {row.map((cell, index) => (
        <Cell key={index} cell={cell} updateTable={updateTable} showHint={showHint} setShowHint={setShowHint} />
      ))}
    </div>
  );
}
