import React from "../../lib/react.js";

export default function Label({ htmlFor }) {
  return React.createElement(
    "label",
    { htmlFor },
    React.createElement("span", { className: "btn" })
  );
}
