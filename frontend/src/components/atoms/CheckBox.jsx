import React from "react";

const Checkbox = ({
  label,
  checked = false,
  onChange,
  name,
  id,
  className = "",
  disabled = false,
  ...props
}) => {
  return (
    <label
      htmlFor={id}
      className={`flex items-center gap-2 cursor-pointer ${className}`}
    >
      <input
        id={id}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="w-4 h-4 accent-blue-600 cursor-pointer"
        {...props}
      />
      {label && <span className="text-sm text-gray-700">{label}</span>}
    </label>
  );
};

export default Checkbox;