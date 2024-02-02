import React, { useEffect, useState } from "react";
import "./Personal.css";

const Personal = ({ onPersonalUpdate }) => {
  const [personal, setPersonal] = useState({
    fName: "",
    job: "",
    email: "",
    phone: "",
    statement: "",
  });

  useEffect(() => {
    onPersonalUpdate(personal);
  }, [onPersonalUpdate, personal]);

  return (
    <section className="personal">
      <h2>Personal Details</h2>
      <label htmlFor="fName">Full Name:</label>
      <input
        type="text"
        name="fName"
        value={personal.fName}
        onChange={(e) => {
          setPersonal((prev) => ({ ...prev, fName: e.target.value }));
        }}
      />
      <label htmlFor="job">Job:</label>
      <input
        type="text"
        name="job"
        value={personal.job}
        onChange={(e) => {
          setPersonal((prev) => ({ ...prev, job: e.target.value }));
        }}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        value={personal.email}
        onChange={(e) => {
          setPersonal((prev) => ({ ...prev, email: e.target.value }));
        }}
      />
      <label htmlFor="phone">Phone:</label>
      <input
        type="text"
        name="phone"
        value={personal.phone}
        onChange={(e) => {
          setPersonal((prev) => ({ ...prev, phone: e.target.value }));
        }}
      />
      <label htmlFor="statement">Statement:</label>
      <textarea
        name="statement"
        id=""
        value={personal.statement}
        onChange={(e) => {
          setPersonal((prev) => ({ ...prev, statement: e.target.value }));
        }}
      ></textarea>
    </section>
  );
};

export default Personal;
