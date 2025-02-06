import React, { useCallback, useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

const Result = () => {
  const [sub1, setSub1] = useState({
    name: "Arabic",
    degree: 50,
  });
  const [sub2, setSub2] = useState({
    name: "English",
    degree: 60,
  });

  const add1 = useCallback(() => {
    setSub1({ ...sub1, degree: sub1.degree + 1 });
  }, [sub1]);

  const add2 = useCallback(() => {
    setSub2({ ...sub2, degree: sub2.degree + 1 });
  }, [sub2]);

  return (
    <>
      <div className="container">
        <Title />
        <div className="content-txt">
          <Count subject={sub1} />
          <Button func={add1} subject={sub1}>
            Add Degree For
          </Button>
        </div>
        <div className="content-txt">
          <Count subject={sub2} />
          <Button func={add2} subject={sub2}>
            Add Degree For
          </Button>
        </div>
      </div>
    </>
  );
};

export default React.memo(Result);
