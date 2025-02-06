import React from "react";
import { useNavigate } from "react-router-dom";

const Teams = () => {
  const navigator = useNavigate();

  return (
    <>
      <div className="container">
        <h2>Teams Page</h2>
        <button onClick={() => navigator("/studentdata")}>
          Show Student Details
        </button>
      </div>
    </>
  );
};

export default Teams;
