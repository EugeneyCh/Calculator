import React, { useState } from "react";
import css from "./Scoreboard.module.css";

const Scoreboard = () => {
  const [number, setNumber] = useState(399.981);

  const handleNumberChange = (e) => {
    const newNumber = parseInt(e.target.value);
    setNumber(newNumber);
  };

  return (
    <div>
      <input
        className={css.input}
        value={number}
        onChange={handleNumberChange}
      />
    </div>
  );
};
export default Scoreboard;
