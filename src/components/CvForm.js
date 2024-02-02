import React from "react";
import Personal from "./form/Personal";
import Skills from "./form/Skills";
import Education from "./form/Education";
import WorkExp from "./form/WorkExp";
import Other from "./form/Other";
import "./CvForm.css";

const CvForm = ({
  personalUpdate,
  skillUpdate,
  edUpdate,
  workUpdate,
  otherUpdate,
}) => {
  return (
    <div className="cv-form">
      <Personal onPersonalUpdate={personalUpdate} />
      <Skills onSkillUpdate={skillUpdate} />
      <Education onEdUpdate={edUpdate} />
      <WorkExp onWorkUpdate={workUpdate} />
      <Other onOtherUpdate={otherUpdate} />
    </div>
  );
};

export default CvForm;
