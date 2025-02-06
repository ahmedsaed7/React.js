import React from "react";
import { Outlet, useParams } from "react-router-dom";

const StudentsDegree = () => {
  const { studentId, studentName } = useParams();
  return (
    <>
      <div className="students-container">
        <h2>
          Student {studentId} {studentName && " With Name " + studentName}{" "}
          <span> | </span> Degree In The Last Exam Is :
        </h2>
        <Outlet />
      </div>
    </>
  );
};

export default StudentsDegree;
