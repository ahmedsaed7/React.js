import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";

const Lec06_Part06 = () => {
const [id , setId] = useState(50)
const initialState = {
  loading:true ,
  error : "",
  post : {} ,
}

const reducer = (state,action) => {
  switch (action.type) {
    case "success":return{
      loading:false ,
      error:"",
      post: action.payload,
    };
    case "error":
      return{
          loading: false,
          error: "ERROR IS OCCURRED",
          post: {},
      };
    default:
      return state;
  }
}

const [newState , dispatch] = useReducer(reducer ,initialState )

useEffect(()=>{
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then((response)=> dispatch({type:"success" , payload:response.data}))
  .catch(() => dispatch({ type: "error" }));
},[])


  return (
    <>
      <div className="container">
        
        <p>{newState.loading ? "loading ..." : newState.post.title}</p>
        <p>{newState.error ? newState.error : null}</p>
      </div>
    </>
  );
};

export default Lec06_Part06;
