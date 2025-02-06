import React from "react";
import StudentSuccess from "../Components/StudentSuccess";
import StudentFailure from "../Components/StudentFailure";
import { useSearchParams } from "react-router-dom";

const students = [
  {
    id: 1,
    name: "Islam Shaker",
    level: 3,
    university: "Cairo",
    Major: "Computer Science",
    status: "succeeded",
  },
  {
    id: 2,
    name: "Mustafa Ahmed",
    level: 3,
    university: "Cairo",
    Major: "Computer Science",
    status: "succeeded",
  },
  {
    id: 3,
    name: "Hossam Gamal",
    level: 3,
    university: "Cairo",
    Major: "Computer Science",
    status: "succeeded",
  },
  {
    id: 4,
    name: "Omar Elmasry",
    level: 3,
    university: "AinShams",
    Major: "Engineering",
    status: "failed",
  },
  {
    id: 5,
    name: "Yusuf Omar",
    level: 3,
    university: "AinShams",
    Major: "Computer Science",
    status: "failed",
  },
  {
    id: 6,
    name: "Khaled Ali",
    level: 3,
    university: "AinShams",
    Major: "Engineering",
    status: "failed",
  },
];

const Students = () => {
  const [ids, setIds] = useSearchParams();
  const succeededStudents = ids.get("filter") === "succeeded";

  return (
    <>
      <div className="students-container">
        <div className="students-btns">
          <button onClick={() => setIds({ filter: "succeeded" })}>
            Succeeded Students
          </button>
          <button onClick={() => setIds({ filter: "failed" })}>
            Failed Students
          </button>
        </div>
        <div className="students-content">
          {succeededStudents
            ? students.map((student) => {
                return (
                  student.status === "succeeded" && (
                    <StudentSuccess student={student} />
                  )
                );
              })
            : students.map((student) => {
                return (
                  student.status === "failed" && (
                    <StudentFailure student={student} />
                  )
                );
              })}
        </div>
      </div>
    </>
  );
};

export default Students;
