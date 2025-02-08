import Button from "@/components/Button";
import FormInput from "@/components/FormInput";
import "@/components/RegisterForm.css";
import TailwindButton from "./TailwindButton";

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
      <TailwindButton>버튼</TailwindButton>
    </form>
  );
}
