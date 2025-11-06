import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-customDark text-customWhite">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="text-lg font-semibold">
          <Link to="/" className="hover:text-customAccent transition-colors">
            Yatra Rental Services
          </Link>
        </div>
        <ul className="flex items-center gap-6">
          <li>
            <Link to="/" className="hover:text-customAccent transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/vehicles" className="hover:text-customAccent transition-colors">
              Vehicles
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-customAccent transition-colors">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-customAccent transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
