import React, { useReducer } from "react";

const Lec06_Part04 = () => {
  const initialState = 0;

  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "double":
        return state * 2;
      case "half":
        return state / 2;
      case "reset":
        return initialState;
      default:
        return state;
    }
  };

  const [newState, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="container">
        <p>
          Number1 <span> | </span> {newState}
        </p>
        <div className="content-btns">
          <button onClick={() => dispatch("increment")}>Increment</button>
          <button onClick={() => dispatch("decrement")}>Decrement</button>
          <button onClick={() => dispatch("double")}>Double</button>
          <button onClick={() => dispatch("half")}>Half</button>
          <button onClick={() => dispatch("reset")}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default Lec06_Part04;
