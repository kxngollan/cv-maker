import React, { useEffect, useState } from "react";

const WorkExp = ({ onWorkUpdate }) => {
  const [jobs, setJobs] = useState([]);
  const [NewJob, setNewjob] = useState({
    name: "",
    course: "",
    startDate: "",
    endDate: "",
    responsibilities: "",
    position: "",
  });

  const addjob = () => {
    setJobs([...jobs, NewJob]);
    setNewjob({
      name: "",
      position: "",
      startDate: "",
      endDate: "",
      responsibilities: "",
    });
  };

  const deletejob = (index) => {
    const current = [...jobs];
    current.splice(index, 1);
    setJobs(current);
  };

  useEffect(() => {
    onWorkUpdate(jobs);
  }, [jobs, onWorkUpdate]);

  return (
    <section className="WorkExp">
      <h2>Work Experience</h2>
      {jobs.map((job, index) => {
        return (
          <div key={index}>
            <p>{job.name}</p>
            <p>{job.position}</p>

            <p>{job.startDate}</p>
            <p>{job.endDate}</p>
            <p>{job.responsibilities}</p>
            <button type="button" onClick={deletejob}>
              delete
            </button>
          </div>
        );
      })}
      <hr />

      <label htmlFor="job">job:</label>
      <input
        type="text"
        name="job"
        value={NewJob.name}
        onChange={(e) => {
          setNewjob((prev) => ({ ...prev, name: e.target.value }));
        }}
      />
      <label htmlFor="course">Position:</label>
      <input
        type="text"
        name="course"
        value={NewJob.position}
        onChange={(e) => {
          setNewjob((prev) => ({ ...prev, position: e.target.value }));
        }}
      />

      <label htmlFor="startDate">Start Date:</label>
      <input
        type="date"
        name="startDate"
        value={NewJob.startDate}
        onChange={(e) => {
          setNewjob((prev) => ({ ...prev, startDate: e.target.value }));
        }}
      />
      <label htmlFor="endDate">End Date:</label>
      <input
        type="date"
        name="endDate"
        value={NewJob.endDate}
        onChange={(e) => {
          setNewjob((prev) => ({ ...prev, endDate: e.target.value }));
        }}
      />
      <label htmlFor="responsibilities">Responsibilities:</label>
      <textarea
        name="responsibilities"
        value={NewJob.responsibilities}
        onChange={(e) => {
          setNewjob((prev) => ({ ...prev, responsibilities: e.target.value }));
        }}
      />
      <button type="button" onClick={addjob}>
        Add job
      </button>
    </section>
  );
};

export default WorkExp;
