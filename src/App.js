import "./App.css";
import Practicecalculator from "./Practicecalculator";
import "./style.css";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState('');

  const display = (value) => {
    setInputValue(inputValue + value)
  }

  const calculate = () => {
    let answers = eval(inputValue)
    setInputValue(answers)
  }

  const clear = () => {
    setInputValue('')
  }

  return (
    <div className="App">
      <form action="" className="calculator">
        <input type="text" value={inputValue} className="value" />
        <span className="num clear" onClick={() => clear()}>
          clear
        </span>
        <span onClick={() => display("/")}>/</span>
        <span onClick={() => display("*")}>*</span>
        <span onClick={() => display("7")}>7</span>
        <span onClick={() => display("8")}>8</span>
        <span onClick={() => display("9")}>9</span>
        <span onClick={() => display("-")}>-</span>
        <span onClick={() => display("4")}>4</span>
        <span onClick={() => display("5")}>5</span>
        <span onClick={() => display("6")}>6</span>
        <span className="plus" onClick={() => display("+")}>+</span>
        <span onClick={() => display("1")}>1</span>
        <span onClick={() => display("2")}>2</span>
        <span onClick={() => display("3")}>3</span>
        <span onClick={() => display("0")}>0</span>
        <span onClick={() => display("00")}>00</span>
        <span onClick={() => display(".")}>.</span>
        <span className="num equal" onClick={() => calculate()}>=</span>
      </form>

      {/* <Practicecalculator /> */}
    </div>
  );
}

export default App;
