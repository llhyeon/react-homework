import React from "../../lib/react.js";

interface Chip {
  children: string;
  style?: Record<string, string | number>;
}

const handleActive = (e: React.MouseEvent) => {
  e.target.classList.toggle("is--active");
};

export default function Chip({ children, style }: Chip) {
  // 텍스트 props 값이 없으면 기본값 설정
  children = children ?? "TEXT";

  let isSelected = false;

  const handleSelect = () => {
    const selectedDiv = document.querySelector("#chip");

    if (selectedDiv) {
      isSelected = !isSelected;
      document.querySelector("#chip")?.setAttribute("aria-selected", String(isSelected));
    }
  };

  return React.createElement(
    "div",
    {
      id: "chip",
      className: "chip",
      style: style,
      "aria-selected": isSelected,
      onClick: (e: React.MouseEvent) => {
        handleActive(e);
        handleSelect();
      },
    },
    children
  );
}
