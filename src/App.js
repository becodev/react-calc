import React from "react";
import Functions from "./components/Functions";
import MathOperations from "./components/MathOperations";
import Result from "./components/Result";
import Numbers from "./components/Numbers";
import "./App.css";

const App = () => {
  return (
    <div className="react-calculator">
      <Result value={"0"} />
      <Numbers
        onClickNumber={(number) => console.log("Click en number", number)}
      />
      <Functions
        onContentClear={() => console.log("clear")}
        onDelete={console.log("onDelete")}
      />
      <MathOperations
        onClickOperation={(operation) => console.log(operation)}
        onClickEqual={(equal) => console.log(equal)}
      />
    </div>
  );
};

export default App;
