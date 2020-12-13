import React, { useEffect } from "react";
import "./Tech.css";
import techskills from "./techskills";

const Tech = () => {
  useEffect(() => {
    console.log(techskills);
  }, []);

  return (
    <div className="tech">
      <h2>Some Cool Tech I've Used</h2>
      <div className="tech__logos">
        {techskills.map((skill, i) => (
          <div className="tech__skill" key={i}>
            <img src={skill.fields.image} alt="" />
            <p>{skill.fields.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
