import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to control mobile menu

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Notification Bar */}
      <div className="w-full bg-[#24305E] text-white text-center py-2 sticky top-0 text-sm md:text-base">
        انضم إلى أكثر من 50,000 متعلم يعززون كفاءتهم باستخدام خلاصة!
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-[#F6F5FC] shadow-md w-full">
        <div className="flex justify-between w-[90%] mx-auto items-center p-4 md:p-6">
          {/* Logo */}
          <div className="logo">
            <img
              src="assets/images/khul.jpg"
              alt="Logo"
              className="w-28 md:w-40"
            />
          </div>

          {/* Hamburger Menu Icon for Mobile */}
          <button onClick={toggleMenu} className="text-2xl md:hidden">
            <FaBars />
          </button>

          {/* Navigation Links */}
          <nav
            className={`absolute md:relative md:flex md:items-center md:w-auto ${menuOpen ? "block" : "hidden"} bg-[#F6F5FC] md:bg-transparent left-0 top-[100%] w-full md:w-auto md:flex-row`}
          >
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-sm md:text-lg font-semibold gap-4 md:gap-6 mt-4 md:mt-0">
              <li>
                <a href="#" className="text-gray-700 hover:text-[#0C0AFF]">
                  عن خلاصة
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-[#0C0AFF]">
                  المزايا
                </a>
              </li>
              <li>
                <a
                  href="http://localhost:53302/contact.html"
                  className="text-gray-700 hover:text-[#0C0AFF]"
                >
                  تواصل معنا
                </a>
              </li>
            </ul>
          </nav>

          {/* Action Buttons (visible only on larger screens) */}
          <div className="hidden md:flex gap-2">
            <button className="bg-transparent text-[#0C0AFF] border border-[#0C0AFF] px-4 md:px-6 py-2 md:py-3 text-sm md:text-lg font-bold rounded-lg hover:bg-[#04034c] hover:text-white transition duration-300">
              إنشاء حساب
            </button>
            <button className="bg-[#0C0AFF] text-white px-4 md:px-6 py-2 md:py-3 text-sm md:text-lg font-bold rounded-lg hover:bg-opacity-90 transition duration-300">
              تسجيل الدخول
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay (only visible when the mobile menu is open) */}
        {menuOpen && (
          <div className="flex flex-col items-center space-y-4 pb-4 md:hidden">
            <button className="bg-transparent text-[#0C0AFF] border border-[#0C0AFF] px-4 py-2 text-sm font-bold rounded-lg hover:bg-[#04034c] hover:text-white transition duration-300">
              إنشاء حساب
            </button>
            <button className="bg-[#0C0AFF] text-white px-4 py-2 text-sm font-bold rounded-lg hover:bg-opacity-90 transition duration-300">
              تسجيل الدخول
            </button>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
