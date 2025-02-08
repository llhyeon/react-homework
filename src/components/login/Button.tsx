import { ComponentProps } from "react";
import "./Button.css";

type ButtonProps = ComponentProps<"button"> & {
  // type은 옵셔널로 설정하고 기본값 설정
  type?: string;
  children: string;
};

export default function Button({ children, type = "button" }: ButtonProps) {
  return (
    <>
      <button className="btn" type={type}>
        {children}
      </button>
    </>
  );
}
