import { ComponentProps, useId, useState } from "react";
import "./FormInput.css";

type FormInputProps = ComponentProps<"input"> & {
  label: string;
  buttonOn?: boolean;
};

export default function FormInput({ label, buttonOn, ...restProps }: FormInputProps) {
  const id = useId();
  const [inputValue, setInputValue] = useState<string>("");

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  // checkbox, radio는 다른 컴포넌트로 관리할 예정, type = radio || checkbox 일 경우 반환 X
  if (restProps.type === "checkbox" || restProps.type === "radio") {
    return;
  }

  return (
    <div className="form-input">
      <label htmlFor={id}>{label}</label>
      <div>
        <input id={id} value={inputValue} onChange={handleChangeInput} {...restProps} />
        {buttonOn && (
          <button type="button">
            <img src="/icon/hidden.svg" alt="보이기 및 숨기기" width={20} height={20} />
          </button>
        )}
      </div>
      <hr />
    </div>
  );
}
