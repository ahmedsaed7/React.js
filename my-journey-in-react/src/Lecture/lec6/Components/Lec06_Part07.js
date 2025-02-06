import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";

const Lec06_Part07 = () => {
  const [id, setId] = useState(); // State to store the ID of the post to fetch
  
  const initialState = { // Initial state for the reducer
    loading: true,      // Initially set to true, indicating data is being fetched
    error: "",         // Initially no error
    post: {},          // Initially no post data
  };

  const reducer = (state, action) => { // Reducer function to handle state updates
    switch (action.type) {
      case "success":
        return {
          loading: false, // Data fetching complete
          error: "", // Clear any previous errors
          post: action.payload, // Set the fetched post data
        };
      case "error":
        return {
          loading: false,  // Data fetching complete
          error: "ERROR IS OCCURRED",  // Set an error message 
          post: {}, // Clear any existing post data
        };
      default:
        return state;
    }
  };

  // Use the useReducer hook to manage the component's state
  const [newState, dispatch] = useReducer(reducer, initialState);
  // useEffect hook to fetch data and handle side effects
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);  // Make the API request
        dispatch({ type: "success", payload: response.data }); // Dispatch a success action with the fetched data
      } catch (error) {
        dispatch({ type: "error" }); // Dispatch an error action 
      }
    };
     // Call the fetchData function
    fetchData();
  }, [id]); // Include 'id' in the dependency array to re-fetch data when 'id' changes

  return ( 
    <>
      <div className="container">
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <p>{newState.loading ? "Loading..." : newState.post.title}</p>
        <p>{newState.error ? newState.error : null}</p>
      </div>
    </>
  );
};

export default Lec06_Part07;