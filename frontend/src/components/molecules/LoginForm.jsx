import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { FaEye } from "react-icons/fa";
import InputBox from "../atoms/InputBox";
import Checkbox from "../atoms/CheckBox";
import Button from "../atoms/Button";
import GoogleLogin from "./GoogleLogin";

const LoginForm = () => {
  return (
    <div className="flex flex-col gap-3.5 items-center w-full max-w-md mx-auto p-6 bg-white rounded-3xl shadow-[0_10px_50px_rgba(0,0,0,0.1)] border border-gray-100/50 backdrop-blur-sm select-none">
      
      {/* Decorative Gradient Bar */}
      <div className="w-16 h-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 -mb-1"></div>
      
      {/* Header Section */}
      <div className="text-center space-y-0.5">
        <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
          Hello There!
        </h2>
        <p className="text-gray-500 text-xs">
          Good to see you again. Sign in to continue.
        </p>
      </div>
      
      {/* Form Fields & Controls */}
      <form className="w-full flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
        
        {/* Email Field */}
        <div className="space-y-1">
          <label className="block text-xs font-semibold text-gray-800 tracking-wide">
            Email
          </label>
          <InputBox
            type="email"
            placeholder="e.g., sam@design.co"
            icon={<TfiEmail className="text-blue-500 text-xs" />}
            className="w-full px-4 py-2 border border-gray-200 rounded-xl bg-gray-50/50 focus:ring-2 focus:ring-blue-200 transition-all text-xs"
          />
        </div>

        {/* Password Field */}
        <div className="space-y-1">
          <label className="block text-xs font-semibold text-gray-800 tracking-wide">
            Password
          </label>
          <InputBox
            type="password"
            placeholder="••••••••••"
            icon={<FaEye className="text-blue-500 cursor-pointer hover:text-blue-500 transition text-xs" />}
            className="w-full px-4 py-2 border border-gray-200 rounded-xl bg-gray-50/50 focus:ring-2 focus:ring-blue-200 transition-all text-xs"
          />
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between mt-0.5">
          <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer group">
            <Checkbox className="w-3.5 h-3.5 rounded-md border-gray-300 group-hover:border-blue-300" />
            <span className="font-medium group-hover:text-gray-900 transition-colors">Remember me</span>
          </label> 
          <a href="#" className="text-xs font-semibold text-blue-500 transition hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Gradient Login Button */}
        <div className="w-full mt-1">
          <Button 
            text="Sign In to Dashboard" 
            className="w-full py-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold text-xs shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 transform hover:-translate-y-px transition-all duration-150 active:translate-y-px active:shadow-none"
          />
        </div>
      </form>

      {/* Modern Divider */}
      <div className="w-full flex items-center gap-3 my-0.5">
        <div className="h-px flex-grow bg-gray-200"></div>
        <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest px-1.5">or secure login with</span>
        <div className="h-px flex-grow bg-gray-200"></div>
      </div>

      {/* Social Login Button */}
      <div className="w-full">
        <GoogleLogin className="w-full rounded-xl border-2 text-xs shadow-sm transform hover:-translate-y-px transition-all duration-150 active:translate-y-px active:shadow-none" />
      </div>

      {/* Toggle to Signup */}
      <div className="flex gap-1 justify-center text-xs">
        <p className="text-gray-400">Don't have an account?</p>
        <p className="text-blue-500 font-bold underline cursor-pointer">Sign up</p>
      </div>
      
    </div>
  );
};

export default LoginForm;