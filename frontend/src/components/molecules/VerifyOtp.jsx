import React, { useState, useRef } from "react";
import InputBox from "../atoms/InputBox";
import Button from "../atoms/Button";
import { Link } from "react-router";
import Countdown from "react-countdown";

const VerifyOtp = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  // Check if any field is still empty
  const isOtpIncomplete = otp.some((digit) => digit === "");

  // Handle number input and auto-focus moving forward
  const handleChange = (element, index) => {
    // Strips out anything that isn't a digit (including 'e')
    const value = element.value.replace(/[^0-9]/g, "");
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1); // Only keep the last digit
    setOtp(newOtp);

    // Focus next input box
    if (index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Handle Backspace deletion, moving focus backward, and blocking 'e'/'E'
  const handleKeyDown = (e, index) => {
    // Explicitly block 'e', 'E', and symbols like '+', '-', '.'
    if (["e", "E", "+", "-", "."].includes(e.key)) {
      e.preventDefault();
      return;
    }

    if (e.key === "Backspace") {
      const newOtp = [...otp];

      if (!otp[index] && index > 0) {
        // If current box is empty, clear previous box and focus it
        newOtp[index - 1] = "";
        setOtp(newOtp);
        inputRefs.current[index - 1].focus();
      } else {
        // Otherwise just clear current box
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };

  // Allow users to copy-paste a full 6-digit code seamlessly
  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData
      .getData("text")
      .replace(/[^0-9]/g, "")
      .substring(0, 6);

    if (pasteData.length === 6) {
      const newOtp = pasteData.split("");
      setOtp(newOtp);
      inputRefs.current[5].focus(); // Focus the last box
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center w-full max-w-md mx-auto p-6 rounded-3xl relative overflow-hidden group/form">
      {/* Premium Integrated Stylesheet */}
      <style>{`
        @keyframes cascadeIn {
          0% { opacity: 0; transform: translateY(20px) scale(0.98); filter: blur(4px); }
          100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        @keyframes horizontalShimmer {
          0% { left: -150%; }
          50% { left: 150%; }
          100% { left: 150%; }
        }
        .cascade-node {
          opacity: 0;
          animation: cascadeIn 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        .animate-shimmer-loop::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          animation: horizontalShimmer 3s infinite ease-in-out;
        }
      `}</style>

      <div
        className="w-16 h-1.5 rounded-full bg-gradient-to-r from-blue-400 via-sky-400 to-blue-600 -mb-1 cascade-node shadow-sm transition-all duration-300 group-hover/form:w-24"
        style={{ animationDelay: "80ms" }}
      ></div>

      <div
        className="text-center space-y-1 cascade-node"
        style={{ animationDelay: "140ms" }}
      >
        <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight transition-all duration-300 group-hover/form:text-transparent group-hover/form:bg-clip-text group-hover/form:bg-gradient-to-r group-hover/form:from-gray-900 group-hover/form:to-blue-700">
          Verify OTP
        </h2>
        <p className="text-gray-500 transition-colors duration-300 group-hover/form:text-gray-600">
          Enter the 6-Digit OTP we've just sent to your email account.
        </p>
      </div>

      {/* Form Fields & Controls */}
      <form
        className="w-full flex flex-col gap-6"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* 6 Digit Input Fields Container */}
        <div
          className="space-y-2 cascade-node group/input"
          style={{ animationDelay: "200ms" }}
        >
          <label className="block text-center font-semibold text-gray-800 tracking-wide transition-all duration-300 group-focus-within/input:text-blue-600">
            Security Code
          </label>

          <div className="flex justify-between gap-2" onPaste={handlePaste}>
            {otp.map((data, index) => (
              <div
                key={index}
                className="relative w-12 h-14 rounded-xl transition-all duration-300"
              >
                <div className="relative z-10  rounded-xl h-full">
                  <InputBox
                    type="text"
                    maxLength="1"
                    value={data}
                    placeholder=""
                    onChange={(e) => handleChange(e.target, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => (inputRefs.current[index] = el)}
                    className="w-full h-full text-center text-xl font-bold border border-gray-100 rounded-xl bg-gray-50/30 transition-all outline-none focus:outline-none focus:ring-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Action Button */}
        <div
          className="w-full mt-1 cascade-node"
          style={{ animationDelay: "380ms" }}
        >
          <Button
            text="Verify Code"
            disabled={isOtpIncomplete}
            className={`w-full py-2.5 rounded-xl text-white font-bold transition-all duration-500 relative overflow-hidden
              ${
                isOtpIncomplete
                  ? "bg-gray-500 cursor-not-allowed opacity-60"
                  : "bg-gradient-to-r from-blue-500 via-sky-500 to-blue-600 bg-[size:200%_auto] hover:bg-right shadow-md shadow-blue-500/10 hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-1 active:translate-y-0 active:shadow-sm animate-shimmer-loop"
              }`}
          />
        </div>
      </form>

      <div
        className="flex gap-1 justify-center cascade-node"
        style={{ animationDelay: "560ms" }}
      >
        <p className="text-gray-400">Didn't receive the code?</p>
        <Link to="/login">
          <span className="flex gap-1 font-bold cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95">
            <Countdown
              renderer={({ minutes, seconds, completed }) => {
                if (completed) {
                  return (
                    <span className="underline text-blue-500">Resend</span>
                  );
                } else {
                  return (
                    <span>
                      {" "}
                      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                    </span>
                  );
                }
              }}
              date={new Date().getTime() + 2 * 60 * 1000}
            />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default VerifyOtp;
