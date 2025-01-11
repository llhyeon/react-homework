import React from "../../lib/react.js";

export default function Chip({ children }: { children: string }) {
  children = children ?? "TEXT";
  return React.createElement("p", { id: "chip", className: "chip" }, children);
}
