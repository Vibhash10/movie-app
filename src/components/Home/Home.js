import React, { useState, useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { APIKEY } from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const movieText = "American";
  const dispatch = useDispatch();

  const fetchMovies = async () => {
    const response = await movieApi
      .get(`?apiKey=${APIKEY}&s=${movieText}&type=movie`)
      .catch((error) => {
        console.log(error);
      });
    console.log("The respponse from API call", response);
    dispatch(addMovies(response.data));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <div className="banner-img">Home</div>
      <MovieListing />
    </div>
  );
};

export default Home;
