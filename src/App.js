import logo from "./logo.svg";
import useEffect  from "react";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import MainNavigation from "./Components/MainNavigation";
import ErrorPage from "./ErrorPage";
import MovieComp from "./Components/MainMovieComp";
import NowPlaying from "./Components/NowPlaying";

function App() {
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
          path: "/popular",
          element: <MovieComp />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/nowplaying",
          element: <NowPlaying />,
          errorElement: <ErrorPage />,
        },
        // {
        //   path: "/popular",
        //   element: <MovieComp />,
        //   errorElement: <ErrorPage />,
        // },
      ],
    },
  ];
  const router = createBrowserRouter(routes);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
