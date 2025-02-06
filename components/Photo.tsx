import React from "react";
import { photo } from "@/assets";
import Image from "next/image";

const Photo = () => {
  return (
    <Image
      src={photo}
      alt="photo"
      className=" rounded-2xl object-cover aspect-square"
    />
  );
};

export default Photo;
