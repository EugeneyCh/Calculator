import React, { useEffect, useState } from "react";
import css from "./NumPad.module.css";
// import Button from "../Button/Button";

const NumPad = () => {
  const [selectedButton, setSelectedButton] = useState("");
  const [result, setResult] = useState("0");
  const [firstAction, setFirstAction] = useState("");
  const [firstNumber, setFirstNumber] = useState("");
  const [isFirstNumber, setIsFirstNumber] = useState(false);
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
    if (buttonsName === "-" && lastNumber.length === 0) {
      createNumber("-");
    } else {
      if (lastNumber === "-") {
        deleteSign();
      }
    }
    switch (buttonsName) {
      case "RESET":
        return reset();
      case "DEL":
        return deleteSign();
      case "=":
        return actionWithNumbers();
      case "+":
        return createAction("+");
      case "-":
        return createAction("-");
      case "x":
        return createAction("*");
      case "/":
        return createAction("/");
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
    isFirstNumber && setLastNumber("");
    if (num === ",") {
      setIsDote(true);
    }
    if (isDote && num === ",") {
      return;
    }
    // let numberFull = lastNumber + num;
    setLastNumber(lastNumber + num);
  };

  ////////   RESET    /////////////////////

  const reset = () => {
    setSelectedButton("");
    setResult("0");
    setLastNumber("");
    setIsDote(false);
    setFirstAction("");
    setFirstNumber("");
    setIsFirstNumber(false);
  };

  ///////    DELETE       ////////////////////
  const deleteSign = () => {
    if (lastNumber[lastNumber.length - 1] === ",") {
      setIsDote(false);
    }
    if (lastNumber.length !== 0) {
      setLastNumber(lastNumber.slice(0, -1));
      setFirstNumber("");
      setFirstAction("");
    }
  };

  //////////////
  //  ??  firstAction.length>0&&isFirstNumber?actionWithNumbers():

  const createAction = (num) => {
    setFirstAction(num);
    if (result === "0" && firstNumber === "" && lastNumber.length > 0) {
      setResult(lastNumber);
    }
    setFirstNumber(lastNumber);
    setIsFirstNumber(true);
    setLastNumber("");
    setIsDote(false);
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
    // console.log(selectedButton);
    console.log(firstAction);
    console.log("Last sign is...", lastNumber[lastNumber.length - 1]);
    console.log(isDote);
    console.log(lastNumber);
    console.log("Action", firstAction);
    console.log("FirstNumber", firstNumber);
  }, [lastNumber, firstAction]);

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
