import tm from "@/utils/tw-merge";
import ItemContent from "./item-content";
import ItemImage from "./item-image";

type CartItemProps = {
  id: number;
  title: string;
  price: number;
};

function CartItem({ id, title, price }: CartItemProps) {
  // derived state

  return (
    <div className={tm("flex items-center gap-5 my-12 flex-1 overflow-hidden")}>
      <ItemImage productNumber={id} label={title} />
      <ItemContent className="flex-1" title={title} price={price} />
    </div>
  );
}

export default CartItem;
