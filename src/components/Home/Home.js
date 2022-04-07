import React, { useState, useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { APIKEY } from "../../common/apis/MovieApiKey";

const Home = () => {
  const movieText = "American";

  const fetchMovies = async () => {
    const response = await movieApi
      .get(`?apiKey=${APIKEY}&s=${movieText}&type=movie`)
      .catch((error) => {
        console.log(error);
      });
    console.log("The respponse from API call", response);
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
