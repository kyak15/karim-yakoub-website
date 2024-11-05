
import React from "react";
import Role from "./Role";

const Milestone = ({ id, milestone }) => (
  <>
    <div className={id !== 0 ? "row pt-4" : "row"}>
      <div className="col-sm-auto">
        <span className="font-weight-bold">{milestone.company}</span> -{" "}
        {milestone.location}
      </div>
      <small className="col text-sm-right font-italic">
        {milestone.duration}
      </small>
    </div>
    {renderRoles(id, milestone.roles)}
  </>
);

const renderRoles = (id, roles) => {
  let i = 0;
  return roles.map((role) => (
    <Role
      key={i}
      id={`${id}-${i++}`}
      role={role}
      isOpen={id === 0 && i === 1}
    />
  ));
};

export default Milestone;
