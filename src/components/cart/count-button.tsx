import tm from "@/utils/tw-merge";

type CountButtonProps = {
  id: number;
  count: number;
  remain: number;
  onCountUp: (id: number) => void;
  onCountDown: (id: number) => void;
};

function CountButton({ id, count, remain, onCountUp, onCountDown }: CountButtonProps) {
  const handleIncrease = (id: number) => {
    if (count >= remain) return;
    onCountUp(id);
  };

  const handleDecrease = (id: number) => {
    if (count === 1) return;
    onCountDown(id);
  };

  const isExceed = count === remain;
  const notAllowClass = "cursor-not-allowed";

  return (
    <div
      className={tm(
        "flex items-center justify-between *:flex-1 border border-gray-300 w-[5rem] rounded-full py-1 px-3 bg-gray-100"
      )}>
      <button className={tm("cursor-pointer  text-gray-300")} onClick={() => handleDecrease(id)}>
        -
      </button>
      <span className={tm("text-center text-gray-700")}>{count}</span>
      <button
        className={tm(`cursor-pointer  text-gray-300 ${isExceed && notAllowClass}`)}
        onClick={() => handleIncrease(id)}>
        +
      </button>
    </div>
  );
}

export default CountButton;
