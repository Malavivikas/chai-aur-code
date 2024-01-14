import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="absolute flex-Center flex justify-center items-center flex-col w-full h-screen">
      <h2 className="font-bold">{count}</h2>
      <button onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </button>
    </div>
  );
};

export default Counter;
