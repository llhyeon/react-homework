import Button from "@/components/Button";
import FormInput from "@/components/FormInput";
import "@/components/RegisterForm.css";

export default function RegisterForm() {
  return (
    <div className="register">
      <FormInput label="이름" placeholder="2글자 이상 입력" />
      <FormInput label="이메일" placeholder="user@company.id" />
      <FormInput label="패스워드" placeholder="숫자, 영문 조합 6자리 이상 입력" buttonOn />
      <FormInput label="패스워드 확인" placeholder="입력한 패스워드 다시 입력" buttonOn />
      <Button>회원가입</Button>
    </div>
  );
}
