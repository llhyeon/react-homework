import { useId } from "react";
import "@/components/Coopang/Input.css";

type InputProps = {
  label: string;
  placeholder?: string;
  type?: string;
};

export default function Input({ label, type = "text", placeholder }: InputProps) {
  const id = useId();

  // type 값이 'radio' 나 'checkbox'로 들어오면 리턴처리 -> 별도의 컴포넌트로 관리 예정
  if (type === "radio" || type === "checkbox") return;

  let img;

  switch (type) {
    case "email":
      img = <img src="/coopang/email.svg" alt="이메일" />;
      break;
    case "password":
      img = <img src="/coopang/password.svg" alt="password" />;
  }

  return (
    <div className="input">
      {img}
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input type={type} id={id} placeholder={placeholder} />
      {type === "password" && <button className="input__show-btn" type="button"></button>}
    </div>
  );
}
