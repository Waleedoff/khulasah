import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#24305E] text-white py-4" dir="ltr">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4 px-4">
        {/* Left Section: Logo */}
        <div className="flex justify-center md:justify-start items-center space-x-4">
          <img src="/" alt="Logo" className="w-24" />{" "}
          {/* Adjust size accordingly */}
        </div>

        {/* Center Section: Copyright */}
        <div className="text-center">
          <p>جميع الحقوق محفوظة لخلاصة 2024</p>
        </div>

        {/* Right Section: Links or Icons */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center justify-center">
          <div className="flex space-x-3">
            <a href="#">
              <img
                src="assets/icons/m-solid.svg"
                alt="Icon 1"
                className="w-6 filter invert"
              />
            </a>
            <a href="#">
              <img
                src="assets/icons/x.svg"
                alt="Icon 2"
                className="w-6 filter invert"
              />
            </a>
            <a href="#">
              <img
                src="assets/icons/linked.svg"
                alt="Icon 3"
                className="w-6 filter invert"
              />
            </a>
          </div>
          <a href="#" className="hover:underline">
            سياسة الخصوصية
          </a>
          <a href="#" className="hover:underline">
            الشروط والأحكام
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
