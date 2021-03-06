import React from "react";


function SkillsBar({ skill, isScrolled }) {
  return (
    <div style={{ width: "95%" }}>
      <p className="lead mb-1 mt-2">{skill}</p>
    </div>
  );
}

export default SkillsBar;
