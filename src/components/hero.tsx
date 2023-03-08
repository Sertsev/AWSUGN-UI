import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  TextField,
  TextFieldProps,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import awsungImg from "../assets/awsugn.png";
import bgImg from "../assets/main-img-rec.png";
import mainImg from "../assets/main-img.png";
import "../index.css";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Hero = () => {
  const [selectedData, setSelectedDate] = useState<Date | null>();
  return (
    <div className="relative">
      <div className="flex flex-col gap-10 justify-center items-center md:items-start">
        <div className="flex flex-col  bg-orange  justify-center items-center md:items-start h-[22rem] gap-[1rem] w-[100vw] md:pl-[5%] xl:pl-[15%]">
          <div className="w-[20rem] sm:w-[25rem] xl:w-[35rem] ">
            <img
              src={awsungImg}
              alt="awsung logo"
              className="w-[15rem] mb-0 mx-auto"
            />
            <h1 className="text-orange text-xl tracking-widest text-center font-raleway ">
              You need it we lend it!!
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-10 md:pl-[5%] xl:pl-[15%]">
          {/* <TextField
            label="Search by type, occasions, cloth name, . . ."
            className="w-[20rem] sm:w-[25rem] xl:w-[35rem] text-sm  border-orange"
            color="warning"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    className="text-orange "
                    style={{ borderRadius: "10rem" }}
                  >
                    <SearchIcon />
                  </Button>
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
              // shrink: true,
              className: "label",
            }}
            // color="warning"
          /> */}
          <div className="flex flex-row justify-between w-[20rem] sm:w-[25rem] xl:w-[35rem]">
            {/* <TextField
              label="Women"
              select
              className="w-[9rem] sm:w-[11rem] xl:w-[15rem]"
              color="warning"
            >
              <MenuItem>women</MenuItem>
              <MenuItem>men</MenuItem>
            </TextField>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date"
                value={null}
                className="w-[9rem] sm:w-[11rem] xl:w-[15rem]"
                onChange={(newValue) => {
                  setSelectedDate(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} color="warning" />
                )}
              />
            </LocalizationProvider> */}
          </div>
          <button>Advance Filter</button>
        </div>
      </div>
      <div className="absolute top-0 right-0 hidden md:block">
        {/* <img
          src={bgImg}
          alt="background image"
          className="h-[30rem] w-[20rem] lg:w-[30rem] lg:h-[45rem]"
        /> */}
        <img
          src={mainImg}
          alt="main image"
          className="h-[20rem] w-[20rem] lg:w-[30rem] lg:h-[25rem] "
        />
      </div>
    </div>
  );
};

export default Hero;
