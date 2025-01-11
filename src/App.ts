import React from "../lib/react.js";
import Input from "./components/Input";
import Chip from "./components/Chip";

export default function App() {
  return React.createElement(
    "div",
    { className: "components" },
    React.createElement(Input, {
      id: "input-component",
    }),
    React.createElement(Chip, null, "HI")
  );
}
