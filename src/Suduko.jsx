import React, { useState } from 'react'
import Cell from './Cell'
import Row from './Row'

export default function Suduko({table, updateTable}) {
  const [showHint, setShowHint] = useState('');
  return (
    <div className='grid'>
        {table.map((row,index)=><Row key={index} row={row} updateTable={updateTable} showHint={showHint} setShowHint={setShowHint}/>)}
    </div>
  )
}
