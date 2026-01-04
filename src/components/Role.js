import { useState } from "react";
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Role = ({ role, id, isOpen }) => {
  const [open, setOpen] = useState(isOpen);

  return (
    <div>
      <button
        aria-controls={id}
        aria-expanded={open}
        className="btn-link px-0 text-left text-sm"
        onClick={() => setOpen(!open)}
      >
        <FontAwesomeIcon
          className="pr-2 w-2.5"
          icon={open ? faChevronDown : faChevronRight}
          size="sm"
        />
        {role.title}
      </button>
      
      {/* Collapsible content */}
      <div
        id={id}
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {role.description.map((d) => (
          <p key={d} className="mt-2">{d}</p>
        ))}
      </div>
    </div>
  );
};

export default Role;
