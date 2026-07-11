import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiUser, FiMail, FiLogOut, FiSettings } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { LogoutSuccess } from "../../redux/features/authSlice";

const ProfileCard = () => {
  // Read state from auth. Matches store slice populated by Signup/Login Forms.
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = authState?.user ||
    authState || {
      fullName: "Alex Mercer",
      email: "alex.mercer@example.com",
      avatarUrl: null,
    };

  const getInitials = (name) => {
    if (!name) return "??";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const handleLogout = () => {
    // Remove login token only
    localStorage.removeItem("token");

    // Keep remembered email/password
    // localStorage.removeItem("rememberedEmail");
    // localStorage.removeItem("rememberedPassword");

    dispatch(LogoutSuccess());

    navigate("/login");
  };
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="h-24 bg-gradient-to-r from-blue-500 to-indigo-600" />

      <div className="px-6 pb-6 relative">
        <div className="absolute -top-12 left-6">
          {user.avatarUrl ? (
            <img
              src={user.avatarUrl}
              alt={user.fullName}
              className="w-24 h-24 rounded-2xl object-cover border-4 border-white shadow-md"
            />
          ) : (
            <div className="w-24 h-24 rounded-2xl bg-indigo-100 border-4 border-white shadow-md flex items-center justify-center text-indigo-600 font-semibold text-2xl tracking-wider">
              {getInitials(user.fullName)}
            </div>
          )}
        </div>

        <div className="pt-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
            Welcome Back
          </span>

          <h2 className="text-2xl font-bold text-slate-800 mt-3 flex items-center gap-2">
            Hello, {user.fullName}
          </h2>

          <div className="mt-4 space-y-2.5">
            <div className="flex items-center gap-3 text-slate-600 text-sm">
              <FiMail className="w-4 h-4 text-slate-400" />
              <span>{user.email}</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600 text-sm">
              <FiUser className="w-4 h-4 text-slate-400" />
              <span>Standard Account</span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-slate-100 flex justify-between items-center">
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-2 cursor-pointer text-sm font-medium text-rose-600 hover:text-rose-700 transition-colors"
          >
            <FiLogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
