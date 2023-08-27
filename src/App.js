import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export const replaceCameWithSpaces = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
};
function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);
  const newBtnColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div className="App">
      <button style={{ backgroundColor: disabled ? "gray" : buttonColor }} onClick={() => setButtonColor(newBtnColor)} disabled={disabled}>
        Change to {newBtnColor}
      </button>
      <input type="checkbox" defaultChecked={disabled} onChange={(e) => setDisabled(e.target.checked)} id="disable-btn-checkbox" />
      <label htmlFor="disable-btn-checkbox">Disable button</label>
    </div>
  );
}

export default App;
