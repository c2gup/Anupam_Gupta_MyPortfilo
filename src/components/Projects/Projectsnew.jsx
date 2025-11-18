import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../../data/projectsData.json";

function Projectsnew() {
  const [filter, setFilter] = useState("all");

  // Get unique categories for filter buttons
  const categories = [
    "all",
    ...new Set(projectsData.flatMap((project) => project.category)),
  ];

  // Filter projects based on selected category
  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category.includes(filter));

  return (
    <div id="projects" className="min-h-screen bg-gradient-to-b  py-16 px-4">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#feb901] font-sans mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Explore my portfolio of innovative projects, showcasing modern
            technologies and creative solutions to real-world problems.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                filter === category
                  ? "bg-[#feb901] text-black shadow-lg"
                  : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
              }`}
            >
              {category === "all" ? "All Projects" : category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">
              No projects found
            </h3>
            <p className="text-white/70">Try selecting a different category.</p>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-[#102762] to-[#1a3a7a] rounded-3xl p-8 border border-white/10">
          <h3 className="text-3xl font-bold text-white mb-4">
            Have a Project in Mind?
          </h3>
          <p className="text-xl text-white/80 mb-6">
            I'm always excited to work on new projects and bring ideas to life.
          </p>
          <button className="bg-gradient-to-r from-[#feb901] to-[#ffa500] text-black font-bold py-4 px-8 rounded-full hover:from-[#ffa500] hover:to-[#feb901] transition-all duration-300 transform hover:scale-105 shadow-lg">
            Let's Work Together
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projectsnew;
