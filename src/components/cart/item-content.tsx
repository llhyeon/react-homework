import tm from "@/utils/tw-merge";

type ItemContentProps = {
  title: string;
  price: number;
  remain: number;
  className: string;
};

function ItemContent({ title, price, remain, className = "" }: ItemContentProps) {
  return (
    <div className={tm("flex flex-col gap-3.5 text-gray-700 overflow-hidden", className)}>
      <h2 className={tm("text-4xl font-thin whitespace-nowrap overflow-ellipsis")}>
        {title} <span className="text-lg text-red-600">재고: {remain}</span>
      </h2>
      <p className={tm("text-3xl font-extrabold whitespace-nowrap overflow-ellipsis")}>
        {price.toLocaleString()}원
      </p>
    </div>
  );
}

export default ItemContent;
