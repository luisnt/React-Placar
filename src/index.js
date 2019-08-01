import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Contador(props) {
  return props.i + 1;
}

function App() {
  const [i, setI] = useState(1);

  const inc = () => {
    setI(i + 1);
  };

  const dec = () => {
    setI(i - 1);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button className="inc" onClick={inc}>
        {" "}
        Add{" "}
      </button>
      <div>
        <Contador i={i} />
      </div>
      <button className="dec" onClick={dec}>
        {" "}
        Del{" "}
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
