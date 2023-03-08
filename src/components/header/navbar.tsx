import React from "react";
import { Link } from "react-router-dom";
import LoggedIn from "./loggedin";
const Navbar = () => {
  return (
    <nav className=" hidden flex-1 justify-between items-center md:flex ">
      <ul className="flex gap-5 lg:gap-16">
        <li>
          <Link
            to="/"
            className="hover:text-black text-orange text-md lg:text-lg"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/browse"
            className="hover:text-black text-orange text-md lg:text-lg"
          >
            Browse Now
          </Link>
        </li>
        <li>
          <Link
            to="/aboutus"
            className="hover:text-black text-orange text-md lg:text-lg"
          >
            About Us
          </Link>
        </li>
      </ul>
      <div className="flex gap-5 lg:gap-10">
        <button className="text-orange hover:scale-110 hover:text-deepOrage transition text-md lg:text-lg">
          Sign in
        </button>
        <button className="bg-orange hover:scale-105 px-10 py-2 font-roboto text-white rounded-lg font-bold hover:bg-deepOrage transition text-lg ">
          Register
        </button>
      </div>
      {/* <LoggedIn /> */}
    </nav>
  );
};

export default Navbar;
