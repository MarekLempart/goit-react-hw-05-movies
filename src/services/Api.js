// Api.js

import axios from 'axios';

const baseURL = 'https://api.themoviedb.org';
const API_KEY = 'c94d8e5ef8b4fe69956b21ebd01a6f37';
const AUTHORIZATION =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTRkOGU1ZWY4YjRmZTY5OTU2YjIxZWJkMDFhNmYzNyIsInN1YiI6IjY1ZTg1MDMxM2ZlMTYwMDE2MjVjZTg3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ut43gbHMar0hOfK1FZIIz0nwPLqmUTw0HqWj4r3u8m4';

const options = {
  method: 'GET',
  params: {
    api_key: API_KEY,
    language: 'en-US',
    include_adult: false,
  },
  headers: {
    accept: 'application/json',
    Authorization: AUTHORIZATION,
  },
};

export const fetchTrendMovies = async () => {
  options.url = `${baseURL}/3/trending/movie/day`;
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchMovieByName = async query => {
  options.url = `${baseURL}/3/search/movie`;
  options.params.query = query;
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchMovieById = async movieId => {
  options.url = `${baseURL}/3/movie/${movieId}`;
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchMovieCast = async movieId => {
  options.url = `${baseURL}/3/movie/${movieId}/credits`;
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchMovieReviews = async movieId => {
  options.url = `${baseURL}/3/movie/${movieId}/reviews`;
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchMovieTrailers = async movieId => {
  options.url = `${baseURL}/3/movie/${movieId}/videos`;
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
