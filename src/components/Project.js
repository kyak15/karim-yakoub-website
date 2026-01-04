import { useState } from "react";
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Project = ({ project, id }) => {
  const [open, setOpen] = useState(false);

  return (
    <div key={id} className="pb-3">
      <button
        className="btn-link px-0 text-left text-sm"
        onClick={() => setOpen(!open)}
        aria-controls={id}
        aria-expanded={open}
      >
        <FontAwesomeIcon
          className="pr-2 w-2.5"
          icon={open ? faChevronDown : faChevronRight}
          size="sm"
        />
        <span className="font-bold">{project.title}</span> - {project.description}
      </button>
      
      {/* Collapsible content */}
      <div
        id={id}
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="list-disc pl-5 mt-2">
          {project.details.bullets.map((d) => (
            <li key={d}>{d}</li>
          ))}
          {project.details.link && (
            <li>
              <a
                href={project.details.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary dark:text-primary-dark dark:hover:text-secondary-dark"
              >
                {project.details.link.text}
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Project;
