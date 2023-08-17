import React, { useEffect } from "react";
import { useLayoutEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
// import * as React from "react";
// import { makeStyles } from "@material-ui/core/styles";

import Navbar from "./Navbar";

// const pages = [
//   { name: "Movies", path: "movie" },
//   { name: "TV Shows", path: "tv" },
//   { name: "People", path: "person" },
// ];
// const MovieAllList = {
//   movies: [
//     { name: "Popular", path: "/popular" },
//     { name: "Now Playing", path: "/nowplaying" },
//     { name: "Up Coming", path: "upcoming" },
//   ],
//   tvShows: ["Popular", "Airing Today", "On Tv", "Top Rated"],
//   people: ["Popular People"],
// };
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function MainNavigation() {
  const navigation = useNavigation();
  const location = useLocation();
  const [prevLoc, setPrevLoc] = useState("");
  const [progress, setProgress] = useState(false);
  console.log("progress state==>", navigation, navigation.state);

  // useEffect(() => {
  //   setPrevLoc(location.pathname);
  //   setProgress(true);
  //   if (location.pathname === prevLoc) {
  //     setPrevLoc("");
  //     //thanks to ankit sahu
  //   }
  // }, [location]);

  // useEffect(() => {
  //   setProgress(false);
  // }, [prevLoc]);

  return (
    <>
      <Navbar />
      <main>
        {/* {progress && <LinearProgress />} */}
        {/* {navigation.state == "loading" && <LinearProgress />} */}
        <Outlet />
      </main>

      {/* trending movies will be replicated over here */}
    </>
  );
}
