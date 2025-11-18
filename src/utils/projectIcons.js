// Import all project icons
import cricket from "../assets/Projects/crictracker.29f9ef7d.svg";
import amp from "../assets/Projects/amp.47ce7b15.svg";
import bootstrap from "../assets/Projects/bootstrap.d998acf1.svg";
import git_ from "../assets/Projects/git.514e511e (1).svg";
import git from "../assets/Projects/git.514e511e.svg";
import github from "../assets/Projects/github.de5575e3.svg";
import gitlab from "../assets/Projects/gitlab.3f2acf31.svg";
import javascript from "../assets/Projects/javascript.6a338998.svg";
import nextjs from "../assets/Projects/nextjs.a98ac74a.svg";
import reactHook from "../assets/Projects/react-hook-form.b1e3e984.svg";
import react from "../assets/Projects/react.7c403179.svg";
import tailwindcss from "../assets/Projects/tailwindcss.eae27b48.svg";
import { SiPostman } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaAws } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { SiPostgresql } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { AiOutlineOpenAI } from "react-icons/ai";
import { RiGeminiFill } from "react-icons/ri";
import { VscAzure } from "react-icons/vsc";
// Export icon mapping object
export const projectIcons = {
  "crictracker.29f9ef7d.svg": cricket,
  "amp.47ce7b15.svg": amp,
  "bootstrap.d998acf1.svg": bootstrap,
  "git.514e511e (1).svg": git_,
  "git.514e511e.svg": git,
  "github.de5575e3.svg": github,
  "gitlab.3f2acf31.svg": gitlab,
  "javascript.6a338998.svg": javascript,
  "nextjs.a98ac74a.svg": nextjs,
  "react-hook-form.b1e3e984.svg": reactHook,
  "react.7c403179.svg": react,
  "tailwindcss.eae27b48.svg": tailwindcss,
  "postman": SiPostman,
  "nextjs": RiNextjsFill,
  "aws": FaAws,
  "typescript": TbBrandTypescript,
  "postgresql": SiPostgresql,
  "python": FaPython,
  "docker": FaDocker,
  "nodejs": FaNode,
  "openai": AiOutlineOpenAI,
  " gemini": RiGeminiFill,
  "azure": VscAzure,
};

// Helper function to get icon by filename
export const getProjectIcon = (iconName) => {
  return projectIcons[iconName] || null;
};
