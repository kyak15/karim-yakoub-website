import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import portImage from "../img/portfolio_image.jpg";
import skills from "../content/skills";

const AboutCard = ({ darkMode }) => {
  const textColorClass = darkMode ? "text-gray-100" : "text-gray-900";
  const cardBgClass = darkMode
    ? "bg-gray-800 border border-gray-600"
    : "bg-transparent border border-gray-500";

  return (
    <div className={`rounded-lg overflow-hidden mb-3 ${cardBgClass}`}>
      {/* Image with overlay */}
      <div className="relative">
        <img
          src={portImage}
          alt="Karim Yakoub"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex flex-col justify-start p-4 text-black">
          <h2 className="font-patua text-2xl">Karim Yakoub</h2>
          <p className="font-medium text-sm w-1/2 md:w-3/4">
            Software Engineer
          </p>
        </div>
      </div>

      {/* Card body */}
      <div className="p-4">
        {/* Location */}
        <div className={`mb-1 ${textColorClass}`}>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span className="pl-2">Hawthorne, NJ, USA</span>
        </div>

        {/* GitHub link */}
        <div className="mb-1">
          <a
            className={`${textColorClass} text-primary hover:text-secondary dark:text-primary-dark dark:hover:text-secondary-dark`}
            href="https://github.com/kyak15"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
            <span className="pl-2">github.com/kyak15</span>
          </a>
        </div>

        {/* LinkedIn link */}
        <div className="mb-4">
          <a
            className={`${textColorClass} text-primary hover:text-secondary dark:text-primary-dark dark:hover:text-secondary-dark`}
            href="https://linkedin.com/in/karim-yakoub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <span className="pl-2">linkedin.com/in/karim-yakoub</span>
          </a>
        </div>

        {/* Skills */}
        {skills.map((s) => (
          <div key={s.title} className={`pb-3 ${textColorClass}`}>
            <span className={`font-bold ${textColorClass}`}>{s.title}: </span>
            {s.skills.join(", ")}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCard;
