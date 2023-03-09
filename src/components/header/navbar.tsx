import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import LoggedIn from "./loggedin";
const Navbar: FC<{ signin: () => void; register: () => void }> = ({
  signin,
  register,
}) => {
  const navLinkStyles = ({ isActive }: any) => {
    return {
      color: isActive ? "black" : "#F36F2E",
    };
  };
  return (
    <nav className=" hidden flex-1 justify-between items-center md:flex ">
      <ul className="flex gap-5 lg:gap-16">
        <li>
          <NavLink
            to="/"
            style={navLinkStyles}
            className="hover:text-black text-orange text-md lg:text-lg"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/browse"
            style={navLinkStyles}
            className="hover:text-black text-orange text-md lg:text-lg"
          >
            Browse Now
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/aboutus"
            style={navLinkStyles}
            className="hover:text-black text-orange text-md lg:text-lg"
          >
            About Us
          </NavLink>
        </li>
      </ul>
      <div className="flex gap-5 lg:gap-10">
        <button
          className="text-orange hover:scale-110 hover:text-deepOrage transition text-md lg:text-lg"
          onClick={signin}
        >
          Sign in
        </button>
        <button
          className="bg-orange hover:scale-105 px-10 py-2 font-roboto text-white rounded-lg font-bold hover:bg-deepOrage transition text-lg "
          onClick={register}
        >
          Register
        </button>
      </div>
      {/* <LoggedIn /> */}
    </nav>
  );
};

export default Navbar;
