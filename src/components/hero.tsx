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
    <Box>
      <Box className="flex flex-col gap-10 justify-center items-center md:items-start">
        <Box className="flex flex-col  bg-black justify-center items-center md:items-start h-[22rem] gap-[1rem] w-[100vw] md:pl-[5%] xl:pl-[15%]">
          <Box className="w-[20rem] sm:w-[25rem] xl:w-[35rem] ">
            <img
              src={awsungImg}
              alt="awsung logo"
              className="w-[15rem] mb-0 mx-auto"
            />
            <h1 className="text-orange text-xl tracking-widest text-center font-raleway font-bold">
              You need it we lend it!!
            </h1>
          </Box>

          <p className="text-white font-montserrat tracking-[0.2rem]	text-xs sm:text-sm w-[20rem] sm:w-[25rem] xl:w-[35rem]">
            AWSUGN is a renting platform powered by ASA Technologies. It is
            aiming to relieves customers from the tiresome process of searching
            for clothes by providing an online platform that allows choosing and
            booking clothes at the tip of their fingers.
          </p>
        </Box>
        <Box className="flex flex-col justify-center items-center gap-10 md:pl-[5%] xl:pl-[15%]">
          <TextField
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
          />
          <Box className="flex flex-row justify-between w-[20rem] sm:w-[25rem] xl:w-[35rem]">
            <TextField
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
            </LocalizationProvider>
          </Box>{" "}
          <Button
            variant="contained"
            className="bg-orange h-[3rem] w-[20rem] sm:w-[25rem] xl:w-[35rem] hover:bg-deepOrage hover:shadow-black hover:shadow-sm"
          >
            Advanced Filter
          </Button>
        </Box>
      </Box>
      <Box className="absolute top-0 right-0 hidden md:block">
        <img
          src={bgImg}
          alt="background image"
          className="h-[30rem] w-[20rem] lg:w-[30rem] lg:h-[45rem]"
        />
        <img src={mainImg} alt="main image" className="absolute top-0 " />
      </Box>
    </Box>
  );
};

export default Hero;
