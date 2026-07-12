import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
// Import Redux hooks
import { useSelector, useDispatch } from 'react-redux';
// Import your logout action (Uncomment and adjust this path to match your structure)
// import { Logout } from '../../redux/features/authSlice'; 

import { BiShoppingBag, BiLogOut, BiMenu } from 'react-icons/bi';
import { FiUser } from 'react-icons/fi';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Read the user state directly from your global Redux store
  const user = useSelector((state) => state.auth.user);

  // Handle Logout by clearing tokens and resetting Redux state
  const handleLogout = () => {
    // Clear tokens/data from localStorage
    localStorage.removeItem("token");
    
    // Dispatch your clear/logout action to clear Redux state
    // dispatch(Logout()); 
    
    // Fallback: Dispatching basic action if standard action isn't imported yet
    dispatch({ type: 'auth/logout' }); 

    navigate('/login');
  };

  return (
    <header className="sticky top-0 z-50 w-full  border-b border-slate-700/50 shadow-xl backdrop-blur-md bg-opacity-95">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link to="/home" className="flex items-center space-x-3 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
            <span className="text-xl font-black text-white">F</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-1 text-xl font-bold tracking-wide">
              <span className="text-blue-400">Food</span>
              <span className="text-slate-800">Corner</span>
            </div>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'About Us', 'Menu', 'Contact'].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase().replace(' ', '')}`}
              className="relative text-sm font-semibold text-slate-800 hover:text-blue-400 transition-colors duration-200 after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Actions Section */}
        <div className="flex items-center space-x-4">
          
          {/* Conditional Cart Button - visible when user is logged in */}
          {user && (
            <button className="relative p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-blue-400 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-200 shadow-inner group">
              <BiShoppingBag size={22} className="group-hover:scale-105 transition-transform duration-150" />
              <span className="absolute -top-1.5 -right-1.5 bg-blue-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center ring-4 ring-slate-900 animate-pulse">
                3
              </span>
            </button>
          )}

          {/* Profile / Auth Section */}
          <div className="flex items-center space-x-3">
            {user ? (
              <>
                {/* Profile Link - Redirects to /profile when clicked */}
                <Link 
                  to="/profile" 
                  className="flex items-center space-x-2.5 bg-slate-700/40 border border-slate-700 px-3 py-1.5 rounded-xl hover:bg-slate-700/70 hover:border-blue-500/40 transition-all duration-200 cursor-pointer group/profile"
                >
                  {user.avatarUrl ? (
                    <img 
                      src={user.avatarUrl} 
                      alt={user.name} 
                      className="w-7 h-7 rounded-full object-cover border border-blue-400 group-hover/profile:border-blue-300 transition-colors duration-200"
                    />
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30 group-hover/profile:bg-blue-500/30 transition-colors duration-200">
                      <FiUser size={14} />
                    </div>
                  )}
                  <span className="text-sm font-medium text-slate-200 hidden sm:inline group-hover/profile:text-blue-400 transition-colors duration-200">
                    {user.name}
                  </span>
                </Link>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="p-2.5 text-sm font-semibold text-slate-400 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all duration-200 hover:text-red-400 hover:border-red-500/20"
                  title="Logout"
                >
                  <BiLogOut size={18} />
                </button>
              </>
            ) : (
              /* Login Button linking to /login */
              <Link
                to="/login"
                className="flex items-center space-x-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 ring-2 ring-blue-400/20 hover:ring-blue-400/40"
              >
                <span>Login</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="p-2 md:hidden text-slate-400 hover:text-slate-100 rounded-lg hover:bg-slate-800 transition-colors">
            <BiMenu size={26} />
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;