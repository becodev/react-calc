import React from "react";
import Button from "./components/Button";
import Result from "./components/Result";
import "./App.css";

const App = () => {
  return (
    <div className="react-calculator">
      <Result value={"0"} />
      <div className="numbers">
        <Button text="1" />
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>0</button>
      </div>
      <div className="functions">
        <button>Clear</button>
        <button>R</button>
      </div>
      <div className="math-operations">
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
        <button>=</button>
      </div>
    </div>
  );
};

export default App;
