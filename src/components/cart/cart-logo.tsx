import tm from "@/utils/tw-merge";

function CartLogo() {
  return (
    <h1 className={tm("flex items-center")}>
      <img src="/icon/cart-logo.svg" alt="" width={80} height={80} />
      <span className={tm("text-gray-700 font-bold text-[40px]")}>장바구니</span>
    </h1>
  );
}

export default CartLogo;
