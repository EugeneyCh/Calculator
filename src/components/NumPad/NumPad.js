import React, { useEffect, useState } from "react";
import css from "./NumPad.module.css";
// import Button from "../Button/Button";

const NumPad = () => {
  const [selectedButton, setSelectedButton] = useState("");
  const [result, setResult] = useState("0");
  const [firstAction, setFirstAction] = useState("+");
  const [firstNumber, setFirstNumber] = useState("");
  const [lastNumber, setLastNumber] = useState("");
  const [isDote, setIsDote] = useState(false);
  const buttonsValues = [
    "7",
    "8",
    "9",
    "DEL",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ",",
    "0",
    "/",
    "x",
    "RESET",
    "=",
  ];
  const checkButton = (buttonsName) => {
    switch (buttonsName) {
      case "RESET":
        return reset();
      case "DEL":
        return deleteAct();
      case "=":
        return actionWithNumbers();
      case "+":
        return setFirstAction("+");
      case "-":
        return setFirstAction("-");
      case "x":
        return setFirstAction("*");
      case "/":
        return setFirstAction("/");
      default:
        createNumber(buttonsName);
        break;
    }
  };
  const updateSelectedButton = (sign) => {
    setSelectedButton(sign);
    checkButton(sign);
  };
  const createNumber = (num) => {
    if (num === ",") {
      setIsDote(true);
    }
    if (isDote && num === ",") {
      return;
    }
    let numberFull = lastNumber + num;
    setLastNumber(numberFull);
  };
  const reset = () => {
    setSelectedButton("");
    setResult("0");
    setLastNumber("");
  };
  const deleteAct = () => {
    lastNumber.length !== 0 && setLastNumber(lastNumber.slice(0, -1));
  };
  const actionWithNumbers = () => {
    let intResult = +result;
    setResult();
  };
  // const sum = () => {
  //   setResult(result + +lastNumber);
  //   setLastNumber("");
  // };
  useEffect(() => {
    // checkButton(selectedButton);
    console.log(selectedButton);
    console.log(firstAction);
    console.log(lastNumber);
  }, [lastNumber]);

  return (
    <div className={css.numPad}>
      <ul className={css.listButton}>
        {buttonsValues.map((buttonsName) => (
          //   <Button key={buttonsName} buttonsName={buttonsName} />
          <li
            key={buttonsName}
            className={css.button}
            onClick={() => {
              updateSelectedButton(buttonsName);
            }}
          >
            {buttonsName}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default NumPad;
