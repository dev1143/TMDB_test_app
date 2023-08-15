import React,{useState,useLayoutEffect} from "react";
import LinearProgress from '@mui/material/LinearProgress';
import MainNavigation from "./MainNavigation";
import { Outlet } from "@mui/icons-material";
import { useLocation } from "react-router-dom";

export default function MainMovieComp() {
  const [loader, setLoader] = useState(true);
  const {pathname} =useLocation();

  useLayoutEffect(()=>{
    setLoader(true);
    const timer=setTimeout(()=>{
      setLoader(false)
    },1000)
    return (()=>
     clearTimeout(timer)
    )
  },[pathname])

  return (
    <div style={{ marginTop: "73px" }}>
       {loader && <LinearProgress/>}
      <p> Start Hey this is the main movie Components to be renderd</p>
      <p>Hey this is the main movie Components to be renderd</p>
      <p>Hey this is the main movie Components to be renderd</p>
      <p>Hey this is the main movie Components to be renderd</p>
      <p>Hey this is the main movie Components to be renderd</p>
      <p>Hey this is the main movie Components to be renderd</p>
      <p>Hey this is the main movie Components to be renderd</p>
      <p>Hey this is the main movie Components to be renderd</p>
      <p>Hey this is the main movie Components to be renderd</p>
      <p>Hey this is the main movie Components to be renderd</p>
      <p>Hey this is the main movie Components to be renderd</p>
      <p>Hey this is the main movie Components to be renderd</p>
      <p>Hey this is the main movie Components to be renderd</p>
      <p>Hey this is the main movie Components to be renderd</p>
      <p>Hey this is the main movie Components to be renderd</p>
      <p>Hey this is the main movie Components to be renderd</p>
      <p>Hey this is the main movie Components to be renderd</p>
      <p>Hey this is the main movie Components to be renderd</p>
      <p>Hey this is the main movie Components to be renderd</p>
      <p>Hey this is the main movie Components to be renderd</p>
      <p>Hey this is the main movie Components to be renderd</p>
      <p>Hey this is the main movie Components to be renderd</p>
      <p>Hey this is the main movie Components to be renderd</p>
      <p>Hey this is the main movie Components to be renderd</p>
      <p>Hey this is the main movie Components to be renderd</p>
      <p>Hey this is the main movie Components to be renderd</p>
      <p>Hey this is the main movie Components to be renderd</p>
      <p>Hey this is the main movie Components to be renderd</p>
      <p>Hey this is the main movie Components to be renderd</p>
      <p>Hey this is the main movie Components to be renderd</p>
      <p>Hey this is the main movie Components to be renderd</p>
      <p>Hey this is the main movie Components to be renderd</p>
      <p>Hey this is the main movie Components to be renderd End</p>
    </div>
  );
}
