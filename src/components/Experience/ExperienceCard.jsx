import React from "react";
import { getProjectIcon } from "../../utils/projectIcons";

const ExperienceCard = ({ experience }) => {
  const {
    company,
    position,
    duration,
    startDate,
    endDate,
    type,
    location,
    description,
    achievements,
    technologies,
    companyLogo,
    status,
    category,
  } = experience;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="bg-gradient-to-br bg-[#fddbdb] bg-opacity-5 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group border border-white/10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Company Logo */}
        <div className="flex-shrink-0">
          <div className="bg-white/10 rounded-2xl p-3 backdrop-blur-sm group-hover:bg-white/20 transition-colors duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-[#feb901] to-[#ffa500] rounded-xl flex items-center justify-center">
              <span className="text-2xl font-bold text-black">
                {company.charAt(0)}
              </span>
            </div>
          </div>
        </div>

        {/* Experience Info */}
        <div className="flex-1">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-3">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white font-sans mb-1">
                {position}
              </h3>
              <p className="text-[#feb901] text-xl font-semibold">{company}</p>
            </div>
            <div className="flex flex-col items-start lg:items-end gap-2 mt-2 lg:mt-0">
              <span
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  status === "current"
                    ? "bg-green-500/20 text-green-300 border border-green-500/30"
                    : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                }`}
              >
                {status === "current" ? "Current Position" : "Completed"}
              </span>
              <span className="text-white/70 text-sm">{location}</span>
            </div>
          </div>

          {/* Duration and Type */}
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="bg-[#feb901]/20 text-[#feb901] px-4 py-2 rounded-full text-sm font-medium border border-[#feb901]/30">
              📅 {formatDate(startDate)} -{" "}
              {status === "current" ? "Present" : formatDate(endDate)}
            </div>
            <div className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
              ⏱️ {duration}
            </div>
            <div className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium border border-purple-500/30">
              💼 {type}
            </div>
          </div>

          <p className="text-white/80 text-base leading-relaxed mb-4">
            {description}
          </p>
        </div>
      </div>

      {/* Key Achievements */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
          <span className="text-[#feb901] mr-2">🏆</span>
          Key Achievements
        </h4>
        <div className="space-y-2">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#feb901] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-white/80 text-sm leading-relaxed">
                {achievement}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies Section */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
          <span className="text-[#feb901] mr-2">🛠️</span>
          Technologies Used
        </h4>
        <div className="flex flex-wrap gap-2">
          {/* {technologies.map((tech, index) => (
         
            <div
              key={index}
              className="bg-white/95 hover:bg-white flex items-center rounded-full p-2 pr-3 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-white/20 rounded-full p-1 mr-2">
                {typeof Icon === "string" ? (
                  <img
                    src={Icon}
                    alt={tech.name}
                    className="w-4 h-4 object-contain"
                  />
                ) : (
                  <Icon className="w-4 h-4" />
                )}
              </div>
              <span className="text-[#0c0c0c] font-medium text-xs">
                {tech.name}
              </span>
            </div>
          ))} */}
          {technologies.map((tech, index) => {
            const Icon = getProjectIcon(tech.icon);

            return (
              <div
                key={index}
                className="bg-white/95 hover:bg-white flex items-center rounded-full p-2 pr-3 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-white/20 rounded-full p-1 mr-2">
                  {Icon ? (
                    typeof Icon === "function" ? (
                      // 👉 React Icon (postman)
                      <Icon className="w-4 h-4" />
                    ) : (
                      // 👉 Local image (svg)
                      <img
                        src={Icon}
                        alt={tech.name}
                        className="w-4 h-4 object-contain"
                      />
                    )
                  ) : (
                    // 🔥 Fallback to avoid crash
                    <div className="w-4 h-4 bg-gray-300 rounded"></div>
                  )}
                </div>

                <span className="text-[#0c0c0c] font-medium text-xs">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Category Tag */}
      <div className="flex justify-between items-center">
        <div className="bg-gradient-to-r from-[#102762] to-[#1a3a7a] text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
          📂 {category}
        </div>

        {status === "current" && (
          <div className="flex items-center text-green-300 text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
            Currently Working
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
