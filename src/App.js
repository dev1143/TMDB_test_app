import logo from "./logo.svg";
import useEffect, { useContext } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  useLocation,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import MainNavigation from "./Components/MainNavigation";
import ErrorPage from "./ErrorPage";
import PopularMovies from "./Components/PopularMovies";
import NowPlaying from "./Components/NowPlaying";
import PopularMovieDescription from "./Components/PopularMovieDescription";
import Navbar from "./Components/Navbar";
import React, { useReducer, createContext } from "react";
import {tablereducer}  from "./Reducers/PopularMoviesreducer";
import CustomContext from "./CustomContext";
import {Progress} from "./Loader";
import SnackBar from "./Loader/SnackBar";


// export const CustomContext = createContext();
function App() {
  const [state, dispatch] = React.useReducer(tablereducer, []);
const value=useContext(CustomContext)

  const providerState = {
    state,
    dispatch,
  };
  // useEffect(() => {

  // }, [])
  // const {pathname}=useLocation();
  // console.log('pathname',pathname)
  const routes = [
    {
      path: "/",

      element: <MainNavigation />,
      children: [
        {
          path: "/movie/popular",
          element: (
            <>
              <PopularMovies />
              <Outlet />
            </>
          ),
          errorElement: <ErrorPage />,
          children: [
            {
              path: "description",
              element: <PopularMovieDescription />,
            },
          ],
        },
        {
          path: "/movie/now-playing",
          element: <NowPlaying />,
          errorElement: <ErrorPage />,
        },
        // {
        //   path: "/movie/upcoming",
        //   element: <MovieComp />,
        //   errorElement: <ErrorPage />,
        // },
      ],
    },
  ];
  const router = createBrowserRouter(routes);
  return (
       <CustomContext.Provider value={providerState}> 
    <div className="App">
        <Router>
          <SnackBar/>
          <Navbar/>
          <Routes>
            <Route exact path="/movie/popular" element={<PopularMovies />} />
            <Route exact path="/movie/now-playing" element={<NowPlaying />} />
            <Route
              exact
              path="/movie/popular/description"
              element={<PopularMovieDescription />}
            />
          </Routes>
        </Router>
      {/* <RouterProvider router={router} /> */}
    </div>
       </CustomContext.Provider> 
  );
}

export default App;
