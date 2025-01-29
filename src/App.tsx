import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <>
      <h2 style={{ marginBlock: "2rem" }}>SignUp Form</h2>
      <RegisterForm />
      <hr />
      <h2 style={{ marginBlock: "2rem" }}>SignIn Form</h2>
      <LoginForm />
    </>
  );
}

export default App;
