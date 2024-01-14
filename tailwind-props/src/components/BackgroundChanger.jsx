import { useState } from "react";
import Button from "./Button";

const BackgroundChanger = () => {
  const [color, setColor] = useState("olive");
  const handleClick = (color) => {
    setColor(color);
  };
  return (
    <div
      className="w-full h-screen duration-200"
      style={{
        backgroundColor: color,
        zIndex: 0,
      }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <Button color="Red" bgColor="red" handleClick={handleClick} />
          <Button color="Green" bgColor="green" handleClick={handleClick} />
          <Button color="Blue" bgColor="blue" handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default BackgroundChanger;
