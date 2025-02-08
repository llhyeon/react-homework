import { useState } from "react";
import CartItem from "./cart-item";
import { type CartItemType } from "@/types/cart-types";
import tm from "@/utils/tw-merge";
import TotalPrice from "./total-price";
import CountButton from "./count-button";

function CartList() {
  const [items, setItems] = useState<CartItemType[]>([
    {
      id: 1,
      title: "1A 우유 900mL",
      price: 1880,
      count: 1,
    },
    {
      id: 2,
      title: "맛있는 콩나물 500g",
      price: 1280,
      count: 1,
    },
    {
      id: 3,
      title: "고소한 두부 1kg",
      price: 2280,
      count: 1,
    },
  ]);

  const handleInc = (id: number) => {
    const nextItems = items.map((item) => {
      if (id === item.id) {
        item.count++;
      }

      return item;
    });
    setItems(nextItems);
  };

  const handleDec = (id: number) => {
    const nextItems = items.map((item) => {
      if (id === item.id) {
        item.count--;
      }
      return item;
    });

    setItems(nextItems);
  };

  const allItemsPrice = items.reduce((acc, { count, price }) => acc + count * price, 0);

  return (
    <>
      <ul className={tm("border-y")}>
        {items.map((item: CartItemType) => {
          const totalPrice = item.count * item.price;
          return (
            <li key={item.id} className={tm("flex items-center")}>
              <CartItem id={item.id} title={item.title} price={totalPrice} />
              <CountButton
                count={item.count}
                onCountDown={handleDec}
                onCountUp={handleInc}
                id={item.id}
              />
            </li>
          );
        })}
      </ul>
      <TotalPrice totalPrice={allItemsPrice} />
    </>
  );
}

export default CartList;
