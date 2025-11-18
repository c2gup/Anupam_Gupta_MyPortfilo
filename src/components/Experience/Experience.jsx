import React, { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import experienceData from "../../data/experienceData.json";

function Experience() {
  const [filter, setFilter] = useState("all");

  // Get unique types for filter buttons
  const types = ["all", ...new Set(experienceData.map((exp) => exp.type))];

  // Filter experiences based on selected type
  const filteredExperiences =
    filter === "all"
      ? experienceData
      : experienceData.filter((exp) => exp.type === filter);

  // Sort experiences by start date (newest first)
  const sortedExperiences = filteredExperiences.sort(
    (a, b) => new Date(b.startDate) - new Date(a.startDate)
  );

  return (
    <div id="experience" className="min-h-screen bg-gradient-to-b py-16 px-4">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#feb901] font-sans mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            My journey through different roles, showcasing growth, achievements,
            and the technologies I've mastered along the way.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#feb901] mb-2">
                14+
              </div>
              <div className="text-white/70 text-sm uppercase tracking-wide">
                Months Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#feb901] mb-2">
                2
              </div>
              <div className="text-white/70 text-sm uppercase tracking-wide">
                Companies
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#feb901] mb-2">
                10+
              </div>
              <div className="text-white/70 text-sm uppercase tracking-wide">
                Technologies
              </div>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                filter === type
                  ? "bg-[#feb901] text-black shadow-lg"
                  : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
              }`}
            >
              {type === "all" ? "All Experience" : type}
            </button>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {sortedExperiences.map((experience, index) => (
            <div key={experience.id} className="relative">
              {/* Timeline Line */}
              {index < sortedExperiences.length - 1 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-[#feb901] to-transparent mt-8 z-0"></div>
              )}

              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-4 h-4 bg-[#feb901] rounded-full border-4 border-white/20 z-10"></div>

              {/* Experience Card */}
              <ExperienceCard experience={experience} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredExperiences.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">💼</div>
            <h3 className="text-2xl font-bold text-white mb-2">
              No experience found
            </h3>
            <p className="text-white/70">Try selecting a different filter.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-[#102762] to-[#1a3a7a] rounded-3xl p-8 border border-white/10 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-xl text-white/80 mb-6 max-w-2xl mx-auto">
              I bring{" "}
              {experienceData.reduce(
                (total, exp) => total + parseInt(exp.duration),
                0
              )}
              + months of hands-on experience and a passion for creating
              exceptional digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://drive.google.com/file/d/1hNGSy3KfZsVUGMI_nOVP0d7Yglletb8H/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-gradient-to-r from-[#feb901] to-[#ffa500] text-black font-bold py-4 px-8 rounded-full hover:from-[#ffa500] hover:to-[#feb901] transition-all duration-300 transform hover:scale-105 shadow-lg">
                  💼 View My Resume
                </button>
              </a>

              <a
                href="https://www.linkedin.com/in/anupamc2/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-blue-500"
              >
                <button className="border-2 border-white/30 text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                  📧 Contact Me
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
