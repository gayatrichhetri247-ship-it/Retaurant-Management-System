const Button = ({
  text,
  type = "button",
  onClick,
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-600 text-white px-8 py-2 font-bold rounded-3xl cursor-pointer hover:bg-blue-700 ${className}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;