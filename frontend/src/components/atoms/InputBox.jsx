import React from "react";

const InputBox = ({
  type = "text",
  placeholder = "Enter Text",
  value,
  onChange,
  className = "",
  name,
  icon,
  ...props
}) => {
  return (
    <div className="relative w-full">
      {icon && (
        <span className="absolute left-3 top-1/2 -translate-y-1/2">
          {icon}
        </span>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className={`w-full py-2 ${
          icon ? "pl-10" : "pl-4"
        } pr-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2${className}`}
        {...props}
      />
    </div>
  );
};

export default InputBox;