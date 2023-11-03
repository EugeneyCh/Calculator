import css from "./App.module.css";
import Header from "./components/Header/Header";
import NumPad from "./components/NumPad/NumPad";
import Scoreboard from "./components/Scoreboard/Scoreboard";

function App() {
  return (
    <div className={css.app}>
      <Header />
      <Scoreboard />
      <NumPad />
    </div>
  );
}

export default App;
