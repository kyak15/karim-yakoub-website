import Role from "./Role";

const Milestone = ({ id, milestone }) => (
  <>
    <div className={`flex flex-col sm:flex-row ${id !== 0 ? "pt-4" : ""}`}>
      <div className="sm:flex-none">
        <span className="font-bold">{milestone.company}</span> -{" "}
        {milestone.location}
      </div>
      <small className="sm:flex-1 sm:text-right italic">
        {milestone.duration}
      </small>
    </div>
    {milestone.roles.map((role, i) => (
      <Role
        key={i}
        id={`${id}-${i}`}
        role={role}
        isOpen={id === 0 && i === 0}
      />
    ))}
  </>
);

export default Milestone;
