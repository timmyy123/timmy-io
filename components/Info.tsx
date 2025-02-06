import Link from "next/link";
import React from "react";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Info = () => {
  return (
    <div className="aspect-2/1 p-4 flex  ">
      <div className=" h-full flex flex-col justify-center ">
        <div className="mb-4">
          <h1 className="text-3xl mb-2">Education</h1>
          <p className="text-xl">Master of Information Technology</p>
          <p className="text-xl">Monash University, AU</p>
          <p className="text-xl">Jul 2023 - Jul 2025</p>
        </div>
        <div>
          <h1 className="text-3xl mb-2">Contacts</h1>
          <div className="flex gap-2 items-center">
            <FaPhoneAlt />
            <p>{process.env.PHONE_NUMBER}</p>
          </div>
          <div className="flex gap-2 items-center">
            <MdEmail />
            <p>{process.env.EMAIL}</p>
          </div>
        </div>
      </div>
      <div className="card-top flex-grow flex-col ms-2 justify-center items-center gap-2">
        <Link href={process.env.GITHUB || "https://github.com"}>
          <FaGithub className="w-25 h-25"/>
        </Link>
        <Link href={process.env.LINKEDIN || "https://www.linkedin.com"}>
          <FaLinkedin className="w-25 h-25"/>
        </Link>
      </div>
    </div>
  );
};

export default Info;
