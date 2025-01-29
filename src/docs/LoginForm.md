# 3주차 과제 Login & Register Form 만들기

---

## 목차

[FormInput 컴포넌트](#forminput-컴포넌트-개발)

---

### FormInput 컴포넌트 개발

1. `label, buttonOn, ...restProps`를 `props`로 받는 `FormInput` 컴포넌트 개발
2. `useId` 훅을 사용하여 `label과 input 연결`

   ```tsx
   import { useId } from "react";
   const id = useId();
   ```

3. `props`로 받는 type값이 `checkbox`나 `radio`일 경우 반환값 없이 함수가 종료되도록 설계 -> `checkbox, radio 컴포넌트`는 별도의 컴포넌트로 설계하여 관리 예정

   ```tsx
   if (restProps.type === "checkbox" || restProps.type === "radio") {
     return;
   }
   ```

4. `ComponentProps`를 확장하여 컴포넌트 props 타입 설계

   ```tsx
   import { ComponentProps, useId, useState } from "react";

   type FormInputProps = ComponentProps<"input"> & {
     label: string;
     buttonOn?: boolean;
   };
   ```

5. `useState` 리액트 훅을 사용하여 `input 컴포넌트` value의 상태관리 진행

   ```tsx
   const [inputValue, setInputValue] = useState<string>("");

   function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
     setInputValue(e.target.value);
   }
   ```

6. `buttonOn` props를 받아서 있을 경우 `보이기 버튼`이 렌더링 되도록 설계

   ```tsx
   // App.tsx
   <FormInput
     label="비밀번호"
     type="password"
     placeholder="숫자, 영문 조합 6자리 이상 입력"
     buttonOn
   />;

   // FormInput.tsx
   {
     buttonOn && (
       <button type="button">
         <img src="/icon/hidden.svg" alt="보이기 및 숨기기" width={20} height={20} />
       </button>
     );
   }
   ```
