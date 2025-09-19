import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { FaShoppingCart, FaSearch, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const { cartItems } = useContext(CartContext);
  const { isAuthenticated, logout } = useContext(AuthContext);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-[#2f4f4f] text-white px-4 sm:px-6 py-3 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Logo" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full" />
      </div>

      {/* Center: Search bar */}
      <div className="flex-1 mx-4 hidden sm:flex">
        <div className="relative w-full max-w-xs md:max-w-md">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search here"
            className="w-full pl-10 pr-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-pink-400 text-black"
          />
        </div>
      </div>

      {/* Hamburger for mobile */}
      <div className="sm:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {/* Right: Nav links */}
      <div className={`flex-col sm:flex-row sm:flex items-center space-y-3 sm:space-y-0 sm:space-x-8 text-lg font-medium absolute sm:static top-16 left-0 w-full sm:w-auto bg-[#2f4f4f] sm:bg-transparent p-4 sm:p-0 transition-all duration-300 ${menuOpen ? "flex" : "hidden sm:flex"}`}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "text-[#d2b48c]" : "text-white hover:text-pink-400"
          }
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-[#d2b48c]" : "text-white hover:text-pink-400"
          }
          onClick={() => setMenuOpen(false)}
        >
          About Us
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-[#d2b48c]" : "text-white hover:text-pink-400"
          }
          onClick={() => setMenuOpen(false)}
        >
          Contact Us
        </NavLink>

        {isAuthenticated ? (
          <>
            {/* Cart */}
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive
                  ? "relative flex items-center text-[#d2b48c]"
                  : "relative flex items-center text-white hover:text-pink-400"
              }
              onClick={() => setMenuOpen(false)}
            >
              <div className="relative flex items-center">
                <FaShoppingCart className="text-2xl" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className="ml-2">Cart</span>
            </NavLink>

            {/* Logout */}
            <button
              onClick={() => { handleLogout(); setMenuOpen(false); }}
              className="bg-red-500 hover:bg-red-600 p-2 rounded-full flex items-center justify-center"
              title="Logout"
              aria-label="Logout"
            >
              <FaSignOutAlt className="text-white text-lg" />
            </button>
          </>
        ) : (
          <NavLink
            to="/auth"
            className={({ isActive }) =>
              isActive ? "text-[#d2b48c] font-semibold" : "text-white hover:text-pink-400"
            }
            onClick={() => setMenuOpen(false)}
          >
            Log in
          </NavLink>
        )}
      </div>

      {/* Mobile Search */}
      <div className={`sm:hidden w-full px-4 mt-2 ${menuOpen ? "block" : "hidden"}`}>
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search here"
            className="w-full pl-10 pr-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-pink-400 text-black"
          />
        </div>
      </div>
    </nav>
  );
}
