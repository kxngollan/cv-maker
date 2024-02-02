import "./CvPage.css";

const CvPage = ({ personal, skills, education, work, other }) => {
  return (
    <section className="CvPage">
      <div className="page">
        <div className="personal">
          <h1>{personal.fName}</h1>
          <h3>{personal.job}</h3>
          <p>{personal.email}</p>
          <p>{personal.phone}</p>

          {personal.statement.length > 0 ? (
            <div className="statment">
              <h3>Personal Statement</h3>
              <hr />
              <p>{personal.statement}</p>
            </div>
          ) : (
            ""
          )}
        </div>
        {skills.length > 0 ? (
          <div className="skills">
            <h2>Skills</h2>
            <hr />
            <ul className="talents">
              {skills.map((skill, index) => {
                return <li key={index}>{skill}</li>;
              })}
            </ul>
          </div>
        ) : (
          ""
        )}
        {education.length > 0 ? (
          <div className="education">
            <h2>Education</h2>
            <hr />
            {education.map((school, index) => {
              return (
                <div className="schools" key={index}>
                  <h3>{school.name}</h3>
                  <strong>{school.course}</strong>
                  <h6>{school.grade.length > 0 ? `-${school.grade}` : ""}</h6>
                  <p>
                    {school.startDate} - {school.endDate}
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
        {work.length > 0 ? (
          <div className="workExp">
            <h2>Work Experience</h2>
            <hr />
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
        ) : (
          ""
        )}
      </div>
      <div className="other"></div>
    </section>
  );
};

export default CvPage;
