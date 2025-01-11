import React from "../../lib/react.js";

export default function Checkbox(props) {
  return React.createElement("input", {
    type: "checkbox",
    ...props,
  });
}
