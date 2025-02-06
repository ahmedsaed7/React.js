import React from "react";

const Button = ({ func, children, subject }) => {
  console.log(`${children + " " + subject.name} Rendered`);
  return (
    <>
      <button onClick={func}>{children + " " + subject.name}</button>
    </>
  );
};

export default React.memo(Button);
