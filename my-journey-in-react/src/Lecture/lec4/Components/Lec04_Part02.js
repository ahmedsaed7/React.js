import React, { useState } from "react";

const Lec04_Part02 = () => {
  const [students, setStudent] = useState({
    name: "",
    age: "",
    city: "",
    degree:"",
  });
console.log(students)
  return (
    <>
      <div className="container container2">
        <div className="fixed">
          <div className="content-inputs">
            <input type="text" placeholder="Enter Student Name" value={students.name} onChange={(e) =>
                setStudent({...students , name: e.target.value})}/>

            <input type="text" placeholder="Enter The Age " value={students.age} onChange={(e) =>
                setStudent({...students, age: e.target.value})}/>

            <input type="text" placeholder="Enter The City " value={students.city} onChange={(e) =>
                setStudent({...students, city: e.target.value})}/>
            
            <input type="text" placeholder="Enter The City " value={students.degree} onChange={(e) =>
                setStudent({...students, degree: e.target.value})}/>
          </div>

          <div className="content-text">
            <h2> Student Name : <span> { students.name } </span> </h2>
            <h2> Student Age :<span> {students.age} </span> </h2>
            <h2> Student city : <span> {students.city} </span> </h2>
            <h2> Student Degree : <span> {students.degree} </span> </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lec04_Part02;
