import { Image } from "@mui/icons-material";
import React, { useState } from "react";

const ProfilePage = () => {
  const student = {
    name: "Siddheshsingh Tanwar",
    email: "siddhesh@134",
    Education: "B-Tech",
    Department: "Computer Engineering",
    role: "Student",
    _ID: "211070016",
    fieldofIntrest: "Blockchain",
  };
  7;
  return (
    <div className=" p-4 px-[5%] rounded-lg h-[100%]">
      <div className="flex justify-center ">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-64 h-64 rounded-full mx-auto mb-4"
        />
      </div>
      <div className="flex justify-between">
        <div>
          <h1 className="text-5xl font-medium py-3">{student.name}</h1>
          <h1 className="text-5xl font-medium py-3">{student.role}</h1>
          <div className="flex">
            <p className="text-3xl text-black font-semibold py-3">
              {student.Education}
            </p>
            <p className="text-3xl text-black font-semibold py-3 px-2">,</p>
            <p className="text-3xl text-black font-semibold py-3">
              {student.Department}
            </p>
          </div>
        </div>

        <div className="">
          <p className="text-3xl text-black font-semibold py-3">
            E-mail:{student.email}
          </p>
          <p className="text-3xl text-black font-semibold py-3">
            ID:{student._ID}
          </p>
        </div>
      </div>

      <div className="flex">
        <p className="text-3xl text-black font-semibold py-3">
          Field Of Intrest
        </p>
        <p className="text-3xl text-black font-semibold py-3 px-2">:</p>
        <p className="text-3xl text-black font-semibold py-3">
          {student.fieldofIntrest}
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
