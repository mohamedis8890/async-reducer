import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import { CounterProvider } from "./context/CounterContext";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Async Reducer Example</h2>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </div>
  );
}

export default App;
