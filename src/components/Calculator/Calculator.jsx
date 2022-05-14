import { useState } from "react";
import "./Calculator.css";
const Calculator = () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [firstNumber, setFirstNumber] = useState([]);
  const [secondNumber, setSecondNumber] = useState([]);
  const [action, setAction] = useState("");
  const [result, setResult] = useState("");

  const clickHandler = (e) => {
    const selectedButton = Number(e.target.innerText);
    // define first number
    if (numbers.includes(selectedButton) && !action) {
      const updatedFirstNumber = [...firstNumber];
      updatedFirstNumber.push(selectedButton);
      setFirstNumber(updatedFirstNumber);
    }
    //define second number
    else if (numbers.includes(selectedButton) && action) {
      const updatedSecondNumber = [...secondNumber];
      updatedSecondNumber.push(selectedButton);
      setSecondNumber(updatedSecondNumber);
    }
    //set myAction
    else if (
      !numbers.includes(selectedButton) &&
      e.target.innerText !== "=" &&
      e.target.innerText !== "CE"
    ) {
      setAction(e.target.innerText);
    }
    // reset calc screen
    else if (e.target.innerText === "CE") {
      setFirstNumber([]);
      setSecondNumber([]);
      setAction("");
      setResult("");
      document.getElementById("equal").classList.remove("show-equal");
    }
    //finally calculate (if secondNumber defined go to calculate)
    else if (secondNumber.length) calculateResult();
  };

  const calculateResult = () => {
    document.getElementById("equal").classList.add("show-equal");
    switch (action) {
      case "+": {
        const result =
          Number(firstNumber.join("")) + Number(secondNumber.join(""));
        return setResult(result);
        break;
      }
      case "-": {
        const result =
          Number(firstNumber.join("")) - Number(secondNumber.join(""));
        return setResult(result);
        break;
      }
      case "*": {
        const result =
          Number(firstNumber.join("")) * Number(secondNumber.join(""));
        return setResult(result);
        break;
      }
      case "/": {
        const result =
          Number(firstNumber.join("")) / Number(secondNumber.join(""));
        return setResult(result.toFixed(5));
        break;
      }

      default:
        break;
    }
  };

  return (
    <section className="container">
      <div className="result-screen">
        <span>{firstNumber.join("")}</span>
        <span>{action}</span>
        <span>{secondNumber.join("")}</span>
        <span id="equal">{"= " + result}</span>
      </div>
      <table className="table" onClick={(e) => clickHandler(e)}>
        <tbody>
          <tr>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>*</th>
          </tr>
          <tr>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>/</th>
          </tr>
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>-</th>
          </tr>
          <tr>
            <th>CE</th>
            <th>0</th>
            <th>=</th>
            <th>+</th>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Calculator;
