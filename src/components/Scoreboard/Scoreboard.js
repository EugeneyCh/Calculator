import React, { useState } from "react";
import css from "./Scoreboard.module.css";

const Scoreboard = () => {
  const [number, setNumber] = useState("399,981");

  const handleNumberChange = (e) => {
    const newNumber = parseInt(e.target.value);
    setNumber(newNumber);
  };

  return (
    <div>
      <p
        className={css.input}
        maxLength="11"
        value={number}
        onChange={handleNumberChange}
      >
        {number}
      </p>
    </div>
  );
};
export default Scoreboard;
