import React, { useContext, useReducer } from "react";
import { initialValues, reducer } from "../Reducers/PopularMoviesreducer";
import  CustomContext  from "../CustomContext";

export default function PopularMovieDescription() {
  // const [state, dispatch] = useReducer(reducer, initialValues);
    const value = useContext(CustomContext);
    console.log("description==>", value);
  return (
    <div style={{ marginTop: "93px" }}>
      <h2>PopularMovieDescription</h2>
    </div>
  );
}
