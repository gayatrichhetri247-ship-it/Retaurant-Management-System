import React from "react";
import Google from "../atoms/Google";

const GoogleLogin = ({
  text = "Sign In With Google",
  className = "",
}) => {
  return (
    <button
      type="button"
      className={`flex items-center cursor-pointer justify-center gap-2 w-full py-2 px-6 border border-blue-500 rounded-2xl ${className}`}
    >
      <Google className="w-5 h-5 flex-shrink-0" />
      <span className=" font-bold text-blue-500">
        {text}
      </span>
    </button>
  );
};

export default GoogleLogin;