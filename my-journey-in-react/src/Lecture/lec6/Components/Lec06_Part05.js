import React, { useReducer } from "react";

const Lec06_Part05 = () => {
  const initialState = {
    num1: 0,
    num2: 100,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      // Num1 Actions
      case "increment1":
        return { ...state, num1: state.num1 + 1 };
      case "decrement1":
        return { ...state, num1: state.num1 - 1 };
      case "double1":
        return { ...state, num1: state.num1 * 2 };
      case "half1":
        return { ...state, num1: state.num1 / 2 };

      // Num2 Actions
      case "increment2":
        return { ...state, num2: state.num2 + 1 };
      case "decrement2":
        return { ...state, num2: state.num2 - 1 };
      case "double2":
        return { ...state, num2: state.num2 * 2 };
      case "half2":
        return { ...state, num2: state.num2 / 2 };

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
        {/* ===== Num1 Content ===== */}
        <p>
          Number1 <span> | </span> {newState.num1}
        </p>
        <div className="content-btns">
          <button onClick={() => dispatch({ type: "increment1" })}>
            Increment
          </button>
          <button onClick={() => dispatch({ type: "decrement1" })}>
            Decrement
          </button>
          <button onClick={() => dispatch({ type: "double1" })}>Double</button>
          <button onClick={() => dispatch({ type: "half1" })}>Half</button>
          <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>

        {/* ===== Num2 Content ===== */}

        <p>
          Number2 <span> | </span> {newState.num2}
        </p>
        <div className="content-btns">
          <button onClick={() => dispatch({ type: "increment2" })}>
            Increment
          </button>
          <button onClick={() => dispatch({ type: "decrement2" })}>
            Decrement
          </button>
          <button onClick={() => dispatch({ type: "double2" })}>Double</button>
          <button onClick={() => dispatch({ type: "half2" })}>Half</button>
          <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default Lec06_Part05;
