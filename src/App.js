import React, { useState } from "react";
import CvForm from "./components/CvForm";
import CvPage from "./components/CvPage";
import "./App.css";

const App = () => {
  const [personal, setPersonal] = useState({});
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);
  const [work, setWork] = useState([]);
  const [other, setOther] = useState([]);

  const personalUpdate = (update) => {
    setPersonal(update);
  };

  const skillUpdate = (update) => {
    setSkills(update);
  };

  const edUpdate = (update) => {
    setEducation(update);
  };

  const workUpdate = (update) => {
    setWork(update);
  };

  const otherUpdate = (update) => {
    setOther(update);
  };

  return (
    <>
      <nav>
        <h1>Cv/Resume Maker</h1>
      </nav>
      <main>
        <CvForm
          personalUpdate={personalUpdate}
          skillUpdate={skillUpdate}
          edUpdate={edUpdate}
          workUpdate={workUpdate}
          otherUpdate={otherUpdate}
        />
        <CvPage
          personal={personal}
          skills={skills}
          education={education}
          work={work}
          other={other}
        />
      </main>
    </>
  );
};

export default App;
