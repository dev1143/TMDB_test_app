import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import request_api from "../RequestCallApi";
import Stack from "@mui/material/Stack";
import Fab from "@mui/material/Fab";
import CircularProgress from "@mui/material/CircularProgress";
import { useReducer } from "react";
import { reducer, initialValues } from "../Reducers/PopularMoviesreducer";
import { useNavigate } from "react-router-dom";

function PopularMovieCard({ data }) {
  const navigate = useNavigate();
  const [moviecard, setMoviecard] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialValues);
  useEffect(() => {
    if (data && Object.prototype.toString.call(data) == "[object Object]") {
      setMoviecard(data);
    }
  }, [data]);

  const fetchColor = (number) => {
    let colorString = "";
    if (parseInt(number) >= 70) {
      colorString = "success";
    } else {
      colorString = "warning";
    }
    return colorString;
  };

  console.log("inidividual popular render==>", moviecard);
  console.log("inidividual id to populate==>", state.id, moviecard?.id);

  return (
    <Card
      style={{ position: "relative" }}
      sx={{ height: 500, maxWidth: 250, marginBottom: "15px" }}
    >
      <CardMedia
        sx={{
          height: 400,
          minWidth: 200,
          display: "flex",
          justifyContent: "center",
        }}
        image={`${request_api.fetcg_a_single_image}${moviecard?.poster_path}`}
        title={moviecard?.title}
      />
      <Fab
        aria-label="save"
        sx={{ backgroundColor: "black" }}
        // color='black'
        size="medium"
        style={{ position: "absolute", bottom: "76px", right: "10px" }}
        // sx={buttonSx}
      >
        <CircularProgress
          variant="determinate"
          value={moviecard?.vote_average * 10}
          color={fetchColor(moviecard?.vote_average * 10)}
          sx={{
            position: "absolute",
            top: 4,
            // left: -2,
            // right:2,
            zIndex: 1,
          }}
        />
        <Typography
          style={{ fontSize: "15px", fontWeight: "bold", color: "white" }}
        >{`${moviecard?.vote_average * 10}%`}</Typography>
      </Fab>
      <CardContent>
        <Typography
          style={{ textAlign: "left", fontSize: "1.2rem" }}
          gutterBottom
          variant="h5"
          onClick={(e) => {
            e.preventDefault();
            dispatch({
              type: "passvalue",
              payload: moviecard?.id,
            });
            navigate("description");
            // navigate(`/movie/popular/${moviecard?.id}`);
            // let passMovieTitleId=moviecard?.id
          }}
          component="div"
        >
          <b>{moviecard?.title}</b>
        </Typography>
        <Typography variant="body2" color="text.primary">
          {new Date(moviecard?.release_date).toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </Typography>
      </CardContent>
      {/* <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions> */}
    </Card>
  );
}
export default PopularMovieCard;
