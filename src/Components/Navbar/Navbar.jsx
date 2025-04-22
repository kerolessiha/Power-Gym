import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../public/power.png"; // Adjust the path to your logo image

export default function Navbar() {
  const navItems = [
    { icon: "fas fa-home", label: "Home", href: "/home" },
    { icon: "fas fa-info-circle", label: "About", href: "/about" },
    { icon: "fas fa-clipboard-list", label: "Plans", href: "/plans" },
    { icon: "fas fa-play", label: "More", href: "/More" },
    { icon: "fas fa-envelope", label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white border-gray-200 p-4 rounded-lg shadow-lg -translate-y-1/2 dark:bg-gray-900 fixed right-6 top-1/2 transform z-50">
      <div className="flex flex-col items-center space-y-8">
        {/* Logo */}
        <div className="mb-6">
          <img src={logo} alt="Logo" className="h-16 text-white" />{" "}
          {/* Adjust height as needed */}
        </div>

        {/* Navigation Items */}
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className="flex flex-col duration-200 group hover:scale-105 items-center relative transform transition-transform"
          >
            <i
              className={`${item.icon} text-gray-900 dark:text-white text-3xl mb-2`}
            ></i>
            <span className="bg-[#d4af37] p-2 rounded-full text-sm text-white -left-10 -translate-x-full absolute dark:text-white duration-200 font-bold group-hover:opacity-100 opacity-0 transform transition-opacity">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
