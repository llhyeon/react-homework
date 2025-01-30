# 3주차 과제 Login & Register Form 만들기

---

## 목차

1. [FormInput 컴포넌트](#forminput-컴포넌트-개발)
2. [Button 컴포넌트](#button-컴포넌트-개발)
3. [Register Form 컴포넌트](#register-form-컴포넌트-개발)
4. [과제를 통해 알게된 사실](#과제를-통해-알게된-사실)

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

### Button 컴포넌트 개발

1. `ComponentProps`를 사용한 `intersection`으로 타입 정의

   ```tsx
   type ButtonProps = ComponentProps<"button"> & {
     // type은 옵셔널로 설정하고 기본값 설정
     type?: string;
     children: string;
   };
   ```

2. `children`의 값을 props로 받고 버튼의 텍스트로 렌더링

   ```tsx
   <button className="btn" type={type}>
     {children}
   </button>
   ```

### Form 컴포넌트 개발

1. 위에 만든 `FormInput 컴포넌트`와 `Button 컴포넌트`를 조합하여 `Register Form 컴포넌트`와 `Login Form`를 설계하였음

   ```tsx
   // Register Form
   import Button from "@/components/Button";
   import FormInput from "@/components/FormInput";
   import "@/components/RegisterForm.css";

   export default function RegisterForm() {
     function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
       e.preventDefault();
     }
     return (
       <form className="register" onSubmit={handleSubmit}>
         <FormInput label="이름" type="text" placeholder="2글자 이상 입력" />
         <FormInput label="이메일" type="email" placeholder="user@company.id" />
         <FormInput
           label="패스워드"
           type="password"
           placeholder="숫자, 영문 조합 6자리 이상 입력"
           buttonOn
         />
         <FormInput
           label="패스워드 확인"
           type="password"
           placeholder="입력한 패스워드 다시 입력"
           buttonOn
         />
         <Button type="submit">회원가입</Button>
       </form>
     );
   }
   ```

   ```tsx
   // Login Form 컴포넌트
   import FormInput from "@/components/FormInput";
   import Button from "./Button";
   import "@/components/LoginForm.css";

   export default function LoginForm() {
     function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
       e.preventDefault();
     }

     return (
       <form className="login" onSubmit={handleSubmit}>
         <FormInput label="이메일" type="email" placeholder="user@company.id" />
         <FormInput
           label="패스워드"
           type="password"
           placeholder="숫자, 영문 조합 6자리 이상 입력"
           buttonOn
         />
         <Button type="submit">로그인</Button>
       </form>
     );
   }
   ```

2. 내부의 컴포넌트의 크기는 반응형으로 설계하였고 전체를 감싸고 있는 `register` 클래스 요소에 크기 부여를 하여 화면 크기에 따라 크기가 변하도록 설계하였음

3. form 요소이기에 기본 동작을 제한하는 함수를 만들어 `onSubmit` 이벤트에 할당하였음.

### 과제를 통해 알게된 사실

1. React 19버전 부터 사용할 수 있는 form요소의 `action`속성을 통해 `submit`이벤트 핸들러를 컨트롤 할 수 있지만 `action`속성에 할당되는 이벤트는 `반드시 비동기 함수여야만 한다.`

#### 쿠팡 과제는 시간이 없어서 진행하다가 제출을 못 했습니다 죄송합니다ㅠㅠ
