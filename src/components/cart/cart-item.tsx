import tm from "@/utils/tw-merge";
import ItemContent from "./item-content";
import ItemImage from "./item-image";

type CartItemProps = {
  id: number;
  title: string;
  price: number;
  remain: number;
};

function CartItem({ id, title, price, remain }: CartItemProps) {
  // derived state

  return (
    <div className={tm("flex items-center gap-5 my-12 flex-1 overflow-hidden")}>
      <ItemImage productNumber={id} label={title} />
      <ItemContent className="flex-1" title={title} price={price} remain={remain} />
    </div>
  );
}

export default CartItem;
