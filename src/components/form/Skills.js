import React, { useEffect } from "react";
import { useState } from "react";

const Skills = ({ onSkillUpdate }) => {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [error, setError] = useState("");

  const addSkill = () => {
    if (newSkill === "") {
      setError("Please enter a skill");
      return;
    }
    setSkills([...skills, newSkill]);
    setNewSkill("");
    console.log(skills);
  };

  const deleteSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  useEffect(() => {
    onSkillUpdate(skills);
  }, [skills, onSkillUpdate]);

  return (
    <div>
      <h1>Skills</h1>
      <ul>
        {skills.map((skill, index) => {
          return (
            <li key={index}>
              {skill}
              <button type="button" onClick={() => deleteSkill(index)}>
                delete
              </button>
            </li>
          );
        })}
      </ul>
      <label htmlFor="newSkill">Enter new skill:</label>
      <input
        type="text"
        name="newSkill"
        value={newSkill}
        onChange={(e) => setNewSkill(e.target.value)}
      />
      <button type="button" className="btn" onClick={addSkill}>
        Add skill
      </button>
      <p className="error">{error}</p>
    </div>
  );
};

export default Skills;
