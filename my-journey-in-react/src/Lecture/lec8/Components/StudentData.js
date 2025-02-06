import React from "react";
import { useNavigate } from "react-router-dom";

const StudentData = () => {
  const student = {
    name: "Mohamed saed",
    age: 21,
    faculty: "Computer Science",
  };

  const navigator = useNavigate();
  return (
    <>
      <div className="student-container">
        <h2> Name <span> : </span> {student.name} </h2>
        <p>Age <span> : </span> {student.age}</p>
        <p>Faculty <span> : </span> {student.faculty}</p>
        <button onClick={() => navigator(-1)}>Go Back</button>
      </div>
    </>
  );
};

export default StudentData;
