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
      remain: 5,
    },
    {
      id: 2,
      title: "맛있는 콩나물 500g",
      price: 1280,
      count: 1,
      remain: 8,
    },
    {
      id: 3,
      title: "고소한 두부 1kg",
      price: 2280,
      count: 1,
      remain: 3,
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
          return (
            <li key={item.id} className={tm("flex items-center")}>
              <CartItem id={item.id} title={item.title} price={item.price} remain={item.remain} />
              <CountButton
                remain={item.remain}
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
