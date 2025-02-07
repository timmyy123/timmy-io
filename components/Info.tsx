import Link from "next/link";
import React from "react";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { Button } from "./ui/button";

const Info = () => {
  return (
    <div className="aspect-2/1 p-4 flex  ">
      <div className=" h-full flex flex-col justify-center grow-1  ">
        <div className="mb-1">
          <h1 className="text-2xl mb-1">Education</h1>
          <p className="text-xl text-wrap">Master of Information Technology</p>
          <p className="text-xl">Monash University, AU</p>
          <p className="text-xl">Jul 2023 - Jul 2025</p>
        </div>
        <div>
          <h1 className="text-2xl mb-1">Contacts</h1>
          <div className="flex gap-2 items-center">
            <FaPhoneAlt />
            <p>{process.env.PHONE_NUMBER}</p>
          </div>
          <div className="flex gap-2 items-center ">
            <MdEmail />
            <p>{process.env.EMAIL}</p>
          </div>
        </div>
      </div>
      <div className=" h-full flex flex-col justify-center grow-1  ">
        <div className="grow-1 flex items-center justify-center  ">
          <a
            href="/Resume.pdf"
            className="flex items-center justify-center gap-2 border rounded-2xl p-2"
          >
            <FiDownload />
            <p>Resume</p>
          </a>
        </div>
        <div className=" flex   justify-center items-center gap-2 grow-1">
          <Link href={process.env.GITHUB || "https://github.com"}>
            <FaGithub className="w-22 h-22" />
          </Link>
          <Link href={process.env.LINKEDIN || "https://www.linkedin.com"}>
            <FaLinkedin className="w-22 h-22" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Info;
