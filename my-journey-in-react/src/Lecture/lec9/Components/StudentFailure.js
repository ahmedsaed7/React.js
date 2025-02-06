import React from "react";

const StudentFailure = ({ student }) => {
  return (
    <>
      <div className="students-container">
        <p className="studentFailure-msg ">
          {student.name} You Have Not Passed The Exam
        </p>
      </div>
    </>
  );
};

export default StudentFailure;
