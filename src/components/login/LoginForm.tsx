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
