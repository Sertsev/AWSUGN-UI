import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
const HiddenMenu: FC<{ closeMenu: () => void }> = ({ closeMenu }) => {
  const navLinkStyles = ({ isActive }: any) => {
    return {
      color: isActive ? "black" : "#F36F2E",
    };
  };
  return (
    <>
      <button onClick={closeMenu}>
        <CloseIcon className="text-4xl mt-5 ml-5 text-orange" />
      </button>
      <div className="flex flex-col justify-center items-center gap-5 mt-16">
        <NavLink
          to="/"
          style={navLinkStyles}
          className="hover:text-black text-orange text-lg"
          onClick={closeMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/browse"
          style={navLinkStyles}
          className="hover:text-black text-orange text-lg"
          onClick={closeMenu}
        >
          Browse Now
        </NavLink>
        <NavLink
          to="/aboutus"
          style={navLinkStyles}
          className="hover:text-black text-orange text-lg"
          onClick={closeMenu}
        >
          About Us
        </NavLink>
        <button className="text-orange hover:scale-125 hover:text-deepOrage transition text-lg">
          Sign in
        </button>
        <button className="bg-orange px-10 py-2 font-roboto text-white rounded-lg font-bold hover:bg-deepOrage transition text-lg ">
          Register
        </button>
      </div>
    </>
  );
};

export default HiddenMenu;
