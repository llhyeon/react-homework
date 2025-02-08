import tm from "@/utils/tw-merge";

type CountButtonProps = {
  id: number;
  count: number;
  onCountUp: (id: number) => void;
  onCountDown: (id: number) => void;
};

function CountButton({ id, count, onCountUp, onCountDown }: CountButtonProps) {
  // const handleIncrease = () => {
  //   setCount((prev) => prev + 1);
  // };

  // const handleDecrease = () => {
  //   // count가 1 이하로 떨어지지 않도록
  //   if (count === 1) return;
  //   setCount((prev) => prev - 1);
  // };

  const handleIncrease = (id: number) => {
    onCountUp(id);
  };

  const handleDecrease = (id: number) => {
    if (count === 1) return;
    onCountDown(id);
  };

  return (
    <div
      className={tm(
        "flex items-center justify-between *:flex-1 border border-gray-300 w-[5rem] rounded-full py-1 px-3 bg-gray-100"
      )}>
      <button className={tm("cursor-pointer  text-gray-300")} onClick={() => handleDecrease(id)}>
        -
      </button>
      <span className={tm(" text-center text-gray-700")}>{count}</span>
      <button className={tm("cursor-pointer  text-gray-300")} onClick={() => handleIncrease(id)}>
        +
      </button>
    </div>
  );
}

export default CountButton;
