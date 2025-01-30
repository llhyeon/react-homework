import Input from "./components/Coopang/Input";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <>
      {/* <h2 style={{ marginBlock: "2rem" }}>SignUp Form</h2>
      <RegisterForm />
      <hr />
      <h2 style={{ marginBlock: "2rem" }}>SignIn Form</h2>
      <LoginForm /> */}
      <Input label="이메일" type="email" placeholder="아이디(이메일)" />
      <Input label="비밀번호" type="password" placeholder="비밀번호" />
    </>
  );
}

export default App;
