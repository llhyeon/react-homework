import CartList from "./components/cart/cart-list";
import CartLogo from "./components/cart/cart-logo";
import tm from "./utils/tw-merge";

function App() {
  return (
    <>
      <section className={tm("min-w-[320px] max-w-[800px] px-6 ")}>
        <CartLogo />
        <CartList />
      </section>
    </>
  );
}

export default App;
