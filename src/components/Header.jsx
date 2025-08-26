import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-green-500 border-3 border-b-1 rounded-2xl">
      <nav className="w-[100%] ">
        <ul className="flex items-center px-4 py-3 gap-4 md:gap-8">
          <li className="hover:text-green-100 text-md font-semibold md:text-xl">
            <Link to="#home">HOME</Link>
          </li>
          <li className="hover:text-green-100 text-md font-semibold md:text-xl">
            <Link to="#about">ABOUT</Link>
          </li>
          <li className="hover:text-green-100 text-md font-semibold md:text-xl">
            <Link to="#services">SERVICES</Link>
          </li>
          <li className="hover:text-green-100 text-md font-semibold md:text-xl">
            <Link to="#faq">FAQ</Link>
          </li>
          <li className="hover:text-green-100 text-md font-semibold md:text-xl">
            <Link to="#contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
