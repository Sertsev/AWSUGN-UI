import React, { useState } from "react";
import searchIcon from "../assets/search_icon.png";
import downIcon from "../assets/down.png";
import mainImg from "../assets/main-img.png";
import "../index.css";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Hero = () => {
  const [selectedData, setSelectedDate] = useState<Date | null>();
  return (
    <div className="relative">
      <div className="flex flex-col gap-10 justify-center items-center md:items-start">
        <div className="flex flex-col  bg-orange  justify-center items-center md:items-start h-[22rem] gap-[1rem] w-[100vw]">
          <div className="w-[20rem] sm:w-[25rem] xl:w-[55rem] px-[0%] 2xl:px-[10%] ">
            <p className="font-yatra text-[4rem] text-white md:ml-[5rem]">
              Pay Less
            </p>
            <p className="font-yatra text-[4rem] md:ml-[5rem] lg:ml-[15rem]">
              Wear
            </p>
            <p className="font-yatra text-[4rem] text-white md:ml-[5rem] lg:ml-[20rem] lg:w-[20rem]">
              The Best!
            </p>
            {/* md:pl-[5%] xl:pl-[15%] */}
          </div>
        </div>
        <div className=" md:pl-[5%] xl:pl-[15%]">
          <form
            action=""
            className="relative flex flex-col items-center gap-10"
          >
            <input
              type="text"
              name=""
              id=""
              placeholder="Search by type, occasions, clothe name, . . ."
              className="w-[20rem] sm:w-[28rem] h-[4rem] pl-4 pr-10 sm:pr-14 rounded-xl border-2 border-orange outline-none font-yatra"
            />
            <div className="flex justify-between gap-3 sm:gap-x-5 relative ml-3">
              <input
                type="text"
                name=""
                id=""
                placeholder="Cultural"
                className="w-[9rem] sm:w-[11rem] h-[4rem] pl-4 pr-7 sm:pr-14 rounded-xl border-2 border-orange outline-none font-yatra"
              />
              <button>
                <img
                  src={downIcon}
                  alt=""
                  className="absolute top-6 w-7 left-[6.5rem] sm:left-[8rem]"
                />
              </button>

              <input
                type="text"
                name=""
                id=""
                placeholder="26/02/2023"
                className="w-[9rem] sm:w-[11rem] h-[4rem] pl-4 pr-7 sm:pr-14 rounded-xl border-2 border-orange outline-none font-yatra"
              />
              <button>
                <img
                  src={downIcon}
                  alt=""
                  className="absolute top-6 w-7 right-5 sm:right-9"
                />
              </button>
            </div>
            <button>
              <img
                src={searchIcon}
                alt=""
                className="absolute top-4 w-9 right-5"
              />
            </button>
            <button className="bg-orange hover:bg-deepOrage w-[100%] text-white font-sanchez py-3 rounded-lg transition mt-[-2.3rem]">
              Advance Filter
            </button>
          </form>
        </div>
      </div>
      <div className="absolute top-5 right-[1rem] lg:right-[10%] 2xl:right-[10%] hidden md:block">
        {/* <img
          src={bgImg}
          alt="background image"
          className="h-[30rem] w-[20rem] lg:w-[30rem] lg:h-[45rem]"
        /> */}
        <img src={mainImg} alt="main image" className=" w-[30rem] h-[40rem] " />
      </div>
    </div>
  );
};

export default Hero;
