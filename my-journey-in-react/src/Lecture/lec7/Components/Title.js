import React from "react";

const Title = () => {
  console.log("Title Rendered");
  return <h2>Title</h2>;
};

export default React.memo(Title);
