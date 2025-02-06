import React, { useState } from "react";
import Student from "./Student";

const Lec02_Part02 = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Islam",
      age: 21,
      city: "Cairo",
      university: "Cairo",
      major: "Web Development",
    },
    {
      id: 2,
      name: "Ahmed",
      age: 27,
      city: "Cairo",
      university: "Helwan",
      major: "MicroBiology",
    },
    {
      id: 3,
      name: "Mohamed",
      age: 30,
      city: "Cairo",
      university: "AinShams",
      major: "Engineering",
    },
    {
      id: 4,
      name: "Mustafa",
      age: 20,
      city: "Giza",
      university: "Cairo",
      major: "Backend Development",
    },
    {
      id: 5,
      name: "Hossam",
      age: 21,
      city: "Cairo",
      university: "Cairo",
      major: "Data Science",
    },
    {
      id: 6,
      name: "saed",
      age: 22,
      city: "Cairo",
      university: "Cairo",
      major: "AI",
    },
  ]);

  return (
    <>
      <div className="container-lec2">
        {students.map((element) => (
          <Student key={element.id} student={element} />
        ))}
      </div>
    </>
  );
};

export default Lec02_Part02;
