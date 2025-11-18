import React from "react";
import { getProjectIcon } from "../../utils/projectIcons";

const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    image,
    category,
    technologies,
    liveUrl,
    githubUrl,
    status,
  } = project;

  return (
    <div className="bg-gradient-to-br flex flex-col bg-[#fddbdb] bg-opacity-5 rounded-3xl p-2 sm:p-4 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group border border-white/10">
      {/* Project Header */}
      <div className="flex flex-col md:flex-row  gap-2 lg:gap-4 mb-3">
        {/* Project Image */}
        <div className="flex-shrink-0">
          <div className="bg-white/10 rounded-2xl p-2 backdrop-blur-sm group-hover:bg-white/20 transition-colors duration-300">
            <img
              src={getProjectIcon(image)}
              alt={title}
              className="w-10 h-10 sm:w-14 sm:h-14 object-contain"
            />
          </div>
        </div>

        {/* Project Info */}
        <div className="flex-1">
          <div className="flex flex-col   mb-3">
            <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white font-sans">
              {title}
            </h3>
            <span
              className={`px-3 py-1 w-fit rounded-full text-sm font-medium ${
                status === "completed"
                  ? "bg-green-500/20 text-green-300"
                  : "bg-yellow-500/20 text-yellow-300"
              }`}
            >
              {status === "completed" ? "Completed" : "In Progress"}
            </span>
          </div>

          <p className="text-white/80 text-base sm:text-base mb-2 leading-relaxed">
            {description}
          </p>

          {/* Categories */}
          {/* <div className="mb-2">
            <p className="text-white/70 font-medium mb-2">Project Type:</p>
            <div className="flex flex-wrap gap-2">
              {category.map((cat, index) => (
                <span
                  key={index}
                  className="bg-[#feb901]/20 text-[#feb901] px-3 py-1 rounded-full text-sm font-medium border border-[#feb901]/30"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div> */}
        </div>
      </div>

      {/* Technologies Section */}
      <div className="mb-6 flex-1">
        <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">
          Technologies Used
        </h4>
        <div className="flex mt-1 flex-wrap gap-3 items-center">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white/95 hover:bg-white flex items-center rounded-full p-2 pr-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-white/20 rounded-full p-1 mr-2">
                <img
                  src={getProjectIcon(tech.icon)}
                  alt={tech.name}
                  className="w-3 h-3 object-contain"
                />
              </div>
              <span className="text-[#0c0c0c] font-medium text-xs">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => window.open(liveUrl, "_blank")}
          className="flex-1 bg-gradient-to-r from-[#feb901] to-[#ffa500] text-black font-bold py-2 px-4 rounded-full hover:from-[#ffa500] hover:to-[#feb901] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <span className="flex items-center justify-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Live Demo
          </span>
        </button>

        <button
          onClick={() => window.open(githubUrl, "_blank")}
          className="flex-1 border-2 border-white/30 text-white font-bold py-2 px-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
        >
          <span className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View Code
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
