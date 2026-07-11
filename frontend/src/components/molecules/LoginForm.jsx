import React, { useEffect, useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import InputBox from "../atoms/InputBox";
import Checkbox from "../atoms/CheckBox";
import Button from "../atoms/Button";
import GoogleLogin from "./GoogleLogin";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate
import { useDispatch } from "react-redux"; // Added useDispatch
import { loginUser } from "../../api/auth.services"; // Import your login API service
import { AuthSuccess } from "../../redux/features/authSlice"; // Import your AuthSuccess action

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 1. State management for form inputs and errors
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    const savedPassword = localStorage.getItem("rememberedPassword");

    if (savedEmail || savedPassword) {
      setFormData({
        email: savedEmail || "",
        password: savedPassword || "",
      });

      setRememberMe(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 2. Validation Logic
  const validateForm = () => {
    let valid = true;
    let newErrors = { email: "", password: "" };

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Execute real auth request
        const res = await loginUser({
          email: formData.email,
          password: formData.password,
        });

        // 1. Dispatch the logged-in user details to Redux (e.g. { fullName: 'Alex', email: '...' })
        dispatch(AuthSuccess(res.user));

        // 2. Handle Remember Me logic
        // Remember Me
        if (rememberMe) {
          localStorage.setItem("rememberedEmail", formData.email);
          localStorage.setItem("rememberedPassword", formData.password);
        } else {
          localStorage.removeItem("rememberedEmail");
          localStorage.removeItem("rememberedPassword");
        }

        // 3. Programmatically navigate to the Profile screen
        navigate("/profile");
      } catch (error) {
        console.error("Login failed:", error);
        alert(
          error.response?.data?.message ||
            "Invalid credentials. Please try again.",
        );
      }
    }
  };

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
        @keyframes errorIn {
          0% { opacity: 0; transform: translateY(-4px); }
          100% { opacity: 1; transform: translateY(0); }
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
        @keyframes horizontalShimmer {
          0% { left: -150%; }
          50% { left: 150%; }
          100% { left: 150%; }
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
        .input-glow-effect.error-glow::before {
          background: linear-gradient(45deg, #ef4444, #f87171, #ef4444);
        }
        .input-glow-effect:focus-within::before {
          opacity: 1;
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
          Hello There!
        </h2>
        <p className="text-gray-500 transition-colors duration-300 group-hover/form:text-gray-600">
          Good to see you again. Sign in to continue.
        </p>
      </div>

      {/* Form Fields & Controls */}
      <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
        {/* Email Field */}
        <div
          className="space-y-1 cascade-node group/input"
          style={{ animationDelay: "200ms" }}
        >
          <label
            className={`block font-semibold tracking-wide transition-all duration-300 group-focus-within/input:translate-x-0.5 ${errors.email ? "text-red-500" : "text-gray-800 group-focus-within/input:text-blue-600"}`}
          >
            Email
          </label>
          <div
            className={`relative p-[1px] rounded-xl input-glow-effect transition-all duration-300 focus-within:shadow-lg ${errors.email ? "error-glow focus-within:shadow-red-500/10" : "focus-within:shadow-blue-500/10"}`}
          >
            <div className="relative z-10 bg-white rounded-[11px]">
              <InputBox
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g., sam@design.co"
                icon={
                  <TfiEmail
                    className={`${errors.email ? "text-red-400" : "text-blue-500"} transition-transform duration-300 group-focus-within/input:scale-110 group-focus-within/input:rotate-6`}
                  />
                }
                className={`w-full px-4 py-2 border rounded-xl bg-gray-50/30 focus:bg-white transition-all outline-none ${errors.email ? "border-red-200 focus:border-red-400" : "border-gray-100"}`}
              />
            </div>
          </div>
          {errors.email && (
            <p
              className="text-xs font-medium text-red-500 pl-1"
              style={{ animation: "errorIn 0.3s ease forwards" }}
            >
              {errors.email}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div
          className="space-y-1 cascade-node group/input"
          style={{ animationDelay: "260ms" }}
        >
          <label
            className={`block font-semibold tracking-wide transition-all duration-300 group-focus-within/input:translate-x-0.5 ${errors.password ? "text-red-500" : "text-gray-800 group-focus-within/input:text-blue-600"}`}
          >
            Password
          </label>
          <div
            className={`relative p-[1px] rounded-xl input-glow-effect transition-all duration-300 focus-within:shadow-lg ${errors.password ? "error-glow focus-within:shadow-red-500/10" : "focus-within:shadow-blue-500/10"}`}
          >
            <div className="relative z-10 bg-white rounded-[11px]">
              <InputBox
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••••"
                icon={
                  showPassword ? (
                    <FaEyeSlash
                      onClick={() => setShowPassword(false)}
                      className="text-gray-400 cursor-pointer hover:scale-120 hover:text-blue-600 active:scale-90 transition-all duration-200"
                    />
                  ) : (
                    <FaEye
                      onClick={() => setShowPassword(true)}
                      className={`${errors.password ? "text-red-400" : "text-blue-500"} cursor-pointer hover:scale-120 hover:text-blue-600 active:scale-90 transition-all duration-200`}
                    />
                  )
                }
                className={`w-full px-4 py-2 border rounded-xl bg-gray-50/30 focus:bg-white transition-all outline-none ${errors.password ? "border-red-200 focus:border-red-400" : "border-gray-100"}`}
              />
            </div>
          </div>
          {errors.password && (
            <p
              className="text-xs font-medium text-red-500 pl-1"
              style={{ animation: "errorIn 0.3s ease forwards" }}
            >
              {errors.password}
            </p>
          )}
        </div>

        <div
          className="flex items-center justify-between mt-0.5 cascade-node"
          style={{ animationDelay: "320ms" }}
        >
          <label className="flex items-center gap-2 text-gray-600 cursor-pointer group/check select-none">
            <div className="transition-transform duration-200 group-hover/check:scale-110 active:scale-95">
              <Checkbox
                id="remember-me"
                name="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
            </div>
            <span className="font-medium group-hover/check:text-gray-900 transition-colors duration-200">
              Remember me
            </span>
          </label>
          <Link
            to="/forgot"
            className="font-semibold text-blue-500 transition-all duration-200 hover:text-blue-600 hover:underline hover:-translate-y-0.5 active:translate-y-0"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Actionable Custom Button (Removed nested Link tag) */}
        <div
          className="w-full mt-1 cascade-node"
          style={{ animationDelay: "380ms" }}
        >
          <Button
            type="submit"
            text="Sign In to Dashboard"
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-500 via-sky-500 to-blue-600 bg-[size:200%_auto] hover:bg-right text-white font-bold shadow-md shadow-blue-500/10 hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-1 transition-all duration-500 active:translate-y-0 active:shadow-sm relative overflow-hidden animate-shimmer-loop"
          />
        </div>
      </form>

      <div
        className="w-full flex items-center gap-3 my-0.5 cascade-node"
        style={{ animationDelay: "440ms" }}
      >
        <div className="h-px flex-grow bg-gray-200 transition-all duration-500 group-hover/form:bg-blue-100"></div>
        <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest px-1.5 transition-colors duration-500 group-hover/form:text-blue-400">
          or
        </span>
        <div className="h-px flex-grow bg-gray-200 transition-all duration-500 group-hover/form:bg-blue-100"></div>
      </div>

      <div className="w-full cascade-node" style={{ animationDelay: "500ms" }}>
        <GoogleLogin
          endpoint="google-login"
          redirect="/home"
          className="w-full rounded-xl border border-gray-200/80 shadow-sm bg-white transform hover:-translate-y-1 hover:shadow-md hover:border-gray-300 transition-all duration-300 active:translate-y-0 active:shadow-sm"
        />
      </div>

      <div
        className="flex gap-1 justify-center cascade-node"
        style={{ animationDelay: "560ms" }}
      >
        <p className="text-gray-400">Don't have an account?</p>
        <Link to="/signup">
          <p className="text-blue-500 font-bold underline cursor-pointer hover:text-blue-600 transition-all duration-200 hover:scale-105 active:scale-95">
            Sign up
          </p>{" "}
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
