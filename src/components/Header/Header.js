import React, { useState } from "react";
import css from "./Header.module.css";

const Header = () => {
  const [theme, setTheme] = useState(1);

  const handleThemeChange = (e) => {
    const newTheme = parseInt(e.target.value);
    setTheme(newTheme);
  };

  return (
    <div className={css.header}>
      <div className={css.title}>calc</div>
      <div className={css.themeTitle}>THEME</div>
      <label className={css.themeSwitcher}>
        1 2 3
        <input
          type="range"
          name="theme_switcher"
          value={theme}
          min="1"
          max="3"
          step="1"
          onChange={handleThemeChange}
        />
      </label>
    </div>
  );
};
export default Header;
