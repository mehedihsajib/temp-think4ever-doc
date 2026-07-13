import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Search, Moon, Sun, Menu, ChevronDown } from 'lucide-react';

const Header = ({ toggleSidebar, darkMode, setDarkMode }) => {
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);

  const getActiveSection = () => {
    const path = location.pathname;
    if (path.startsWith('/onboarding')) return 'Customer Onboarding';
    if (path.startsWith('/developer')) return 'Think4Ever Developer';
    if (path.startsWith('/portal')) return 'Think4Ever Portal';
    if (path.startsWith('/reverse-engineering')) return 'Reverse Engineering';
    return 'Think4Ever Designer';
  };

  const sections = [
    { name: 'Customer Onboarding', path: '/onboarding/introduction' },
    { name: 'Think4Ever Designer', path: '/designer/introduction' },
    { name: 'Think4Ever Developer', path: '/developer/start-new-project' },
    { name: 'Think4Ever Portal', path: '/portal/dashboard' },
    { name: 'Reverse Engineering', path: '/reverse-engineering' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={toggleSidebar}
            className="text-slate-500 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
          
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/assets/images/think4ever-logo.png" alt="think4ever" className="h-7 w-auto" />
          </Link>

          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <span>{getActiveSection()}</span>
              <ChevronDown className="h-4 w-4 text-slate-500" />
            </button>
            
            {showDropdown && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setShowDropdown(false)}></div>
                <div className="absolute left-0 mt-2 w-56 origin-top-left rounded-xl bg-white p-1.5 shadow-lg ring-1 ring-black/5 focus:outline-none dark:bg-slate-800 dark:ring-white/5 z-20">
                  {sections.map((sec) => (
                    <Link
                      key={sec.name}
                      to={sec.path}
                      onClick={() => setShowDropdown(false)}
                      className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                        getActiveSection() === sec.name
                          ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800'
                      }`}
                    >
                      {sec.name}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative w-48 sm:w-64">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search docs..."
              className="w-full bg-slate-50 pl-9 pr-4 py-1.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200"
            />
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
