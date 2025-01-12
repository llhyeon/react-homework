# React 1주차 과제

## 목차

1. [Input 컴포넌트](#input-컴포넌트-개발)
1. [Chip 컴포넌트](#chip-컴포넌트-개발)

## 환경구성

### 사용한 라이브러리

- `ts-browser` : TypeScript 파일 컴파일러
- `live-server` : 로컬 서버 구동 라이브러리(서버 구동 명령어 : `npm run dev`)

## Input 컴포넌트 개발

1. `Input` 컴포넌트는 `input, label` 요소로 구성되어 있고 `Fragment`로 래핑되어 렌더링됨

   ```ts
   export default function Input({ label }: { label: string }) {
     label = label ?? "TEXT";
     return React.createElement(
       React.Fragment,
       {},
       React.createElement("input", { type: "checkbox", id: "switch" }),
       React.createElement("label", { htmlFor: "switch" }, label)
     );
   }
   ```

2. `label`의 `htmlFor`속성과 `id`속성의 값을 같은 값으로 주어 `label`이 클릭됐을 시 `checked = true`가 되도록 설계하였음
3. `::after` 가상 요소를 사용하여 `checked = true` 시 에는 "ON"이라는 글자가, `checked = false` 시에는 "OFF"라는 글자가 렌더링되도록 설계하였음
4. ```ts
   // checked=false일 떄
   &::after {
       position: absolute;
       content: "OFF";
       font-weight: 700;
       top: 50%;
       translate: 0 -50%;
       right: -34px;
     }
   // checked=true일 떄
   &:checked + label::after {
       content: "ON";
     }
   ```
5. 접근성을 위해 `aria-pressed` 속성을 사용하였고 `useState`를 사용하지 않았기에, `isPressed` 변수를 전역으로 설정하여 `aria-pressed` 속성이 들어있는 `input`태그를 직접 가져와 `aria-pressed`가 동적으로 변경되도록 하였음

   ```ts
   let isChecked = false;
   const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
     isChecked = e.target.checked;

     const input = document.getElementById("switch");
     if (input) {
       input.setAttribute("aria-pressed", String(isChecked));
     }
   };
   ```

6. 전체 코드는 아래와 같음

   ```ts
   import React from "../../lib/react.js";

   export default function Input() {
     let isChecked = false;
     const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
       isChecked = e.target.checked;

       const input = document.getElementById("switch");
       if (input) {
         input.setAttribute("aria-pressed", String(isChecked));
       }
     };

     return React.createElement(
       React.Fragment,
       {},
       React.createElement("input", {
         type: "checkbox",
         id: "switch",
         "aria-checked": isChecked,
         onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleClick(e),
       }),
       React.createElement("label", {
         htmlFor: "switch",
         "aria-label": "스위치",
       })
     );
   }
   ```

## Chip 컴포넌트 개발

1. `div` 태그를 사용하는 `Chip` 컴포넌트를 설계하였음.
2. `children` props를 통해 textContent를 받고, 전달값이 없을 때 기본값으로 "TEXT" 렌더링 하도록 설계
   ```ts
   children = children ?? "TEXT";
   ```
3. `isSelected` 변수를 통해 `aria-selected` 값을 동적으로 받도록 설정하였음.

   ```ts
   let isSelected = false;

     const handleSelect = () => {
       const selectedDiv = document.querySelector("#chip");

       if (selectedDiv) {
         isSelected = !isSelected;
         document.querySelector("#chip")?.setAttribute("aria-selected", String(isSelected));
       }
   ```

4. 전체 코드는 아래와 같음

   ```ts
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
   ```

## 컴포넌트 링크

- [Input 컴포넌트](./components/Input.ts)
- [Chip 컴포넌트](./components/Chip.ts)
