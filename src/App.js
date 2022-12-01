import { useEffect, useState } from "react";
import Suduko from "./Suduko";
import data from "./sample";

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min + 1;
}

function App() {
  const [values, setValues] = useState([]);
  useEffect(() => {
    // generate();
  }, []);

  async function getValues() {
    return data.map((row, i) =>
      row.map((col, j) => ({
        id: `${i}${j}`,
        number: col > 0 ? col : null,
        row: i,
        col: j,
        isEditable: col === 0,
      }))
    );
  }

  function updateTable(row, col, value) {
    let tempValues = [...values];
    tempValues[row][col].number = value;
    setValues(tempValues);
  }

  function onClear() {
    setValues(
      values.map(row =>
        row.map(col => ({ ...col, number: col.isEditable ? null : col.number }))
      )
    );
  }

  function onSubmit(){
    console.log(`submit`,values);
  }

  function generate(){
    getValues().then(values => setValues(values));
  }

  return (
    <div className="app">
      <h1 style={{ textAlign: "center", fontWeight: "600", color: "#fff" }}>
        Suduko
      </h1>
      <div className="row">
        <div className="col-3 flex-center">
          <button onClick={generate} className="btn btn-lg btn-lightcoral">Generate</button>
          <div className="btn-group">
            <button onClick={onClear} className="btn btn-sm btn-lightgray">
              Clear
            </button>
            <button onClick={onSubmit} className="btn btn-sm btn-lightgreen">Submit</button>
          </div>
        </div>
        <div className="col-9">
          <Suduko table={values} updateTable={updateTable} />
        </div>
      </div>
    </div>
  );
}

export default App;
