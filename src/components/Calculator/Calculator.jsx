import { useState } from "react";
import "./Calculator.css";
const Calculator = () => {
   
  return (
    <section className="container">
      <div className="result-screen">
        <span>11</span>
        <span>-</span>
        <span>10</span>
        <span >=1</span>
      </div>
      <table className="table">
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
