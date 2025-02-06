import React, { Component } from "react";
import Student from "./Student";

class Lec03_Part02 extends Component {
  // List Of Students
  state = {
    students: [
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
        id: 1,
        name: "Islam",
        age: 21,
        city: "Cairo",
        university: "Cairo",
        major: "Web Development",
      }
    ],
  };

  render() {
    return (
      <>
        <div className="container-lec3">
          {this.state.students.map((element) => (
            <Student key={element.id} student={element} />
          ))}
        </div>
      </>
    );
  }
}

export default Lec03_Part02;
