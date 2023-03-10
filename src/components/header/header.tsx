import React, { useState } from "react";
import { Link } from "react-router-dom";
import awsugn_icon from "../../assets/new_awsugn.png";

import MenuIcon from "@mui/icons-material/Menu";

import HiddenMenu from "./hidden-menu";
import Navbar from "./navbar";
import SignIn from "./signin";
import Register from "./register";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [signin, setSignin] = useState(false);
  const [register, setRegister] = useState(false);
  const openMenu = () => {
    setIsOpen(true);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  const signInClicked = () => {
    setSignin(true);
  };
  const cancleSignin = () => {
    setSignin(false);
  };
  const registerClicked = () => {
    setRegister(true);
  };
  const cancleRegister = () => {
    setRegister(false);
  };
  return (
    <>
      {register ? <Register cancleRegister={cancleRegister} /> : ""}
      {signin ? <SignIn cancle={cancleSignin} /> : ""}
      <header className="flex justify-between items-center h-20 px-5 md:px-10">
        <img
          src={awsugn_icon}
          alt=""
          className="w-[8rem] md:w-[10rem] mr-[8%] lg:mr-[16%] xl:mr-[25%] 2xl:mr-[30%]"
        />
        <Navbar signin={signInClicked} register={registerClicked} />
        <button className="block md:hidden" onClick={openMenu}>
          <MenuIcon className="text-4xl text-brown" />
        </button>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } h-[100vh]  top-0 right-0 w-[60%] bg-white z-10 animate-sliderightmenu fixed`}
        >
          <HiddenMenu
            closeMenu={closeMenu}
            signin={signInClicked}
            register={registerClicked}
          />
        </div>
      </header>{" "}
    </>
  );
};

export default Header;
