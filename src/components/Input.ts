import React from "../../lib/react.js";

export default function Input() {
  let isChecked = false;
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    isChecked = e.target.checked;

    const input = document.getElementById("switch");
    if (input) {
      input.setAttribute("aria-pressed", String(isChecked));
    }
  };

  return React.createElement(
    React.Fragment,
    {},
    React.createElement("input", {
      type: "checkbox",
      id: "switch",
      "aria-checked": isChecked,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleClick(e),
    }),
    React.createElement("label", {
      htmlFor: "switch",
      "aria-label": "스위치",
    })
  );
}
