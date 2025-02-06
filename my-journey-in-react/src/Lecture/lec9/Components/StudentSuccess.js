import React from "react";

const StudentSuccess = ({ student }) => {
  return (
    <>
      <div className="students-container">
        <p className="studentSuccess-msg">
          {student.name} You Have Passed The Exam
        </p>
      </div>
    </>
  );
};

export default StudentSuccess;
