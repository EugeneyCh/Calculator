import React from "react";
import css from "./Button.module.css";

const Button = ({ keyButton, buttonsName }) => {
  return (
    <li key={keyButton} className={css.buttonWrapper}>
      {/* <button className={css.buttonView} type="button" name="gut"> */}
      {buttonsName}
      {/* </button> */}
    </li>
  );
};
export default Button;
