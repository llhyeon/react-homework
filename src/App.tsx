import FormInput from "./components/FormInput";

function App() {
  return (
    <>
      <FormInput label="이름" type="text" placeholder="2글자 이상 입력" buttonOn />
      <FormInput label="이메일" type="email" placeholder="user@company.io" />
      <FormInput
        label="비밀번호"
        type="password"
        placeholder="숫자, 영문 조합 6자리 이상 입력"
        buttonOn
      />
    </>
  );
}

export default App;
