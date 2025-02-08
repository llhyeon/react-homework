type TotalPriceProps = {
  totalPrice: number;
};

function TotalPrice({ totalPrice }: TotalPriceProps) {
  return (
    <div className="text-right text-gray-700 font-bold text-4xl my-8">
      구매총액 : {totalPrice.toLocaleString()}원
    </div>
  );
}

export default TotalPrice;
