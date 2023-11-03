import React from "react";
import css from "./NumPad.module.css";
// import Button from "../Button/Button";

const NumPad = () => {
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
  return (
    <div className={css.numPad}>
      <ul className={css.listButton}>
        {buttonsValues.map((buttonsName) => (
          //   <Button key={buttonsName} buttonsName={buttonsName} />
          <li key={buttonsName} className={css.button}>
            {buttonsName}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default NumPad;
