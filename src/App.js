/* eslint no-eval: 0 */
import React, { useState } from "react";
import Functions from "./components/Functions";
import MathOperations from "./components/MathOperations";
import Result from "./components/Result";
import Numbers from "./components/Numbers";
import words from "lodash.words";
import "./App.css";

const App = () => {
  const [stack, setStack] = useState("");

  const items = words(stack, /[^-^+^*^/]+/g);

  const value = items.length > 0 ? items[items.length - 1] : "0";

  return (
    <div className="react-calculator">
      <Result value={value} />
      <Numbers onClickNumber={(number) => setStack(`${stack}${number}`)} />
      <Functions
        onContentClear={() => {
          setStack("");
        }}
        onDelete={() => {
          if (stack.length > 0) {
            const newStack = stack.substring(0, stack.length - 1);
            setStack(newStack);
          }
        }}
      />
      <MathOperations
        onClickOperation={(operation) => {
          setStack(`${stack}${operation}`);
        }}
        onClickEqual={(equal) => {
          setStack(eval(stack).toString());
        }}
      />
    </div>
  );
};

export default App;
