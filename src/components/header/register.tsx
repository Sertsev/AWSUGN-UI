import React, { FC } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const Register: FC<{ cancleRegister: () => void }> = ({ cancleRegister }) => {
  return (
    <div className="bg-black/70 w-[100vw] h-[100vh] fixed z-20 flex justify-center items-center animate-slowfade overflow-scroll">
      <div className="bg-white relative rounded-xl p-10 mt-[30rem] w-[360px] sm:w-fit">
        <button
          className="absolute right-0 top-0 hover:border border-orange rounded-full m-2 transition"
          onClick={cancleRegister}
        >
          <CloseIcon className="text-4xl text-orange text-center  " />
        </button>
        <h1 className="font-yatra text-orange text-4xl my-5 text-center">
          Register
        </h1>
        <form
          action=""
          className="flex flex-col justify-center items-center gap-6"
        >
          <input
            type="text"
            placeholder="username"
            className="w-[20rem] border-orange outline-none border p-4 rounded-md "
            required
          />
          <input
            type="text"
            placeholder="first name"
            className="w-[20rem] border-orange outline-none border p-4 rounded-md "
            required
          />
          <input
            type="text"
            placeholder="middle name"
            className="w-[20rem] border-orange outline-none border p-4 rounded-md "
            required
          />
          <input
            type="text"
            placeholder="last name"
            className="w-[20rem] border-orange outline-none border p-4 rounded-md "
            required
          />
          <input
            type="text"
            placeholder="email"
            className="w-[20rem] border-orange outline-none border p-4 rounded-md "
            required
          />
          <input
            type="text"
            placeholder="password"
            className="w-[20rem] border-orange outline-none border p-4 rounded-md "
            required
          />
          <input
            type="text"
            placeholder="confirm password"
            className="w-[20rem] border-orange outline-none border p-4 rounded-md "
            required
          />
          <input
            type="text"
            placeholder="gender"
            className="w-[20rem] border-orange outline-none border p-4 rounded-md "
            required
          />
          <input
            type="text"
            placeholder="phone"
            className="w-[20rem] border-orange outline-none border p-4 rounded-md "
            required
          />
          <p className="text-orange">
            Make sure to include country code (+251...)
          </p>

          <button className="bg-orange hover:scale-105 px-10 py-2 font-roboto text-white rounded-lg font-bold hover:bg-deepOrage transition text-lg ">
            Register
          </button>
          <Link to={""} className="text-orange hover:text-deepOrage">
            New User Create Account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
