import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setemail("");
    setpassword("");
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen bg-emerald-700">
        <div className="p-10 rounded-xl bg-emerald-100 w-[90%] sm:w-[80%] md:w-[70%] lg:w-auto">
          <div className="head flex justify-center flex-col items-center mb-3 gap-3">
            <h1 className="font-serif font-extrabold text-xl sm:text-2xl text-emerald-800 mb-4 text-center">
              Employee Management System
            </h1>
          </div>
          <form
            onSubmit={SubmitHandler}
            className="flex flex-col gap-5 sm:gap-7 p-5 items-center justify-center"
            autoComplete="off"
          >
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
              className="border-2 border-emerald-800 outline-none text-semibold rounded-md 
                         text-base sm:text-xl md:text-2xl py-3 sm:py-4 px-4 sm:px-5 
                         placeholder:text-gray-500 w-full"
              type="email"
              placeholder="Enter your Email"
              autoComplete="new-email"
            />
            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
              className="border-2 border-emerald-800 outline-none text-semibold rounded-md 
                         text-base sm:text-xl md:text-2xl py-3 sm:py-4 px-4 sm:px-5 
                         placeholder:text-gray-500 w-full"
              type="password"
              placeholder="Enter your Password"
              autoComplete="new-password"
            />
            <button
              className="mt-4 bg-emerald-700 text-white rounded-md 
                         text-lg sm:text-xl md:text-2xl 
                         px-6 sm:px-8 md:px-10 
                         py-3 sm:py-4 md:py-5 
                         hover:bg-emerald-800 w-full sm:w-auto"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
