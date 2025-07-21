import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import profile from '../assets/profile.png';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <img src={logo} alt="HouseBank Logo" className="h-9 w-10" />

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => 
                `px-3 py-2 text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-slate-900 border-b-2 border-slate-900' 
                    : 'text-slate-500 hover:text-slate-700'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/explore" 
              className={({ isActive }) => 
                `px-3 py-2 text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-slate-900 border-b-2 border-slate-900' 
                    : 'text-slate-500 hover:text-slate-700'
                }`
              }
            >
              Explore
            </NavLink>
            <NavLink 
              to="/investment" 
              className={({ isActive }) => 
                `px-3 py-2 text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-slate-900 border-b-2 border-slate-900' 
                    : 'text-slate-500 hover:text-slate-700'
                }`
              }
            >
              Investment
            </NavLink>
            <NavLink 
              to="/help-center" 
              className={({ isActive }) => 
                `px-3 py-2 text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-slate-900 border-b-2 border-slate-900' 
                    : 'text-slate-500 hover:text-slate-700'
                }`
              }
            >
              Help Center
            </NavLink>
            <NavLink 
              to="/blogs" 
              className={({ isActive }) => 
                `px-3 py-2 text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-slate-900 border-b-2 border-slate-900' 
                    : 'text-slate-500 hover:text-slate-700'
                }`
              }
            >
              Blogs
            </NavLink>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Profile/Login Icon */}
            <img src={profile} alt="Profile" className="h-8 w-8 rounded-full cursor-pointer" />
            
            {/* Get Started Button */}
            <button
              className="text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-1"
              style={{ backgroundColor: '#3A4B3C' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4F6C51'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3A4B3C'}
            >
              <span>Get Started</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2 text-slate-500 hover:text-slate-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;