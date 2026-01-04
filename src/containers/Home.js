import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faGraduationCap,
  faLaptopCode,
  faMoon,
  faSun,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Milestone from "../components/Milestone";
import Project from "../components/Project";
import milestones from "../content/milestones";
import education from "../content/education";
import leadership from "../content/leadership";
import projects from "../content/projects";
import AboutCard from "../components/AboutCard";

const Home = () => {
  // Initialize dark mode based on document class (persists across navigation)
  const [darkMode, setDarkMode] = useState(() => 
    document.documentElement.classList.contains("dark")
  );

  // Sync document classes when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("bg-gray-900");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("bg-gray-900");
    }
  }, [darkMode]);

  const onDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`container mx-auto px-4 md:px-0 py-10 ${
        darkMode ? "text-gray-100" : "text-gray-900"
      }`}
    >
      {/* Dark mode toggle */}
      <div className="relative z-[2000] flex justify-end gap-1.5">
        <button
          onClick={onDarkModeToggle}
          className="btn-link rounded-[20px] px-3 py-2 transition-all hover:bg-primary/10 dark:hover:bg-primary-dark/20"
          title={darkMode ? "Light mode" : "Dark mode"}
        >
          <FontAwesomeIcon
            icon={faSun}
            className={darkMode ? "hidden" : "inline"}
          />
          <FontAwesomeIcon
            icon={faMoon}
            className={darkMode ? "inline" : "hidden"}
          />
        </button>
        <Link
          to="/blog"
          className="btn-link rounded-[20px] px-3 py-2 transition-all hover:bg-primary/10 dark:hover:bg-primary-dark/20"
          title="Blog"
        >
          <span className="pl-3">Blog</span>
        </Link>
      </div>

      {/* Main content grid */}
      <div className="flex flex-col md:flex-row">
        {/* Left sidebar - About card */}
        <div className="md:w-1/3 md:px-0">
          <div className="sticky top-0 pt-[75px] pb-2.5 -mt-[75px]">
            <AboutCard darkMode={darkMode} />
          </div>
        </div>

        {/* Right content area */}
        <div className="md:w-2/3 md:pl-10">
          {/* Experience section */}
          <h4 className="section-title !pt-0">
            <FontAwesomeIcon icon={faLaptopCode} />
            <span className="pl-3">experience</span>
          </h4>
          {milestones.map((m, i) => (
            <Milestone milestone={m} id={i} key={m.company} />
          ))}

          {/* Education section */}
          <h4 className="section-title">
            <FontAwesomeIcon icon={faGraduationCap} />
            <span className="pl-3">education</span>
          </h4>
          <Milestone milestone={education[0]} id={0} />
          <div className="text-sm">
            <div>
              <span className="font-bold">Coursework: </span>
              <span> </span>
              Data Structures and Algorithms, Software Engineering, Computer
              Networking, Analysis of Algorithms, Parallel Programming, Intro to
              Databases, Computer Architecture and Assembly, Web Development,
              Fundamentals of Programming
            </div>
          </div>
          <Milestone milestone={education[1]} id={1} />
          <div className="text-sm">
            <span className="font-bold">Coursework: </span>
            Cellular and Molecular Biology, Organic Chemistry, Biochemistry,
            Calculus 1, Statistics, Genetics, Anatomy and Physiology, Ecology,
            Evolution, General Chemistry, General Biology
          </div>

          {/* Projects section */}
          <h4 className="section-title">
            <FontAwesomeIcon icon={faCode} />
            <span className="pl-3">projects</span>
          </h4>
          {projects.map((p, i) => (
            <Project project={p} id={i} key={p.title} />
          ))}

          {/* Leadership section */}
          <h4 className="section-title">
            <FontAwesomeIcon icon={faUsers} />
            <span className="pl-3">leadership</span>
          </h4>
          {leadership.map((m, i) => (
            <Milestone milestone={m} id={i} key={m.company} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
