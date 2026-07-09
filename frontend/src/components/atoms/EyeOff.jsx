import React from "react";
import { FaEyeSlash } from "react-icons/fa";

const EyeOff = ({ color = "black" }) => {
  return (
    <div>
      <FaEyeSlash color={color} />
    </div>
  );
};

export default EyeOff;
