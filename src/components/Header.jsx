import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed top-0 left-0  w-[100%] z-100 bg-body rounded-b-3xl">
      <nav className="border-4 border-b-0 rounded-2xl m-2 mb-0">
        <ul className="flex items-center px-4 py-3 gap-3 md:gap-8">
          <li className="hover:text-green-100 text-[0.8rem]  font-semibold md:text-xl">
            <Link to="#home">HOME</Link>
          </li>
          <li className="hover:text-green-100 text-[0.8rem] font-semibold md:text-xl">
            <Link to="#about">ABOUT</Link>
          </li>
          {/* <li className="hover:text-green-100 text-[0.8rem]  font-semibold md:text-xl">
            <Link to="#services">SERVICES</Link>
          </li> */}
          <li className="hover:text-green-100 text-[0.8rem]  font-semibold md:text-xl">
            <Link to="#faq">FAQ</Link>
          </li>
          <li className="hover:text-green-100 text-[0.8rem] font-semibold md:text-xl">
            <Link to="#contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
