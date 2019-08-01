import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Placar(props) {
  const [placar, setPlacar] = useState(props.placar || 0);

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
  return (
    <div className="App">
      <h1>Placar da partida</h1>
      <Placar placar={0} nomeTime="Time A" />
      <b>x</b>
      <Placar placar={0} nomeTime="Time B" />
      <div>
        <b>by LuisNt@gmail.com</b>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
