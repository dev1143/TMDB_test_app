import React, { useContext, useReducer,useEffect } from "react";
import { initialValues, reducer } from "../Reducers/PopularMoviesreducer";
import  CustomContext, { useCustomContext }  from "../CustomContext";
import axios from "../axios";
import request_api from "../RequestCallApi";
import { API_KEY } from "../RequestCallApi";

export default function PopularMovieDescription() {
  // const [state, dispatch] = useReducer(reducer, initialValues);
  const {dispatch}=useCustomContext()
    const value = useContext(CustomContext);
   console.log('movie id==>',value.state.id)
    useEffect(() => {
      async function fetchMoviesDescription(){
        try{
            const response=await axios.get(`${request_api?.fetch_movie_description}${value?.state?.id12}?api_key=${API_KEY}`).then((res)=>{
              if(res && res.status == 200){
                console.log('my each movie description ==>',res)
              }else{
                dispatch({
                  type:"OPEN_SNACKBAR_ERROR",
                  errorMessage:"Failed to execute API's"
                })
              }
            }).catch((err)=>{
              dispatch({
                type:"OPEN_SNACKBAR_ERROR",
                payload:'Failed to execute API'
              })
            })
        }catch(err){
          console.log(err);
          dispatch({
            type:"OPEN_SNACKBAR_ERROR",
            errorMessage:"Cannot fetch Movie Descriptions!"
          })
        }
      }
      fetchMoviesDescription();
    }, [])
    
    // console.log("description==>", value?.state?.id);
  return (
    <div style={{ marginTop: "93px" }}>
      <h2>PopularMovieDescription</h2>
      {/* {value?.state == true ? <p>something true</p>:''} */}
    </div>
  );
}
