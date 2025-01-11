import React from "../../../lib/react.js";

interface Chip {
  children: string;
  style?: Record<string, string | number>;
}

const handleActive = ({ target }) => {
  target.classList.toggle("is--active");
};

export default function Chip({ children, style }: Chip) {
  // 텍스트 props 값이 없으면 기본값 설정
  children = children ?? "TEXT";
  return React.createElement(
    "button",
    {
      id: "chip",
      className: "chip",
      style: style,
      onClick: handleActive,
    },
    children
  );
}
