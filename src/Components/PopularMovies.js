import React, { useState, useLayoutEffect, useEffect } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import MainNavigation from "./MainNavigation";
import { Outlet } from "@mui/icons-material";
import { useLoaderData, useLocation, useNavigation } from "react-router-dom";

export default function PopularMovies() {
  const [loader, setLoader] = useState(false);
  const [loader2, setLoader2] = useState(false);
  const [fetcherproducts, setFetcherproducts] = useState(null);

  const navigation = useNavigation();
  // const data = useLoaderData();

  // console.log("response from loader", data);

  // useEffect(() => {
  //   async function fetchdummydata() {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     const res = await response.json();
  //     console.log("dummy json==>", res);
  //     setFetcherproducts(res);
  //   }
  //   fetchdummydata();
  // }, []);

  // const { pathname } = useLocation();

  useLayoutEffect(() => {
    setLoader(true);
    // const loadData = async () => {
    //   await new Promise((r) => setTimeout(r, 700));
    //   setLoader(false);
    //   // setLoader((loadding) => !loadding);
    // };
    const timer = setTimeout(() => {
      setLoader(false);
    }, 3300);
    return () => clearTimeout(timer);
    // loadData();
  }, []);

  useEffect(() => {
    async function randomfetch() {
      setLoader2(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setLoader2(false);
      if (!response.ok) {
        throw new Error("Fetching Cannot be done!");
      }
      const res = await response.json();
      setFetcherproducts(res.length > 0 ? res : []);
    }
    randomfetch();
  }, []);

  const renderLoader = () => {
    if (loader) {
      return <p>Loading .....</p>;
    } else {
      return <p>Its time to laugh and then die..</p>;
    }
  };

  return (
    <div style={{ marginTop: "73px" }}>
      <div>
        {loader2 ? (
          <LinearProgress />
        ) : (
          fetcherproducts &&
          fetcherproducts.length > 0 &&
          fetcherproducts.map((item) => <h3>{item.title}</h3>)
        )}
        {/* <p> Start Hey this is the main movie Components to be renderd</p>
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
        <p>Hey this is the main movie Components to be renderd End</p> */}
      </div>
    </div>
  );
}
