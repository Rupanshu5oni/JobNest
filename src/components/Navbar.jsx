import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const count = useSelector((state) => state.bookmarks.ids.length);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-[#f8fafc]/95 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                <rect width="20" height="14" x="2" y="6" rx="2" />
              </svg>
            </div>

            {/* Mobile par hide */}
            <h1 className="hidden sm:block text-lg font-semibold text-slate-900">
              JobNest
            </h1>
          </div>

          {/* Menu */}
          <nav className="flex items-center gap-2 sm:gap-3">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-4 sm:px-5 py-2.5 sm:py-3 rounded-3xl text-sm sm:text-[15px] font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-600 hover:bg-slate-100"
                }`
              }
            >
              Jobs
            </NavLink>

            <NavLink
          to="/bookmarks"
          className={({ isActive }) =>
            `flex items-center px-3 sm:px-5 py-2.5 sm:py-3 rounded-3xl text-sm sm:text-[15px] font-medium transition-all duration-200 ${
              isActive
                ? "bg-blue-600 text-white shadow-md"
                : "text-slate-600 hover:bg-slate-100"
            }`
          }
        >
          <svg
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
          </svg>

          {/* Desktop par text dikhega */}
          <span className="hidden sm:inline ml-2">
            Bookmarks
          </span>

          {count > 0 && (
            <span
              className={`ml-2 flex items-center justify-center min-w-[22px] h-[22px] px-1.5 text-xs font-semibold rounded-full ${
                count > 99
                  ? "bg-red-500 text-white"
                  : "bg-yellow-400 text-slate-900"
              }`}
            >
              {count}
            </span>
          )}
        </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}