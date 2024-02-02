import React, { useEffect, useState } from "react";

const Education = ({ onEdUpdate }) => {
  const [schools, setSchools] = useState([]);
  const [newSchool, setNewSchool] = useState({
    name: "",
    course: "",
    grade: "",
    startDate: "",
    endDate: "",
    describe: "",
  });

  const addSchool = () => {
    setSchools([...schools, newSchool]);
    setNewSchool({
      name: "",
      course: "",
      grade: "",
      startDate: "",
      endDate: "",
      describe: "",
    });
  };

  const deleteSchool = (index) => {
    const current = [...schools];
    current.splice(index, 1);
    setSchools(current);
  };

  useEffect(() => {
    onEdUpdate(schools);
  }, [schools, onEdUpdate]);

  return (
    <section className="education">
      <h2>Education</h2>
      {schools.map((school, index) => {
        return (
          <div key={index}>
            <p>{school.name}</p>
            <p>{school.course}</p>
            <p>{school.grade}</p>
            <p>{school.startDate}</p>
            <p>{school.endDate}</p>
            <p>{school.describe}</p>
            <button type="button" onClick={deleteSchool}>
              delete
            </button>
          </div>
        );
      })}
      <hr />

      <label htmlFor="school">School:</label>
      <input
        type="text"
        name="school"
        value={newSchool.name}
        onChange={(e) => {
          setNewSchool((prev) => ({ ...prev, name: e.target.value }));
        }}
      />
      <label htmlFor="course">Course:</label>
      <input
        type="text"
        name="course"
        value={newSchool.course}
        onChange={(e) => {
          setNewSchool((prev) => ({ ...prev, course: e.target.value }));
        }}
      />
      <label htmlFor="grade">Grade:</label>
      <input
        type="text"
        name="grade"
        value={newSchool.grade}
        onChange={(e) => {
          setNewSchool((prev) => ({ ...prev, grade: e.target.value }));
        }}
      />
      <label htmlFor="startDate">Start Date:</label>
      <input
        type="date"
        name="startDate"
        value={newSchool.startDate}
        onChange={(e) => {
          setNewSchool((prev) => ({ ...prev, startDate: e.target.value }));
        }}
      />
      <label htmlFor="endDate">End Date:</label>
      <input
        type="date"
        name="endDate"
        value={newSchool.endDate}
        onChange={(e) => {
          setNewSchool((prev) => ({ ...prev, endDate: e.target.value }));
        }}
      />
      <label htmlFor="describe">Describe:</label>
      <textarea
        name="describe"
        value={newSchool.describe}
        onChange={(e) => {
          setNewSchool((prev) => ({ ...prev, describe: e.target.value }));
        }}
      />
      <button type="button" onClick={addSchool}>
        Add School
      </button>
    </section>
  );
};

export default Education;
