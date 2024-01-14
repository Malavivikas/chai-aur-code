// eslint-disable-next-line react/prop-types
const Button = ({ color, bgColor, handleClick }) => {
  return (
    <button
      onClick={() => handleClick(color)}
      className="outline-none px-4 rounded-full text-white shadow-lg"
      style={{ backgroundColor: bgColor }}
    >
      {color}
    </button>
  );
};

export default Button;
