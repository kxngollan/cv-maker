import { useState, useEffect } from "react";

const Other = ({ onOtherUpdate }) => {
  const [others, setOthers] = useState([]);
  const [newOther, setNewOther] = useState({
    title: "",
    name: "",
    startDate: "",
    endDate: "",
    describe: "",
  });

  const addOther = () => {
    setOthers([...others, newOther]);
    setNewOther({
      title: "",
      name: "",
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
    <section className="other">
      <h2>Other</h2>

      {others.map((other, index) => (
        <div key={index}>
          <hr />
          <p>{other.title}</p>
          <p>{other.name}</p>
          <p>{other.startDate}</p>
          <p>{other.endDate}</p>
          <button
            type="button"
            className="delete"
            onClick={() => deleteOther(index)}
          >
            delete
          </button>
        </div>
      ))}
      <hr />
      <label htmlFor="title">Other title:</label>
      <input
        type="text"
        name="title"
        value={newOther.title}
        onChange={(e) => {
          setNewOther((prev) => ({ ...prev, title: e.target.value }));
        }}
      />

      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        value={newOther.name}
        onChange={(e) => {
          setNewOther((prev) => ({ ...prev, name: e.target.value }));
        }}
      />

      <label htmlFor="startDate">Start Date:</label>
      <input
        type="text"
        name="startDate"
        value={newOther.startDate}
        onChange={(e) => {
          setNewOther((prev) => ({ ...prev, startDate: e.target.value }));
        }}
      />

      <label htmlFor="endDate">End Date:</label>
      <input
        type="text"
        name="endDate"
        value={newOther.endDate}
        onChange={(e) => {
          setNewOther((prev) => ({ ...prev, endDate: e.target.value }));
        }}
      />
      <label htmlFor="describe">Describe:</label>
      <textarea
        type="text"
        name="describe"
        value={newOther.describe}
        onChange={(e) => {
          setNewOther((prev) => ({ ...prev, describe: e.target.value }));
        }}
      />
      <button type="button" onClick={addOther}>
        Add Other
      </button>
    </section>
  );
};

export default Other;
