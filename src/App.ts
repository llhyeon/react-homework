import React from "../lib/react.js";
import Chip from "./components/Chip";
import Input from "./components/Input";

export default function App() {
  return React.createElement(
    "div",
    { className: "components" },
    React.createElement(Chip, {}, "click me !"),
    React.createElement(Input)
  );
}
