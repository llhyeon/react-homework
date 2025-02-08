import tm from "@/utils/tw-merge";

type ItemContentProps = {
  title: string;
  price: number;
  className: string;
};

function ItemContent({ title, price, className = "" }: ItemContentProps) {
  return (
    <div className={tm("flex flex-col gap-3.5 text-gray-700 overflow-hidden", className)}>
      <h2 className={tm("text-4xl font-thin whitespace-nowrap overflow-ellipsis")}>{title}</h2>
      <p className={tm("text-3xl font-extrabold whitespace-nowrap overflow-ellipsis")}>
        {price.toLocaleString()}원
      </p>
    </div>
  );
}

export default ItemContent;
