import React, { useState, useLayoutEffect, useEffect } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import axios from '../axios';
import requestmovies from '../RequestCallApi';
import MainNavigation from "./MainNavigation";
import { Outlet } from "@mui/icons-material";
import { useLoaderData, useLocation, useNavigation } from "react-router-dom";
import PopularMovieCard from "./PopularMovieCard";
import Stack from '@mui/material/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export default function PopularMovies() {
  const [loader, setLoader] = useState(false);
  const [PopularMovies, setPopularMovies] = useState(null);

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

  // useLayoutEffect(() => {
  //   setLoader(true);
  //   // const loadData = async () => {
  //   //   await new Promise((r) => setTimeout(r, 700));
  //   //   setLoader(false);
  //   //   // setLoader((loadding) => !loadding);
  //   // };
  //   const timer = setTimeout(() => {
  //     setLoader(false);
  //   }, 3300);
  //   return () => clearTimeout(timer);
  //   // loadData();
  // }, []);

  useEffect(() => {
    async function fetchPopularMovies(){
      setLoader(true);
      const response =await axios.get(requestmovies.fetch_popular_movies).then((res)=>{
        if(res && res.status == 200){
          setLoader(false);
          if(res.data){
            let actualsetofMovies=res?.data?.results;
            setPopularMovies(actualsetofMovies && actualsetofMovies.length > 0 ? actualsetofMovies : [])
          }
          console.log(res);
        }
      })
      .catch((err)=>{
        throw new Error(err)
      })
    }
    fetchPopularMovies()
  }, [])
  console.log('popular movies==>',PopularMovies)

  // useEffect(() => {
  //   async function randomfetch() {
  //     setLoader2(true);
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     setLoader2(false);
  //     if (!response.ok) {
  //       throw new Error("Fetching Cannot be done!");
  //     }
  //     const res = await response.json();
  //     setFetcherproducts(res.length > 0 ? res : []);
  //   }
  //   randomfetch();
  // }, []);



  return (
    <div style={{ marginTop: "73px" }}>
      <div>
        {loader ? (
          <LinearProgress />
        ) : (
          
         <>
         <Container>
          <Row>
          {PopularMovies &&
          PopularMovies.length > 0 &&
          PopularMovies.map((item) => 
          <Col lg={3} md={4} xs={12}>
          <PopularMovieCard
             data={item}
          />
          </Col>
          )}
          </Row>
          </Container>
          </>
        
  
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
