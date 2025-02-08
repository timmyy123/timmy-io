import Link from "next/link";
import React from "react";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

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
            <p>+61 433837313</p>
          </div>
          <div className="flex gap-2 items-center ">
            <MdEmail />
            <p>timmyy32123@outlook.com</p>
          </div>
        </div>
      </div>
      <div className=" h-full flex flex-col justify-center grow-1  ">
        <div className="grow-1 flex items-center justify-center  ">
          <a
            href="/Resume.pdf"
            className="flex items-center justify-center gap-2 border border-yellow-400 rounded-2xl p-2"
          >
            <FiDownload />
            <p>Resume</p>
          </a>
        </div>
        <div className=" flex   justify-center items-center gap-2 grow-1">
          <Link href={"https://github.com/timmyy123"}>
            <FaGithub className="w-22 h-22" />
          </Link>
          <Link href={"https://www.linkedin.com/in/yuan-qian-37b4862b0"}>
            <FaLinkedin className="w-22 h-22" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Info;
