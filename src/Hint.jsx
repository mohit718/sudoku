import React, { useState } from "react";

export default function Hint({ showHint, setShowHint, setValue }) {
    const onClick = x=> e=> {
        e.stopPropagation();
        setValue(x+1);
        setShowHint('');
    }
  return (
    <div className='hint' style={showHint?{display:'grid'}:{}}>
      {[...(Array(9).keys())].map(x => (
        <button key={x} onClick={onClick(x)}>
          {x+1}
        </button>
      ))}
    </div>
  );
}
