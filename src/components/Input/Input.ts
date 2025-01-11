import React from "../../../lib/react.js";
import Checkbox from "./Checkbox";
import Label from "../Label";

export default function Input({ id }: { id: string }) {
  return React.createElement(
    "div",
    {
      className: "input-wrapper",
      id,
    },
    React.createElement(Checkbox, { id: "switch", className: "input-checkbox" }),
    React.createElement(Label, { htmlFor: "switch", className: "input-label" })
  );
}
