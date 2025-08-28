import React, { useState } from "react";


const Login = ({handleLogin}) => {
  
  

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();

   handleLogin(email,password)

    setemail("");
    setpassword("");
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen bg-emerald-700 ">
        <div className=" p-10 rounded-xl bg-emerald-100">
          <div className="head flex justify-center flex-col items-center mb-3 gap-3">
            <img
              src="./src/images/favicon.png"
              className="w-32 h-32 object-cover rounded-md "
              alt=""
            />
            <h1 className="text-xl font-bold text-emerald-800">
              Employee Management System
            </h1>
          </div>
          <form
            onSubmit={SubmitHandler}
            className="flex flex-col gap-4 p-4 items-center justify-center"
            autoComplete="off"
            
          >
            <input
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              required
              className="border-2 border-emerald-800 outline-none text-semibold rounded-md text-xl py-4 px-5 placeholder:text-gray-500"
              type="email"
              placeholder="Enter your Email "
              autoComplete="new-email"
            />
            <input
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              required
              className="border-2 border-emerald-800 outline-none text-semibold rounded-md text-xl py-4 px-5 placeholder:text-gray-500"
              type="password"
              placeholder="Enter your Password"
              autoComplete="new-password"
            />
            <button className="mt-4 bg-emerald-700 text-white rounded-md text-2xl px-10 py-2 hover:bg-emerald-800">
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;