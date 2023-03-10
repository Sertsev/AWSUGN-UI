import React, { FC } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Register: FC<{ cancleRegister: () => void }> = ({ cancleRegister }) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      firstname: "",
      middlename: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
      phone: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username required!"),
      firstname: Yup.string().required("First name required!"),
      middlename: Yup.string().required("Middle name required!"),
      lastname: Yup.string().required("Last name required!"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required!"),
      password: Yup.string()
        .min(6, "Must be at least 6 digits!")
        .required("Password is required!"),
      confirmPassword: Yup.string().required("Confirm Password is required!"),
      gender: Yup.string().required("Please select your gender!"),
      phone: Yup.string().required("Phone number required!"),
    }),
    onSubmit: () => {},
  });
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
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-center items-center gap-2"
        >
          <input
            type="text"
            name="username"
            placeholder="username"
            className="w-[20rem] border-deepOrage outline-orange border p-4 rounded-md "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          <p className="text-red">
            {formik.errors.username &&
              formik.touched.username &&
              formik.errors.username}
          </p>
          <input
            type="text"
            name="firstname"
            placeholder="first name"
            className="w-[20rem] border-deepOrage outline-orange border p-4 rounded-md "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstname}
          />
          <p className="text-red">
            {formik.errors.firstname &&
              formik.touched.firstname &&
              formik.errors.firstname}
          </p>
          <input
            type="text"
            name="middlename"
            placeholder="middle name"
            className="w-[20rem] border-deepOrage outline-orange border p-4 rounded-md "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.middlename}
          />
          <p className="text-red">
            {formik.errors.middlename &&
              formik.touched.middlename &&
              formik.errors.middlename}
          </p>
          <input
            type="text"
            name="lastname"
            placeholder="last name"
            className="w-[20rem] border-deepOrage outline-orange border p-4 rounded-md "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastname}
          />
          <p className="text-red">
            {formik.errors.lastname &&
              formik.touched.lastname &&
              formik.errors.lastname}
          </p>
          <input
            type="text"
            name="email"
            placeholder="email"
            className="w-[20rem] border-deepOrage outline-orange border p-4 rounded-md "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <p className="text-red">
            {formik.errors.email && formik.touched.email && formik.errors.email}
          </p>
          <input
            type="text"
            name="password"
            placeholder="password"
            className="w-[20rem] border-deepOrage outline-orange border p-4 rounded-md "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <p className="text-red">
            {formik.errors.password &&
              formik.touched.password &&
              formik.errors.password}
          </p>
          <input
            type="text"
            name="confirmPassword"
            placeholder="confirm password"
            className="w-[20rem] border-deepOrage outline-orange border p-4 rounded-md "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          <p className="text-red">
            {formik.errors.confirmPassword &&
              formik.touched.confirmPassword &&
              formik.errors.confirmPassword}
          </p>

          <select
            name="gender"
            className="w-[20rem] border-deepOrage outline-orange border p-4 rounded-md "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.gender}
          >
            <option value="" disabled selected>
              gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <p className="text-red">
            {formik.errors.gender &&
              formik.touched.gender &&
              formik.errors.gender}
          </p>
          <input
            type="text"
            name="phone"
            placeholder="phone"
            className="w-[20rem] border-deepOrage outline-orange border p-4 rounded-md "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          <p className="text-red">
            {formik.errors.phone && formik.touched.phone && formik.errors.phone}
          </p>
          <p className="text-orange mb-10">
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
