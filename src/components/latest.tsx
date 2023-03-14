import React, { useState } from "react";
import { Fade } from "react-slideshow-image";
import topRectangle from "../assets/Rectangle 9.png";
import { HabeshaDress } from "../models/habesha-dress";
import "react-slideshow-image/dist/styles.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const Latest = () => {
  const [isOverImg, setIsOverImg] = useState(false);
  const [src, setSrc] = useState<number | null>(null);
  return (
    <>
      <div className="border-t-2 border-rectangleBrown mt-20 relative -z-10">
        <img src={topRectangle} alt="" className=" w-[10rem] sm:w-[15rem]" />
        <p className="font-yatra text-white absolute z-10 top-1 sm:top-2 left-7 text-xl sm:text-3xl">
          Latest
        </p>
      </div>
      <div className="flex flex-wrap justify-center mt-10 px-5 gap-10">
        {HabeshaDress.map((dress, index) => (
          <div className="flex flex-col gap-2  w-[15rem] mb-10">
            <div
              className="slide-container w-[15rem]"
              onMouseEnter={() => {
                setSrc(index + 1);
                setIsOverImg(true);
              }}
              onMouseLeave={() => {
                setSrc(index);
                setIsOverImg(false);
              }}
            >
              <Fade
                autoplay={isOverImg && dress.id === src ? true : false}
                arrows={false}
                infinite
                defaultIndex={index}
                duration={1500}
                pauseOnHover={false}
              >
                {HabeshaDress.map((fadeImage, i) => (
                  <div className="each-fade w-[15rem]" key={i}>
                    <div className="image-container ">
                      <img
                        src={fadeImage.image}
                        className="object-fill w-[15rem]"
                      />
                    </div>
                  </div>
                ))}
              </Fade>
            </div>
            <h1 className="font-yatra  text-2xl text-center text-darkBrown">
              {dress.name}
            </h1>
            <p className="text-center text-xl font-roboto text-brown ">
              {dress.size}
            </p>
            <p className="text-center font-light font-montserrat text-brown text-xl">
              <s>{dress.oldPrice} Birr</s>
            </p>

            <p className="text-center  text-3xl text-darkBrown">
              {dress.price} Birr
            </p>
            <div className="flex justify-center">
              <button className="bg-darkBrown hover:bg-brown  text-white py-3 w-[10rem] rounded-lg transition font-bold text-xl mb-10">
                BOOK
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex justify-center">
        <Link
          to="/browse"
          className="border text-orange border-orange text-lg sm:text-xl px-8 py-2 sm:px-10 sm:py-4 font-sanchez rounded-lg hover:bg-orange transition hover:text-white shadow-orange shadow-lg "
        >
          Browse More
        </Link>
      </div> */}
    </>
  );
};

export default Latest;
