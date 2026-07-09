import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { FaEye } from "react-icons/fa";
import InputBox from "../atoms/InputBox";
import Checkbox from "../atoms/CheckBox";
import Button from "../atoms/Button";
import GoogleLogin from "./GoogleLogin";

const LoginForm = () => {
  return (
    <div className="flex flex-col gap-4 items-center w-full max-w-md mx-auto p-6 rounded-3xl relative overflow-hidden group/form">
      
      {/* Premium Integrated Stylesheet */}
      <style>{`
        @keyframes subtlePan {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes cascadeIn {
          0% { opacity: 0; transform: translateY(20px) scale(0.98); filter: blur(4px); }
          100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        @keyframes luxuryShimmer {
          0% { transform: translate(-30%, -30%) rotate(0deg); }
          100% { transform: translate(-30%, -30%) rotate(360deg); }
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
        .input-glow-effect::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 13px;
          background: linear-gradient(45deg, #3b82f6, #06b6d4, #3b82f6);
          background-size: 200% 200%;
          animation: subtlePan 4s linear infinite;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 0;
        }
        .input-glow-effect:focus-within::before {
          opacity: 1;
        }
      `}</style>

      <div 
        className="w-16 h-1.5 rounded-full bg-gradient-to-r from-blue-400 via-sky-400 to-blue-600 -mb-1 cascade-node shadow-sm transition-all duration-300 group-hover/form:w-24"
        style={{ animationDelay: '80ms' }}
      ></div>

      <div 
        className="text-center space-y-1 cascade-node"
        style={{ animationDelay: '140ms' }}
      >
        <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight transition-all duration-300 group-hover/form:text-transparent group-hover/form:bg-clip-text group-hover/form:bg-gradient-to-r group-hover/form:from-gray-900 group-hover/form:to-blue-700">
          Hello There!
        </h2>
        <p className="text-gray-500 transition-colors duration-300 group-hover/form:text-gray-600">
          Good to see you again. Sign in to continue.
        </p>
      </div>
      
      {/* Form Fields & Controls */}
      <form className="w-full flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>

        <div 
          className="space-y-1 cascade-node group/input"
          style={{ animationDelay: '200ms' }}
        >
          <label className="block font-semibold text-gray-800 tracking-wide transition-all duration-300 group-focus-within/input:text-blue-600 group-focus-within/input:translate-x-0.5">
            Email
          </label>
          <div className="relative p-[1px] rounded-xl input-glow-effect transition-all duration-300 focus-within:shadow-lg focus-within:shadow-blue-500/10">
            <div className="relative z-10 bg-white rounded-[11px]">
              <InputBox
                type="email"
                placeholder="e.g., sam@design.co"
                icon={<TfiEmail className="text-blue-500 transition-transform duration-300 group-focus-within/input:scale-110 group-focus-within/input:rotate-6" />}
                className="w-full px-4 py-2 border border-gray-100 rounded-xl bg-gray-50/30 focus:bg-white transition-all outline-none"
              />
            </div>
          </div>
        </div>


        <div 
          className="space-y-1 cascade-node group/input"
          style={{ animationDelay: '260ms' }}
        >
          <label className="block font-semibold text-gray-800 tracking-wide transition-all duration-300 group-focus-within/input:text-blue-600 group-focus-within/input:translate-x-0.5">
            Password
          </label>
          <div className="relative p-[1px] rounded-xl input-glow-effect transition-all duration-300 focus-within:shadow-lg focus-within:shadow-blue-500/10">
            <div className="relative z-10 bg-white rounded-[11px]">
              <InputBox
                type="password"
                placeholder="••••••••••"
                icon={<FaEye className="text-blue-500 cursor-pointer hover:scale-120 hover:text-blue-600 active:scale-90 transition-all duration-200" />}
                className="w-full px-4 py-2 border border-gray-100 rounded-xl bg-gray-50/30 focus:bg-white transition-all outline-none"
              />
            </div>
          </div>
        </div>


        <div 
          className="flex items-center justify-between mt-0.5 cascade-node"
          style={{ animationDelay: '320ms' }}
        >
          <label className="flex items-center gap-2 text-gray-600 cursor-pointer group/check select-none">
            <div className="transition-transform duration-200 group-hover/check:scale-110 active:scale-95">
              <Checkbox className="w-3.5 h-3.5 rounded-md border-gray-300 group-hover/check:border-blue-500 transition-colors duration-200" />
            </div>
            <span className="font-medium group-hover/check:text-gray-900 transition-colors duration-200">Remember me</span>
          </label> 
          <a href="#" className="font-semibold text-blue-500 transition-all duration-200 hover:text-blue-600 hover:underline hover:-translate-y-0.5 active:translate-y-0">
            Forgot Password?
          </a>
        </div>

        {/* Gradient Login Button */}
        <div 
          className="w-full mt-1 cascade-node"
          style={{ animationDelay: '380ms' }}
        >
          <Button 
            text="Sign In to Dashboard" 
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-500 via-sky-500 to-blue-600 bg-[size:200%_auto] hover:bg-right text-white font-bold shadow-md shadow-blue-500/10 hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-1 transition-all duration-500 active:translate-y-0 active:shadow-sm relative overflow-hidden animate-shimmer-loop"
          />
        </div>
      </form>

      <div 
        className="w-full flex items-center gap-3 my-0.5 cascade-node"
        style={{ animationDelay: '440ms' }}
      >
        <div className="h-px flex-grow bg-gray-200 transition-all duration-500 group-hover/form:bg-blue-100"></div>
        <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest px-1.5 transition-colors duration-500 group-hover/form:text-blue-400">or</span>
        <div className="h-px flex-grow bg-gray-200 transition-all duration-500 group-hover/form:bg-blue-100"></div>
      </div>


      <div 
        className="w-full cascade-node"
        style={{ animationDelay: '500ms' }}
      >
        <GoogleLogin className="w-full rounded-xl border border-gray-200/80 shadow-sm bg-white transform hover:-translate-y-1 hover:shadow-md hover:border-gray-300 transition-all duration-300 active:translate-y-0 active:shadow-sm" />
      </div>

  
      <div 
        className="flex gap-1 justify-center cascade-node"
        style={{ animationDelay: '560ms' }}
      >
        <p className="text-gray-400">Don't have an account?</p>
        <p className="text-blue-500 font-bold underline cursor-pointer hover:text-blue-600 transition-all duration-200 hover:scale-105 active:scale-95">Sign up</p>
      </div>
      
    </div>
  );
};

export default LoginForm;