import React from "react";
import { photo } from "@/assets";
import Image from "next/image";

const Photo = () => {
  return (
   
      <Image src={photo} alt="photo" 
      className="w-full h-full object-cover rounded-2xl"

      />

  );
};

export default Photo;
