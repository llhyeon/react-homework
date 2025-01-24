import { ComponentProps, useId } from "react";
import "./FormInput.css";

type FormInputProps = ComponentProps<"input"> & {
  label: string;
};

export default function FormInput({ label, ...restProps }: FormInputProps) {
  const id = useId();

  // checkbox, radio는 다른 컴포넌트로 관리할 예정, type = radio || checkbox 일 경우 반환 X
  if (restProps.type === "checkbox" || restProps.type === "radio") {
    return;
  }

  return (
    <div className="form-input">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...restProps} />
    </div>
  );
}
