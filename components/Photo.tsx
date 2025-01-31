import React from "react";
import { photo } from "@/assets";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="h-[400px] w-full justify-between items-center flex max-lg:flex-col lg:gap-7">
      <div className="flex flex-1 justify-center lg:justify-end items-center">
        <Image
          src={photo}
          alt="photo"
          className="w-[250px] h-[250px] object-cover rounded-full"
        />
      </div>
      <div className="flex flex-col flex-1 justify-center lg:justify-start">
        <h1 className="">Timmy</h1>
        <p className="">Software Engineer</p>
      </div>
    </div>
  );
};

export default Photo;
