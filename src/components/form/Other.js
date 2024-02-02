import { useState, useEffect } from "react";

const Other = ({ onOtherUpdate }) => {
  const [others, setOthers] = useState([]);
  const [newOther, setNewOther] = useState({
    name: "",
    course: "",
    grade: "",
    startDate: "",
    endDate: "",
    describe: "",
  });

  const addOther = () => {
    setOthers([...others, newOther]);
    setNewOther({
      name: "",
      course: "",
      grade: "",
      startDate: "",
      endDate: "",
      describe: "",
    });
  };

  const deleteOther = (index) => {
    const current = [...others];
    current.splice(index, 1);
    setOthers(current);
  };

  useEffect(() => {
    onOtherUpdate(others);
  }, [others, onOtherUpdate]);

  return (
    <section className="education">
      <h2>Education</h2>
      {others.map((other, index) => (
        <div key={index}>
          <p>{other.name}</p>
          <p>{other.course}</p>
          <p>{other.grade}</p>
          <p>{other.startDate}</p>
          <p>{other.endDate}</p>
          <p>{other.describe}</p>
          <button type="button" onClick={() => deleteOther(index)}>
            delete
          </button>
        </div>
      ))}
      <hr />
      <label htmlFor="other">Other title:</label>
      <input
        type="text"
        name="other"
        value={newOther.title}
        onChange={(e) => {
          setNewOther((prev) => ({ ...prev, title: e.target.value }));
        }}
      />

      <label htmlFor="other">n:</label>
      <input
        type="text"
        name="other"
        value={newOther.name}
        onChange={(e) => {
          setNewOther((prev) => ({ ...prev, name: e.target.value }));
        }}
      />

      <button type="button" onClick={addOther}>
        Add Other
      </button>
    </section>
  );
};

export default Other;
