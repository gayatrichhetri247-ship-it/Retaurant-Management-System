import React from 'react';
import { Link } from 'react-router-dom';
// Replaced the invalid 'BiChefHat' with the valid 'BiRestaurant' icon
import { BiRestaurant, BiSupport, BiShieldQuarter, BiTerminal } from 'react-icons/bi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-slate-100 text-slate-600">
      {/* Upper Grid Section */}
      <div className="mx-auto  px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          
          {/* Brand/System Metadata Info */}
          <div className="space-y-4 xl:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/10">
                <span className="text-sm font-black text-white">F</span>
              </div>
              <span className="text-lg font-bold tracking-wide text-slate-800">
                Food<span className="text-blue-500">Corner</span> <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 border border-blue-100/50 ml-1">HQ</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
              Unified Back-Office Portal for managing menus, kitchen order ticket workflows, live inventories, and restaurant business analytics.
            </p>
            <div className="flex items-center space-x-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="text-xs font-medium text-slate-400">System Core v2.4.0 — All nodes operational</span>
            </div>
          </div>

          {/* Core Management Navigation Grid */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 sm:grid-cols-3">
            
            {/* Column 1: Kitchen & Operations */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 flex items-center space-x-1.5">
                <BiRestaurant size={14} />
                <span>Operations</span>
              </h3>
              <ul className="mt-4 space-y-2.5">
                {[
                  { name: 'Live Orders Feed', path: '/admin/orders' },
                  { name: 'Menu Builder Matrix', path: '/admin/menu-builder' },
                  { name: 'Kitchen Display (KDS)', path: '/admin/kds' },
                  { name: 'Inventory Logs', path: '/admin/inventory' }
                ].map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-sm text-slate-500 hover:text-blue-500 transition-colors duration-150">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Business & Intelligence */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 flex items-center space-x-1.5">
                <BiTerminal size={14} />
                <span>Intelligence</span>
              </h3>
              <ul className="mt-4 space-y-2.5">
                {[
                  { name: 'Sales Dashboard', path: '/admin/dashboard' },
                  { name: 'Financial Metrics', path: '/admin/analytics' },
                  { name: 'Staff Rosters', path: '/admin/staff' },
                  { name: 'Customer Feedback', path: '/admin/reviews' }
                ].map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-sm text-slate-500 hover:text-blue-500 transition-colors duration-150">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Corporate Support */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 flex items-center space-x-1.5">
                <BiSupport size={14} />
                <span>Internal Support</span>
              </h3>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a href="mailto:it-support@foodcorner.com" className="text-sm text-slate-500 hover:text-blue-500 transition-colors duration-150 block">
                    IT Helpdesk Hotline
                  </a>
                </li>
                <li>
                  <Link to="/admin/docs" className="text-sm text-slate-500 hover:text-blue-500 transition-colors duration-150 block">
                    POS Terminal Training Docs
                  </Link>
                </li>
                <li>
                  <Link to="/admin/compliance" className="text-sm text-slate-500 hover:text-blue-500 transition-colors duration-150 block">
                    Health & Safety Logs
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Compliance & Legal Strip */}
      <div className="bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            &copy; {currentYear} Food Corner Enterprise Solutions. Confidential Internal Tool.
          </p>
          <div className="flex space-x-6 items-center text-xs text-slate-400">
            <Link to="/admin/privacy" className="hover:text-blue-500 flex items-center space-x-1">
              <BiShieldQuarter size={13} />
              <span>Security & Privacy Protocol</span>
            </Link>
            <span>&bull;</span>
            <span className="font-mono">Server ID: Node-US-EAST-04</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;