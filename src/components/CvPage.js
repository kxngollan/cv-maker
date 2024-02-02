import "./CvPage.css";

const CvPage = ({ personal, skills, education, work }) => {
  return (
    <section className="CvPage">
      <div className="personal">
        <h1>{personal.fName}</h1>
        <h3>{personal.job}</h3>
        <p>{personal.email}</p>
        <p>{personal.phone}</p>
        <p>{personal.statement}</p>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
      </div>
      <div className="education">
        <h2>Education</h2>
        {education.map((school, index) => {
          return (
            <div className="schools" key={index}>
              <h3>{school.name}</h3>
              <h4>
                <strong>{school.course}</strong> - {school.grade}
                <p>
                  {school.startDate} - {school.endDate}
                </p>
              </h4>
            </div>
          );
        })}
      </div>
      <div className="workExp">
        <h2>Work Experience</h2>
        {work.map((job, index) => {
          return (
            <div className="jobs" key={index}>
              <h3>{job.name}</h3>
              <h4>
                <strong>{job.position}</strong>
              </h4>
              <p>
                {job.startDate} - {job.endDate}
              </p>
              <p>{job.responsibilities}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CvPage;
