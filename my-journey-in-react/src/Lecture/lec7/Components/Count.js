import React from "react";

const Count = ({ subject }) => {
  console.log(`${subject.name} Rendered`);
  return (
    <>
      <p>
        {subject.name} <span> | </span> {subject.degree}
      </p>
    </>
  );
};

export default React.memo(Count);
