import { LuMinus, LuPlus } from "react-icons/lu";

interface CounterProps {
  title: string;
  subTitle?: string;
  value: number;
  max?: number;
  min?: number;
  onChange: (value: number) => void;
}

export default function Counter({
  title,
  subTitle,
  value,
  max = 20,
  min = 1,
  onChange,
}: CounterProps) {
  const increase = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  const decrease = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };
  return (
    <div className="flex items-center justify-between py-4 ">
      <div className="flex flex-col">
        <p className="font-medium text-gray-900">{title}</p>
        {subTitle && (
            <span className="text-sm text-gray-500">{subTitle}</span>
        )}
      </div>
      <div className="flex justify-center gap-4">
        <button
          className="flex items-center justify-center cursor-pointer rounded-full w-8 h-8 border border-primary disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 transition-all duration-300"
          onClick={decrease}
          disabled={value === min}
        >
          <LuMinus size={15} />
        </button>

        <span className="font-medium text-center text-[20px]">{value}</span>

        <button
          className="flex items-center justify-center cursor-pointer rounded-full w-8 h-8 border border-primary disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 transition-all duration-300"
          onClick={increase}
          disabled={value === max}
        >
          <LuPlus size={15} />
        </button>
      </div>
    </div>
  );
}
