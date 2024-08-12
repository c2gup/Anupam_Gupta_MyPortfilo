import React from "react";
import anupam from "../../assets/anupamDp.jpg";
import { IoArrowDown } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";

function DiscussProject() {
  return (
    <>
      <div className="flex justify-center items-center my-10 px-4">
        <p className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-[#feb901] text-center">
          Discuss Project
        </p>
      </div>

      <div className="w-[90%] max-w-6xl bg-[#ecedee]/10 p-4 md:p-8 lg:p-12 rounded-3xl flex flex-col items-center mx-auto gap-4 md:gap-6 lg:gap-8 overflow-hidden">
        <div className="w-32 md:w-40 lg:w-48 border border-solid border-[#feb901] rounded-full flex justify-center items-center">
          <img
            src={anupam}
            alt="Anupam"
            className="w-full h-full p-2 object-cover rounded-full"
          />
        </div>

        <div className="flex flex-col gap-4 items-center text-center">
          <p className="text-[#feb901] text-3xl md:text-4xl lg:text-5xl font-bold font-sans">
            Anupam Gupta
          </p>
          <p className="text-white text-base md:text-lg lg:text-xl font-serif font-semibold">
            Front End Developer / Web Designer / UI Developer
          </p>
        </div>

        <div className="mt-6 flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8">
          <button className="bg-[#feb901] bg-opacity-5 text-yellow-700 hover:bg-[#feb901] text-lg md:text-xl font-sans font-medium flex items-center justify-center gap-2 p-3 md:p-4 lg:p-2 rounded-3xl border border-yellow-700 hover:bg-[#feb901] hover:text-black">
            <IoArrowDown size={24} /> Resume
          </button>
          <a href="contact-us">
          <button className="bg-[#feb901] text-black text-lg md:text-xl lg:text-2xl font-sans font-medium flex items-center justify-center gap-2 p-3 md:p-4 lg:p-2 rounded-3xl border border-yellow-700 hover:bg-opacity-5 hover:text-[#feb901]">
            <LuMessagesSquare size={24} />
            Discuss Project
          </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default DiscussProject;