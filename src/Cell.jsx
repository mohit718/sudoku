import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import Hint from "./Hint";

export default function Cell({ cell, updateTable, showHint, setShowHint }) {
  function setValue(value) {
    console.log(`updating values[${cell.row}][${cell.col}]=${value}`);
    updateTable(cell.row, cell.col, value);
  }

  window.addEventListener("click", () => setShowHint(""));

  return (
    <button
      disabled={!cell.isEditable}
      className='grid-cell'
      onClick={e => {
        if (cell.isEditable) {
          e.stopPropagation();
          setShowHint(cell.id);
        }
      }}>
      <Hint
        showHint={cell.id === showHint}
        setShowHint={setShowHint}
        setValue={setValue}
      />
      {cell.number}
    </button>
  );
}
