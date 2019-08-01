import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Placar(props) {
  const [placar, setPlacar] = useState(props.placar || 0);
  const [nomeTime, setNomeTime] = useState(props.nomeTime || "");

  const incPLacar = () => {
    setPlacar(placar + 1);
  };

  return (
    <div className="Placar">
      <h2>{props.nomeTime}</h2>
      <div>{placar}</div>
      <button className="inc" onClick={incPLacar}>
        Marcar
      </button>
    </div>
  );
}

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const ini = () => {
    setA(0);
    setB(0);
  };

  return (
    <div className="App">
      <h1>Placar da partida</h1>
      <Placar placar={a} nomeTime="Time A" cor="#F00" />
      <Placar placar={b} nomeTime="Time B" cor="#00F" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
