import Footer from "./Footer";
import Navbar from "./Navbar";
import React, { useState } from "react";

export default function Profile() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

    return (
        <div>
            <Navbar/>
            <div>
            <div className="flex items-center max-lg:h-screen lg:h-[88vh] w-full justify-center bg-[white]  bg bg-no-repeat rounded-xl relative">
        <div class="backdrop-blur-md h-full w-full absolute right-0 left-0 top-0 bottom-0 z-10 rounded-xl opacity-30 bg-white"></div>
        <div className="w-[40%] min-w-[360px] h-full bg-white rounded-xl shadow-xl px-10 py-12 m-4 md:max-w-sm md:mx-auto border z-20">
          <span className="block w-full text-2xl uppercase font-bold mb-8">
           Your Profile
          </span>
          <form className="mb-2" action="/" onSubmit={submitHandler}>
            <div class="flex gap-3">
              <div className="mb-2">
                <label for="firstname" className="block text-xs mb-1 w-1/2">
                  First Name
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:border-[#2593D2]"
                  type="text"
                  id="firstname"
                  placeholder="First Name"
                  value={formData.firstname}
                  onChange={changeHandler}
                />
              </div>
              <div className="mb-2 ">
                <label for="lastname" className="block text-xs mb-1 w-1/2">
                  Last Name
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:border-[#2593D2]"
                  type="text"
                  id="lastname"
                  placeholder="Last Name"
                  value={formData.lastname}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="mb-2 md:w-full">
              <label for="email" className="block text-xs mb-1">
                Email
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:border-[#2593D2]"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={changeHandler}
              />
            </div>
            <div className="mb-2 md:w-full">
              <label for="password" className="block text-xs mb-1">
                Password
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:border-[#2593D2]"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={changeHandler}
              />
            </div>
            <div className="mb-4 md:w-full">
              <label for="confirm_password" className="block text-xs mb-1">
                Confirm Password
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:border-[#2593D2]"
                type="password"
                name="confirm_password"
                id="confirm_password"
                placeholder="Confirm Password"
                value={formData.confirm_password}
                onChange={changeHandler}
              />
            </div>
            <div class="flex gap-3">
            <div className="mb-2 w-[50%]">
            <label for="bloodGrp" className="block text-xs mb-1 w-[50%]">
                  Blood 
                </label>
              <select
                name="bloodGrp"
                id="bloodGrp"
                value={formData.bloodGrp}
                onChange={changeHandler}
                class="w-full border rounded p-2 outline-none focus:border-[#2593D2] "
              >
                <option value={"A+"}>A+</option>
                <option value={"A-"}>A-</option>
                <option value={"B+"}>B+</option>
                <option value={"B-"}>B-</option>
                <option value={"AB-"}>AB-</option>
                <option value={"AB-"}>AB-</option>
                <option value={"O+"}>O+</option>
                <option value={"O-"}>O-</option>
              </select>
              </div>
              <div className="mb-2 ">
                <label for="location" className="block text-xs mb-1 w-1/2">
                  Location
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:border-[#2593D2]"
                  type="text"
                  id="lastname"
                  placeholder="Pincode"
                  value={formData.location}
                  onChange={changeHandler}
                />
              </div>
              </div>
        
          </form>
         
        </div>
      </div>
            </div>
            <Footer/>
            </div>

    )
};