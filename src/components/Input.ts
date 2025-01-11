import React from "../../lib/react.js";
import Checkbox from "./Checkbox";
import Label from "./Label";

const { createElement } = React;

interface InputComponent {
  id: string;
}

export default function Input({ id }: InputComponent) {
  return createElement(
    "div",
    {
      className: "input-wrapper",
      id,
    },
    createElement(Checkbox, { id: "switch", className: "input-checkbox" }),
    createElement(Label, { htmlFor: "switch", className: "input-label" })
  );
}
