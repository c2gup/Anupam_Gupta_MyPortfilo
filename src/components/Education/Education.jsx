import React from "react";
import clander from "../../assets/educton/calender.09ece368.svg";
import degree from "../../assets/educton/degree.0506a462.svg";
import college from "../../assets/educton/college.41484718.svg";
import location from "../../assets/educton/location.976ae75e.svg";
import collage_building from "../../assets/educton/vecteezy_a-yellow-building-with-columns-and-pillars-ai-generative_46484697.png";

function Education() {
  return (
    <>
      <hr className="border-[#feb901]/20 border-t-1 mt-20" />
      <div className="flex justify-center m-8">
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-sans font-bold text-[#feb901] shadow-lg">
          Education
        </div>
      </div>

      <div className="w-[90%] flex flex-col group m-auto mb-14 hover:bg-white transition duration-300 ease-in-out p-7 rounded-2xl bg-[#ecedee]/80">
        <div className="flex justify-between">
          <div className="bg-black border-2 border-solid border-[#feb901] w-fit justify-center items-center rounded-l-full rounded-r-full gap-2 p-1 flex font-bold">
            <img src={clander} alt="" />
            <div className="text-[#feb901] p-1 font-sans">2022-2026</div>
          </div>
          <div className="bg-white w-fit p-1 border-2 border-solid border-[#feb901] hover:border-[#feb901] justify-center group-hover:bg-[#feb901]/25 transition duration-300 ease-in-out items-center rounded-l-full rounded-r-full gap-2 flex font-bold">
            <img src={degree} alt="" />
            <div className="text-black p-1 font-sans">Graduation</div>
          </div>
        </div>
        {/* Left */}
        <div className="flex flex-col lg:flex-row">
          <div className="mt-6 w-full lg:w-1/2">
            <div className="flex gap-2 mt-8">
              <div className="bg-white w-fit justify-center items-center rounded-l-full rounded-r-full group-hover:bg-[#ecedee]/90 transition duration-300 ease-in-out gap-2 p-2 flex font-bold">
                <div className="text-black font-sans">
                  Computer Science Engineering
                </div>
              </div>

              <div className="bg-white w-fit justify-center items-center rounded-l-full rounded-r-full group-hover:bg-[#ecedee]/90 transition duration-300 ease-in-out gap-2 p-1 flex font-bold">
                <div className="text-black font-sans">B.tech (CSE)</div>
              </div>
            </div>

            <div className="mt-8">
              <div className="text-2xl md:text-3xl lg:text-4xl text-black font-sans font-bold">
                Bachelor of Technology in Computer Science
              </div>
              <div className="text-2xl md:text-3xl lg:text-4xl text-black font-sans font-bold">
                & Engineering
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex gap-3 mt-5 items-center">
                <div className="bg-white group-hover:bg-[#feb901]/25 transition duration-300 ease-in-out p-3 border-2 border-solid border-[#feb901] rounded-full">
                  <img src={college} alt="" />
                </div>
                <div className="text-[#0c0c0c]/80 font-sans text-xl font-medium">
                  Deen Dayal Upadhyaya Gorakhpur University
                </div>
              </div>
              <div className="flex gap-3 mt-5 items-center">
                <div className="bg-white group-hover:bg-[#feb901]/25 transition duration-300 ease-in-out p-3 border-2 border-solid border-[#feb901] rounded-full">
                  <img src={location} alt="" />
                </div>
                <div className="text-[#0c0c0c]/80 font-sans text-xl font-medium">
                  Gorakhpur, Uttar Pradesh, India
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center items-center mt-6 lg:mt-0">
            <img src={collage_building} className="w-full h-full" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;